#!/usr/bin/env python3
"""
POWER S.A.C. — Genera una página por modelo y el listado de compresores.

Los datos salen de PRODUCTS_BASE en assets/js/main.js (el mismo catálogo de la página principal),
así que para agregar o corregir un equipo:
  1. Edita PRODUCTS_BASE en assets/js/main.js.
  2. Ejecuta desde la carpeta del sitio:  python3 herramientas/generar_paginas.py
  3. Sube los archivos actualizados (carpeta compresores/ y sitemap.xml).

No necesita instalar nada: solo Python 3.
"""
import html, json, os, re, urllib.parse
from datetime import date

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOMINIO = 'https://compresoresperu.power.com.pe'
WA = '51958741899'
SEDES = 'Arequipa, Chala, Juliaca, Lima, Nasca y Trujillo'

e = lambda t: html.escape(str(t), quote=True)
wa = lambda t: f'https://wa.me/{WA}?text=' + urllib.parse.quote(t)


def leer_productos():
    js = open(os.path.join(RAIZ, 'assets/js/main.js'), encoding='utf8').read()
    i = js.index('const PRODUCTS_BASE = ') + len('const PRODUCTS_BASE = ')
    j = js.index('\n];', i) + 2
    return json.loads(js[i:j])


def slug(p):
    return p['name'].replace('Atlas Copco ', '').lower().replace(' ', '-')


def modelo(p):
    return p['name'].replace('Atlas Copco ', '')


def familia(p):   # "G2", "G11"...
    return modelo(p).split()[0]


def spec(p, etiqueta):
    for s in p['specs']:
        if s['l'] == etiqueta:
            return s['v']
    return ''


def bloques_comunes():
    """Cabecera, pie y elementos flotantes copiados de index.html, con rutas ajustadas a ../../"""
    h = open(os.path.join(RAIZ, 'index.html'), encoding='utf8').read()
    cab = h[h.index('<header>'):h.index('</header>') + len('</header>')]
    pie = h[h.index('<footer class="footer">'):h.index('</footer>') + len('</footer>')]
    # Las páginas de modelo ya tienen su propio cierre ("¿Es el G7 el equipo que necesitas?"): se quita el del pie para no repetirlo
    pie = re.sub(r'\s*<div class="footer-cta">.*?</div>\s*</div>', '', pie, count=1, flags=re.S)
    flot = h[h.index('<div class="scroll-progress"'):h.index('<!-- ============================================================ PRODUCT MODAL -->')]
    return cab, pie, flot


def ajustar_rutas(bloque, raiz):
    bloque = re.sub(r'href="#', f'href="{raiz}#', bloque)
    bloque = re.sub(r'(src|href)="(assets|compresores)/', rf'\1="{raiz}\2/', bloque)
    bloque = re.sub(r'\s*data-spy="[^"]*"', '', bloque)
    return bloque


def cabeza(titulo, descripcion, url, imagen, raiz, jsonld):
    return f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self'; connect-src 'self' https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; form-action https://api.web3forms.com; base-uri 'self'; object-src 'none'">
<title>{e(titulo)}</title>
<meta name="description" content="{e(descripcion)}">
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#0b2239">
<meta property="og:title" content="{e(titulo)}">
<meta property="og:description" content="{e(descripcion)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_PE">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{imagen}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="{raiz}assets/fonts/archivo-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{raiz}assets/css/style.css">
<link rel="stylesheet" href="{raiz}assets/css/icons.css">
<link rel="stylesheet" href="{raiz}assets/css/producto.css">
<link rel="icon" type="image/png" href="{raiz}assets/img/favicon.png">
<script src="{raiz}assets/js/boot.js"></script>
<script src="{raiz}assets/js/analitica.js" defer></script>
<script type="application/ld+json">
{json.dumps(jsonld, ensure_ascii=False, indent=2)}
</script>
</head>
<body>
'''


def pagina_producto(p, todos, cab, pie, flot):
    raiz = '../../'
    m, s, fam = modelo(p), slug(p), familia(p)
    url = f'{DOMINIO}/compresores/{s}/'
    img = p['images'][0]
    img_abs = f'{DOMINIO}/{img}'
    kw, psi, ls = p['chips'][0], p['chips'][1], p['chips'][2]
    secador = 'Secador integrado' in p['chips'][3]
    tanque = ' TM' in p['name']
    montaje = 'sobre depósito' if tanque else 'sobre bancada'
    cv = re.search(r'\(([\d.]+) CV\)', spec(p, 'Potencia')).group(1)

    titulo = f'Compresor Atlas Copco {m} de {kw} en Perú | POWER S.A.C.'
    descripcion = (f'Compresor de tornillo Atlas Copco {m}: {kw} ({cv} CV), {ls} a {psi}, montado {montaje}'
                   f'{", con secador integrado" if secador else ""}. Distribuidor autorizado en Perú con sedes en {SEDES}.')

    versiones = [x for x in todos if familia(x) == fam]
    potencias = sorted({float(x['power']) for x in todos})
    pos = potencias.index(float(p['power']))
    cercanas = [pw for pw in potencias[max(0, pos - 2):pos + 3] if pw != float(p['power'])]
    otros = []
    for pw in cercanas:
        cand = [x for x in todos if float(x['power']) == pw]
        igual = [x for x in cand if (' TM' in x['name']) == tanque] or cand
        otros.append(igual[0])
    otros = otros[:3]

    jsonld = {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "Product", "name": f"Compresor Atlas Copco {m}", "model": m, "image": img_abs, "url": url,
             "description": p['desc'], "category": "Compresores de tornillo",
             "brand": {"@type": "Brand", "name": "Atlas Copco"},
             "additionalProperty": [{"@type": "PropertyValue", "name": x['l'], "value": x['v']} for x in p['specs']]},
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Inicio", "item": f'{DOMINIO}/'},
                {"@type": "ListItem", "position": 2, "name": "Compresores", "item": f'{DOMINIO}/compresores/'},
                {"@type": "ListItem", "position": 3, "name": m, "item": url}]}
        ]
    }

    fila = lambda x: f'            <tr><th scope="row">{e(x["l"])}</th><td>{e(x["v"])}</td></tr>'
    psi_max = psi.replace(' psi', '')
    claves = ['Potencia', 'Presión máxima de trabajo', f'Caudal FAD a {psi_max} psi', 'Dimensiones (prof. × ancho × alto)', 'Peso', 'Nivel sonoro']
    esenciales = [x for x in p['specs'] if x['l'] in claves]
    resto = [x for x in p['specs'] if x['l'] not in claves]
    filas_spec = '\n'.join(fila(x) for x in esenciales)
    filas_resto = '\n'.join(fila(x) for x in resto)
    otras_ver = [x for x in versiones if x is not p]
    chips_ver = '\n'.join(
        f'        <a class="pp-ver" href="../{slug(x)}/">{e(modelo(x))} <small>'
        f'{"sobre depósito" if " TM" in x["name"] else "sobre bancada"}{", con secador" if "Secador integrado" in x["chips"][3] else ""}</small></a>'
        for x in otras_ver)
    bloque_versiones = (
        '\n    <section class="pp-bloque pp-bloque-corto" aria-labelledby="ver-titulo">\n'
        f'      <h2 id="ver-titulo">Otras versiones del {e(fam)}</h2>\n'
        '      <div class="pp-vers">\n' + chips_ver + '\n      </div>\n    </section>\n') if otras_ver else ''
    tarjetas = '\n'.join(f'''        <a class="pp-otro" href="../{slug(x)}/">
          <div class="pp-otro-img"><img src="{raiz}{e(x['images'][0])}" alt="Compresor Atlas Copco {e(modelo(x))}" width="600" height="600" loading="lazy"></div>
          <div class="pp-otro-tx"><strong>{e(modelo(x))}</strong><span>{e(x['chips'][0])}, {e(x['chips'][2])} a {e(x['chips'][1])}</span></div>
        </a>''' for x in otros)

    cuerpo = f'''{ajustar_rutas(cab, raiz)}

<main class="pp-main" id="contenido">
  <div class="pp-wrap">
    <nav class="migas" aria-label="Ruta">
      <ol>
        <li><a href="{raiz}">Inicio</a></li>
        <li><a href="../">Compresores</a></li>
        <li><span aria-current="page">{e(m)}</span></li>
      </ol>
    </nav>

    <section class="pp-hero">
      <div class="pp-foto"><img src="{raiz}{e(img)}" alt="Compresor Atlas Copco {e(m)}" width="600" height="600" fetchpriority="high"></div>
      <div>
        <p class="pp-marca">Compresor de tornillo Atlas Copco, serie G</p>
        <h1 class="pp-h1">Compresor Atlas Copco {e(m)}</h1>
        <p class="pp-sub">{'Sobre depósito' if tanque else 'Sobre bancada'}, {'<b>con secador integrado</b>' if secador else 'sin secador'}</p>
        <dl class="pp-datos">
          <div><dt>Potencia</dt><dd>{e(kw.replace(' kW', ''))} <small>kW ({e(cv)} CV)</small></dd></div>
          <div><dt>Presión</dt><dd>{e(psi.replace(' psi', ''))} <small>psi</small></dd></div>
          <div><dt>Caudal</dt><dd>{e(ls.replace(' L/s', ''))} <small>L/s</small></dd></div>
          <div><dt>Secador</dt><dd>{'Integrado' if secador else 'No'}</dd></div>
        </dl>
        <div class="pp-acciones">
          <a class="pp-btn pp-btn-wa" href="{e(wa(f'¡Hola, POWER! Quiero cotizar el compresor Atlas Copco {m}.'))}" target="_blank" rel="noopener"><i aria-hidden="true" class="fab fa-whatsapp"></i> Cotizar por WhatsApp</a>
          <a class="pp-btn pp-btn-sec" href="{e(wa(f'¡Hola, POWER! ¿Me pueden enviar la ficha técnica en PDF del compresor Atlas Copco {m}?'))}" target="_blank" rel="noopener"><i aria-hidden="true" class="fas fa-file-alt"></i> Pedir ficha en PDF</a>
        </div>
        <p class="pp-nota">Distribuidor autorizado Atlas Copco. Atendemos desde nuestras <a href="{raiz}#sedes">sedes en {SEDES}</a>.</p>
      </div>
    </section>

    <section class="pp-bloque" aria-labelledby="specs-titulo">
      <h2 id="specs-titulo">Especificaciones técnicas del {e(m)}</h2>
      <table class="pp-specs">
        <tbody>
{filas_spec}
        </tbody>
      </table>
      <details class="pp-mas">
        <summary>Ver todas las especificaciones</summary>
        <table class="pp-specs">
          <tbody>
{filas_resto}
          </tbody>
        </table>
        <p class="pp-fuente">Datos del catálogo oficial Atlas Copco serie G, versión 60 Hz. Caudal medido según ISO 1217.</p>
      </details>
    </section>
{bloque_versiones}
    <section class="pp-bloque" aria-labelledby="otros-titulo">
      <h2 id="otros-titulo">Otros compresores de la serie G</h2>
      <div class="pp-otros">
{tarjetas}
      </div>
    </section>
  </div>
</main>

{ajustar_rutas(pie, raiz)}

{ajustar_rutas(flot, raiz)}
<script src="{raiz}assets/js/pagina.js"></script>
</body>
</html>
'''
    return cabeza(titulo, descripcion, url, img_abs, raiz, jsonld) + cuerpo


def pagina_listado(todos, cab, pie, flot):
    raiz = '../'
    url = f'{DOMINIO}/compresores/'
    titulo = 'Compresores de tornillo Atlas Copco serie G en Perú | POWER S.A.C.'
    descripcion = (f'{len(todos)} modelos de compresores de tornillo Atlas Copco serie G, de 2.2 a 22 kW, con o sin secador, '
                   f'sobre bancada o depósito. Distribuidor autorizado en Perú con sedes en {SEDES}.')
    grupos = [('de hasta 4 kW', 'Para talleres y consumo moderado de aire.', lambda x: x['power'] <= 4),
              ('de 5.5 a 11 kW', 'Para producción continua en plantas y talleres grandes.', lambda x: 5 <= x['power'] <= 11),
              ('de 15 a 22 kW', 'Para plantas con alto consumo, construcción y minería.', lambda x: x['power'] >= 15)]
    secciones = ''
    for nombre, texto, f in grupos:
        tarj = '\n'.join(f'''        <a class="pp-otro" href="{slug(x)}/">
          <div class="pp-otro-img"><img src="{raiz}{e(x['images'][0])}" alt="Compresor Atlas Copco {e(modelo(x))}" width="600" height="600" loading="lazy"></div>
          <div class="pp-otro-tx"><strong>{e(modelo(x))}</strong><span>{e(x['chips'][0])}, {e(x['chips'][2])} a {e(x['chips'][1])}</span></div>
        </a>''' for x in todos if f(x))
        secciones += f'''
    <section class="lc-grupo">
      <h2>Compresores {nombre}</h2>
      <p>{texto}</p>
      <div class="lc-grid">
{tarj}
      </div>
    </section>
'''
    jsonld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "name": "Compresores de tornillo Atlas Copco serie G", "url": url},
        {"@type": "ItemList", "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "url": f'{DOMINIO}/compresores/{slug(x)}/', "name": f'Compresor Atlas Copco {modelo(x)}'}
            for i, x in enumerate(todos)]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Inicio", "item": f'{DOMINIO}/'},
            {"@type": "ListItem", "position": 2, "name": "Compresores", "item": url}]}]}
    cuerpo = f'''{ajustar_rutas(cab, raiz)}

<main class="pp-main" id="contenido">
  <div class="pp-wrap">
    <nav class="migas" aria-label="Ruta">
      <ol>
        <li><a href="{raiz}">Inicio</a></li>
        <li><span aria-current="page">Compresores</span></li>
      </ol>
    </nav>
    <div class="lc-head">
      <h1 class="pp-h1">Compresores de tornillo Atlas Copco serie G</h1>
      <p>{len(todos)} modelos de 2.2 a 22 kW, sobre bancada o sobre depósito, con o sin secador integrado. Como distribuidor autorizado de Atlas Copco, los vendemos, instalamos y mantenemos desde nuestras sedes en {SEDES}.</p>
    </div>
{secciones}
    <div class="pp-cta">
      <div>
        <h2>¿No sabes qué modelo elegir?</h2>
        <p>Cuéntanos cómo usarás el aire comprimido y te recomendamos el equipo.</p>
      </div>
      <a class="pp-btn pp-btn-wa" href="{e(wa('¡Hola, POWER! Necesito ayuda para elegir un compresor.'))}" target="_blank" rel="noopener"><i aria-hidden="true" class="fab fa-whatsapp"></i> Hablar con un asesor</a>
    </div>
  </div>
</main>

{ajustar_rutas(pie, raiz)}

{ajustar_rutas(flot, raiz)}
<script src="{raiz}assets/js/pagina.js"></script>
</body>
</html>
'''
    return cabeza(titulo, descripcion, url, f'{DOMINIO}/{todos[0]["images"][0]}', raiz, jsonld) + cuerpo


def pagina_404(cab, pie, flot):
    """Página de error 404. Usa rutas absolutas (/) porque el servidor la muestra en cualquier dirección."""
    raiz = '/'
    titulo = 'Página no encontrada | POWER S.A.C.'
    jsonld = {"@context": "https://schema.org", "@type": "WebPage", "name": "Página no encontrada"}
    head = cabeza(titulo, 'La página que buscas no existe o cambió de dirección.', f'{DOMINIO}/', f'{DOMINIO}/assets/img/logo-power.png', raiz, jsonld)
    head = head.replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"', 1)
    cuerpo = f'''{ajustar_rutas(cab, raiz)}

<main class="pp-main" id="contenido">
  <div class="pp-wrap">
    <section class="e404">
      <p class="e404-code" aria-hidden="true">404</p>
      <h1 class="pp-h1">Esta página no existe</h1>
      <p class="e404-txt">Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Desde aquí puedes seguir buscando tu equipo.</p>
      <div class="e404-acc">
        <a class="btn-primary" href="{raiz}compresores/">Ver catálogo de compresores</a>
        <a class="e404-wa" href="{wa('¡Hola, POWER! Quiero cotizar un compresor Atlas Copco.')}" target="_blank" rel="noopener"><i class="fab fa-whatsapp" aria-hidden="true"></i> Escríbenos por WhatsApp</a>
      </div>
      <p class="e404-ini"><a href="{raiz}">Volver al inicio</a></p>
    </section>
  </div>
</main>

{ajustar_rutas(pie, raiz)}

{ajustar_rutas(flot, raiz)}
<script src="{raiz}assets/js/pagina.js"></script>
</body>
</html>
'''
    return head + cuerpo


def sitemap(todos):
    hoy = date.today().isoformat()
    urls = [(f'{DOMINIO}/', '1.0'), (f'{DOMINIO}/compresores/', '0.9')] + [(f'{DOMINIO}/compresores/{slug(x)}/', '0.8') for x in todos]
    filas = '\n'.join(f'  <url><loc>{u}</loc><lastmod>{hoy}</lastmod><priority>{pr}</priority></url>' for u, pr in urls)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{filas}\n</urlset>\n'


def main():
    todos = leer_productos()
    cab, pie, flot = bloques_comunes()
    base = os.path.join(RAIZ, 'compresores')
    os.makedirs(base, exist_ok=True)
    for p in todos:
        d = os.path.join(base, slug(p))
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, 'index.html'), 'w', encoding='utf8').write(pagina_producto(p, todos, cab, pie, flot))
    open(os.path.join(base, 'index.html'), 'w', encoding='utf8').write(pagina_listado(todos, cab, pie, flot))
    open(os.path.join(RAIZ, 'sitemap.xml'), 'w', encoding='utf8').write(sitemap(todos))
    open(os.path.join(RAIZ, '404.html'), 'w', encoding='utf8').write(pagina_404(cab, pie, flot))
    print(f'Listo: {len(todos)} páginas de producto, listado, 404.html y sitemap.xml')


if __name__ == '__main__':
    main()
