const WA = '51958741899';

/* ============================================================
   CATEGORÍAS DEL CATÁLOGO
   Por ahora solo Compresores de Tornillo (línea G).
   Para agregar una línea nueva en el futuro (generadores,
   herramientas, perforación, etc.), solo agrega un nuevo
   objeto aquí con su id, label e icono — el resto del sitio
   ya está preparado para soportarlo sin más cambios.
   ============================================================ */
const CATEGORIES = [
  { id:'all',  label:'Todos los equipos',                   icon:'fas fa-th',   count:0 },
  { id:'comp', label:'Compresores de tornillo Atlas Copco',  icon:'fas fa-wind', count:0 },
];

/* ============================================================
   CATÁLOGO DE PRODUCTOS
   Cada producto sigue esta estructura. Copia el bloque de
   ejemplo y reemplaza los datos reales de cada compresor G.

   {
     id:        número único, secuencial (1, 2, 3...)
     cat:       'comp' (por ahora todos van en esta categoría)
     brand:     'Atlas Copco'
     tag:       texto corto del badge (ej: 'Nuevo', 'Destacado', 'Premium')
     tagType:   'tag-new' | 'tag-cert' | 'tag-hot' | 'tag-rent'
     name:      nombre completo del modelo (ej: 'Atlas Copco G7')
     desc:      descripción corta (1-2 líneas) del compresor
     images:    array de fotos del producto (1 o varias, para galería)
                ej: ['assets/img/productos/g7-frontal.jpg', 'assets/img/productos/g7-lateral.jpg']
     chips:     4 etiquetas cortas que resumen lo más relevante (potencia, presión, tipo, etc.)
     specs:     lista de especificaciones técnicas {l: etiqueta, v: valor}
     apps:      lista de aplicaciones/industrias donde se usa
     power:     potencia en kW (número, usado para ordenar por potencia)
   }
   ============================================================ */
const PRODUCTS_BASE = [
  {
    "id": 1,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G2 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 2.2 kW (3 CV), montado sobre bancada. Entrega 4.4 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g2-7-fm-1.jpg"
    ],
    "chips": [
      "2.2 kW",
      "145 psi",
      "4.4 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "2.2 kW (3 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "6.0 L/s (12.7 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "4.4 L/s (9.3 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "61 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 620 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 2.2
  },
  {
    "id": 2,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G2 FM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 2.2 kW (3 CV), montado sobre bancada con secador frigorífico y filtros integrados. Entrega 4.4 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g2-ff-fm-1.jpg"
    ],
    "chips": [
      "2.2 kW",
      "145 psi",
      "4.4 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "2.2 kW (3 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "6.0 L/s (12.7 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "4.4 L/s (9.3 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "61 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1015 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 2.2
  },
  {
    "id": 3,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G2 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 2.2 kW (3 CV), montado sobre depósito. Entrega 4.4 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g2-tm-1.jpg"
    ],
    "chips": [
      "2.2 kW",
      "145 psi",
      "4.4 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "2.2 kW (3 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "6.0 L/s (12.7 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "4.4 L/s (9.3 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "180 kg (397 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 2.2
  },
  {
    "id": 4,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G2 TM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 2.2 kW (3 CV), montado sobre depósito con secador frigorífico y filtros integrados. Entrega 4.4 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g2-1.jpg"
    ],
    "chips": [
      "2.2 kW",
      "145 psi",
      "4.4 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "2.2 kW (3 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "6.0 L/s (12.7 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "4.4 L/s (9.3 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "205 kg (452 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 2.2
  },
  {
    "id": 5,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G4 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 4 kW (5.5 CV), montado sobre bancada. Entrega 7.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g4-fm-1.jpg"
    ],
    "chips": [
      "4 kW",
      "145 psi",
      "7.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "4 kW (5.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "8.8 L/s (18.6 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "7.9 L/s (16.7 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "62 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 620 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 4.0
  },
  {
    "id": 6,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G4 FM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 4 kW (5.5 CV), montado sobre bancada con secador frigorífico y filtros integrados. Entrega 7.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g4-ff-fm-1.jpg"
    ],
    "chips": [
      "4 kW",
      "145 psi",
      "7.9 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "4 kW (5.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "8.8 L/s (18.6 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "7.9 L/s (16.7 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "62 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1015 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 4.0
  },
  {
    "id": 7,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G4 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 4 kW (5.5 CV), montado sobre depósito. Entrega 7.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g4-tm-1.jpg"
    ],
    "chips": [
      "4 kW",
      "145 psi",
      "7.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "4 kW (5.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "8.8 L/s (18.6 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "7.9 L/s (16.7 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "190 kg (419 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 4.0
  },
  {
    "id": 8,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G4 TM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 4 kW (5.5 CV), montado sobre depósito con secador frigorífico y filtros integrados. Entrega 7.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g4-ff-tm-1.jpg"
    ],
    "chips": [
      "4 kW",
      "145 psi",
      "7.9 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "4 kW (5.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "8.8 L/s (18.6 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "7.9 L/s (16.7 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "215 kg (474 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 4.0
  },
  {
    "id": 9,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G5 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 5.5 kW (7.5 CV), montado sobre bancada. Entrega 11.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g5-fm-1.jpg"
    ],
    "chips": [
      "5.5 kW",
      "145 psi",
      "11.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "5.5 kW (7.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "13.4 L/s (28.4 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "11.9 L/s (25.2 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "65 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 620 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 5.5
  },
  {
    "id": 10,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G5 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 5.5 kW (7.5 CV), montado sobre depósito. Entrega 11.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g5-tm-1.jpg"
    ],
    "chips": [
      "5.5 kW",
      "145 psi",
      "11.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "5.5 kW (7.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "13.4 L/s (28.4 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "11.9 L/s (25.2 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "200 kg (441 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 5.5
  },
  {
    "id": 11,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G5 TM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 5.5 kW (7.5 CV), montado sobre depósito con secador frigorífico y filtros integrados. Entrega 11.9 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g5-ff-tm-1.jpg"
    ],
    "chips": [
      "5.5 kW",
      "145 psi",
      "11.9 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "5.5 kW (7.5 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "13.4 L/s (28.4 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "11.9 L/s (25.2 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "225 kg (496 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 5.5
  },
  {
    "id": 12,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G7 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 7.5 kW (10 CV), montado sobre bancada. Entrega 14.7 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g7-fm-1.jpg"
    ],
    "chips": [
      "7.5 kW",
      "145 psi",
      "14.7 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "7.5 kW (10 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "15.5 L/s (32.8 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "14.7 L/s (31.1 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "67 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 620 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 7.5
  },
  {
    "id": 13,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G7 FM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 7.5 kW (10 CV), montado sobre bancada con secador frigorífico y filtros integrados. Entrega 14.7 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g7-ff-fm-1.jpg"
    ],
    "chips": [
      "7.5 kW",
      "145 psi",
      "14.7 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "7.5 kW (10 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "15.5 L/s (32.8 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "14.7 L/s (31.1 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "67 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1015 × 950 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 7.5
  },
  {
    "id": 14,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G7 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 7.5 kW (10 CV), montado sobre depósito. Entrega 14.7 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g7-tm-1.jpg"
    ],
    "chips": [
      "7.5 kW",
      "145 psi",
      "14.7 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "7.5 kW (10 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "15.5 L/s (32.8 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "14.7 L/s (31.1 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "210 kg (463 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 7.5
  },
  {
    "id": 15,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G7 TM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 7.5 kW (10 CV), montado sobre depósito con secador frigorífico y filtros integrados. Entrega 14.7 L/s a 145 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g7-ff-tm-1.jpg"
    ],
    "chips": [
      "7.5 kW",
      "145 psi",
      "14.7 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "7.5 kW (10 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "116 psi / 145 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 116 psi",
        "v": "15.5 L/s (32.8 cfm)"
      },
      {
        "l": "Caudal FAD a 145 psi",
        "v": "14.7 L/s (31.1 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 200 l (60 gal)"
      },
      {
        "l": "Peso",
        "v": "240 kg (529 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "665 × 1430 × 1260 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Talleres",
      "Manufactura ligera",
      "Industria general",
      "Pymes"
    ],
    "power": 7.5
  },
  {
    "id": 16,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G11 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 11 kW (15 CV), montado sobre bancada. Entrega 19.1 L/s a 181 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g11-fm-1.jpg"
    ],
    "chips": [
      "11 kW",
      "181 psi",
      "19.1 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "11 kW (15 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 181 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "28.6 L/s (60.6 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "24.9 L/s (52.8 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "23.1 L/s (48.9 cfm)"
      },
      {
        "l": "Caudal FAD a 181 psi",
        "v": "19.1 L/s (40.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "69 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "720 × 855 × 1090 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Industria general",
      "Manufactura",
      "Talleres grandes",
      "Construcción"
    ],
    "power": 11.0
  },
  {
    "id": 17,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G11 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 11 kW (15 CV), montado sobre depósito. Entrega 19.1 L/s a 181 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g11-tm-1.jpg"
    ],
    "chips": [
      "11 kW",
      "181 psi",
      "19.1 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "11 kW (15 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 181 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "28.6 L/s (60.6 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "24.9 L/s (52.8 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "23.1 L/s (48.9 cfm)"
      },
      {
        "l": "Caudal FAD a 181 psi",
        "v": "19.1 L/s (40.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 270 l (80 gal)"
      },
      {
        "l": "Peso",
        "v": "255 kg (562 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "650 × 1603 × 1337 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Industria general",
      "Manufactura",
      "Talleres grandes",
      "Construcción"
    ],
    "power": 11.0
  },
  {
    "id": 18,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G15 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 15 kW (20 CV), montado sobre bancada. Entrega 23.1 L/s a 181 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g15-fm-1.jpg"
    ],
    "chips": [
      "15 kW",
      "181 psi",
      "23.1 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "15 kW (20 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 181 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "32.5 L/s (68.9 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "29.8 L/s (63.1 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "27.6 L/s (58.5 cfm)"
      },
      {
        "l": "Caudal FAD a 181 psi",
        "v": "23.1 L/s (48.9 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "71 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "720 × 855 × 1090 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Industria general",
      "Manufactura",
      "Talleres grandes",
      "Construcción"
    ],
    "power": 15.0
  },
  {
    "id": 19,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G15 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 15 kW (20 CV), montado sobre depósito. Entrega 23.1 L/s a 181 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g15-tm-1.jpg"
    ],
    "chips": [
      "15 kW",
      "181 psi",
      "23.1 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "15 kW (20 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 181 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "32.5 L/s (68.9 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "29.8 L/s (63.1 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "27.6 L/s (58.5 cfm)"
      },
      {
        "l": "Caudal FAD a 181 psi",
        "v": "23.1 L/s (48.9 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito de 270 l (80 gal)"
      },
      {
        "l": "Peso",
        "v": "260 kg (573 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "650 × 1603 × 1337 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Industria general",
      "Manufactura",
      "Talleres grandes",
      "Construcción"
    ],
    "power": 15.0
  },
  {
    "id": 20,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G18 FM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 18 kW (25 CV), montado sobre bancada. Entrega 39.9 L/s a 182 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g18-fm-1.jpg"
    ],
    "chips": [
      "18 kW",
      "182 psi",
      "39.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "18 kW (25 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 182 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "51.8 L/s (109.8 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "46.9 L/s (99.4 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "43.3 L/s (91.7 cfm)"
      },
      {
        "l": "Caudal FAD a 182 psi",
        "v": "39.9 L/s (84.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "69 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "833 × 1180 × 1220 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Minería",
      "Industria pesada",
      "Construcción",
      "Manufactura"
    ],
    "power": 18.0
  },
  {
    "id": 21,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G18 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 18 kW (25 CV), montado sobre depósito. Entrega 39.9 L/s a 182 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g18-tm-1.jpg"
    ],
    "chips": [
      "18 kW",
      "182 psi",
      "39.9 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "18 kW (25 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 182 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "51.8 L/s (109.8 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "46.9 L/s (99.4 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "43.3 L/s (91.7 cfm)"
      },
      {
        "l": "Caudal FAD a 182 psi",
        "v": "39.9 L/s (84.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito"
      },
      {
        "l": "Peso",
        "v": "481 kg (1060 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "833 × 1921 × 1832 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Minería",
      "Industria pesada",
      "Construcción",
      "Manufactura"
    ],
    "power": 18.0
  },
  {
    "id": 22,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G22 FM FF",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 22 kW (30 CV), montado sobre bancada con secador frigorífico y filtros integrados. Entrega 46.0 L/s a 182 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g22-ff-fm-1.jpg"
    ],
    "chips": [
      "22 kW",
      "182 psi",
      "46.0 L/s",
      "Secador integrado"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "22 kW (30 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 182 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "60.5 L/s (128.2 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "53.7 L/s (113.8 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "48.6 L/s (103.0 cfm)"
      },
      {
        "l": "Caudal FAD a 182 psi",
        "v": "46.0 L/s (97.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "Sí, versión Full-Feature (secador frigorífico y filtros)"
      },
      {
        "l": "Montaje",
        "v": "Sobre bancada"
      },
      {
        "l": "Nivel sonoro",
        "v": "70 dB(A)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "833 × 1280 × 1220 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Minería",
      "Industria pesada",
      "Construcción",
      "Manufactura"
    ],
    "power": 22.0
  },
  {
    "id": 23,
    "cat": "comp",
    "brand": "Atlas Copco",
    "tag": "Disponible",
    "tagType": "tag-new",
    "name": "Atlas Copco G22 TM",
    "desc": "Compresor de tornillo rotativo con inyección de aceite de 22 kW (30 CV), montado sobre depósito. Entrega 46.0 L/s a 182 psi y trabaja de forma continua con temperaturas de hasta 46 °C.",
    "images": [
      "assets/img/productos/g22-tm-1.jpg"
    ],
    "chips": [
      "22 kW",
      "182 psi",
      "46.0 L/s",
      "Sin secador"
    ],
    "specs": [
      {
        "l": "Potencia",
        "v": "22 kW (30 CV)"
      },
      {
        "l": "Presión máxima de trabajo",
        "v": "107 psi / 132 psi / 157 psi / 182 psi (según versión)"
      },
      {
        "l": "Caudal FAD a 107 psi",
        "v": "60.5 L/s (128.2 cfm)"
      },
      {
        "l": "Caudal FAD a 132 psi",
        "v": "53.7 L/s (113.8 cfm)"
      },
      {
        "l": "Caudal FAD a 157 psi",
        "v": "48.6 L/s (103.0 cfm)"
      },
      {
        "l": "Caudal FAD a 182 psi",
        "v": "46.0 L/s (97.5 cfm)"
      },
      {
        "l": "Secador integrado",
        "v": "No"
      },
      {
        "l": "Montaje",
        "v": "Sobre depósito"
      },
      {
        "l": "Peso",
        "v": "497 kg (1096 lb)"
      },
      {
        "l": "Dimensiones (prof. × ancho × alto)",
        "v": "833 × 1921 × 1832 mm"
      },
      {
        "l": "Motor",
        "v": "IE3, trabajo continuo al 100 %"
      },
      {
        "l": "Temperatura ambiente máx.",
        "v": "46 °C (115 °F)"
      },
      {
        "l": "Controlador",
        "v": "Elektronikon® Nano"
      },
      {
        "l": "Frecuencia",
        "v": "60 Hz"
      }
    ],
    "apps": [
      "Minería",
      "Industria pesada",
      "Construcción",
      "Manufactura"
    ],
    "power": 22.0
  }
];

/* ============================================================
   LÓGICA DEL SITIO
   Sin manejadores en línea (onclick): todo se conecta aquí con
   addEventListener, lo que permite una Content-Security-Policy estricta.
   ============================================================ */

/* ---------- Utilidades ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Escapa texto antes de insertarlo como HTML (por si en el futuro los datos vienen de una hoja o un CMS)
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
// Texto en minúsculas y sin tildes, para buscar "compresion" y encontrar "compresión"
const norm = s => String(s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const waLink = text => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const catLabel = id => CATEGORIES.find(c => c.id === id)?.label || id;

/* ---------- Atributos derivados de cada producto ---------- */
PRODUCTS_BASE.forEach(p => {
  const dryerSpec = p.specs.find(s => norm(s.l).includes('secador'));
  p.hasDryer = p.chips.some(c => norm(c) === 'secador integrado') || (!!dryerSpec && norm(dryerSpec.v).startsWith('si'));
  const mount = p.specs.find(s => norm(s.l) === 'montaje' || norm(s.l) === 'tanque');
  p.onTank = /\bTM\b/.test(p.name) || (!!mount && norm(mount.v).includes('tanque') && !norm(mount.v).includes('sin tanque'));
  p.haystack = norm([p.name, p.desc, p.brand, ...p.chips, ...p.apps, ...p.specs.map(s => `${s.l} ${s.v}`)].join(' '));
});

/* ---------- Estado del catálogo ---------- */
let PRODUCTS = [...PRODUCTS_BASE];
let currentCat = 'all';
let currentSearch = '';
const quick = { dryer: false, tank: false };
/* Rangos de potencia (kW) de los botones "Hasta 4 kW", "5.5 a 11 kW" y "15 a 22 kW" */
const RANGES = { s:[0, 4], m:[5, 11], l:[15, 22] };
let currentRange = null;
/* Se muestran filas completas: unos 8 equipos redondeados a la cantidad de columnas
   (9 con 3 columnas, 8 con 4 o 2). Así la última fila nunca queda a medias. */
function pageSize(){
  const cols = getComputedStyle($('#productsGrid')).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
  return Math.ceil(8 / cols) * cols;
}
let visibleCount = pageSize();
let lastPage = visibleCount;
window.addEventListener('resize', () => {
  const ps = pageSize();
  if(ps !== lastPage && visibleCount === lastPage){ visibleCount = ps; lastPage = ps; renderProducts(); }
  else lastPage = ps;
}, { passive: true });

function buildCats(){
  CATEGORIES.forEach(c => { c.count = c.id === 'all' ? PRODUCTS_BASE.length : PRODUCTS_BASE.filter(p => p.cat === c.id).length; });
}

/* Las categorías solo se muestran cuando hay más de una línea de producto */
function renderSidebar(){
  const list = $('#catList');
  list.hidden = CATEGORIES.length <= 2;
  if(list.hidden) return;
  list.innerHTML = CATEGORIES.map(c => `
    <button type="button" class="cat-btn ${c.id === currentCat ? 'active' : ''}" data-cat="${esc(c.id)}" aria-pressed="${c.id === currentCat}">
      ${esc(c.label)}
      <span class="cat-count">${c.count}</span>
    </button>`).join('');
}

/* Búsqueda:
   - sin distinguir tildes ni mayúsculas;
   - busca también en especificaciones y aplicaciones;
   - todas las palabras deben coincidir ("g7 tanque");
   - "secador" muestra solo equipos CON secador y "sin secador" solo los que no lo tienen. */
function matchesSearch(p, q){
  if(!q) return true;
  let text = q;
  if(/\bsin secador\b/.test(text)){ if(p.hasDryer) return false; text = text.replace(/\bsin secador\b/g, ' '); }
  else if(/\bsecador\b/.test(text)){ if(!p.hasDryer) return false; text = text.replace(/\b(con )?secador( integrado)?\b/g, ' '); }
  return text.split(/\s+/).filter(Boolean).every(t => p.haystack.includes(t));
}

function getFiltered(){
  const q = norm(currentSearch).trim();
  return PRODUCTS.filter(p =>
    (currentCat === 'all' || p.cat === currentCat) &&
    (!quick.dryer || p.hasDryer) &&
    (!quick.tank || p.onTank) &&
    (!currentRange || (p.power >= RANGES[currentRange][0] && p.power <= RANGES[currentRange][1])) &&
    matchesSearch(p, q));
}

/* Tarjeta: el nombre del modelo grande y las tres cifras clave siempre en la misma posición,
   para comparar de un vistazo. La descripción completa está en la ficha. */
function cardHTML(p){
  const cover = p.images && p.images.length ? p.images[0] : p.img;
  const model = p.name.replace(/^Atlas Copco\s+/, '');
  const [kw, bar, ls] = p.chips;
  const unit = v => esc(v).replace(/\s(kW|psi|L\/s)$/, ' <small>$1</small>');
  const sub = `${p.onTank ? 'Sobre depósito' : 'Sobre bancada'}, ${p.hasDryer ? '<b>con secador integrado</b>' : 'sin secador'}`;
  return `
    <article class="pcard" data-id="${p.id}">
      <div class="pcard-img">
        <img src="${esc(cover)}" alt="${esc(p.name)}" loading="lazy" width="600" height="600">
      </div>
      <div class="pcard-body">
        <p class="pcard-brand">${esc(p.brand)}</p>
        <h3 class="pcard-name"><a href="compresores/${model.toLowerCase().replace(/\s+/g, '-')}/">${esc(model)}</a></h3>
        <p class="pcard-sub">${sub}</p>
        <dl class="pcard-specs">
          <div><dt>Potencia</dt><dd>${unit(kw)}</dd></div>
          <div><dt>Presión</dt><dd>${unit(bar)}</dd></div>
          <div><dt>Caudal</dt><dd>${unit(ls)}</dd></div>
        </dl>
        <div class="pcard-actions">
          <button type="button" class="btn-ficha" data-open="${p.id}">Ver ficha técnica</button>
          <a class="btn-wa-card" href="${esc(waLink('¡Hola, POWER! Quiero información sobre el compresor ' + p.name + '.'))}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp sobre ${esc(p.name)}"><i aria-hidden="true" class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </article>`;
}

function renderProducts(){
  const grid = $('#productsGrid');
  const filtered = getFiltered();
  const count = $('#resultCount');

  if(!filtered.length){
    grid.innerHTML = '';
    count.textContent = '0';
    $('#noResults').hidden = false;
    $('#loadMoreWrap').hidden = true;
    measurePage();
    return;
  }
  $('#noResults').hidden = true;

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visible.length;
  count.textContent = visible.length === filtered.length ? `${filtered.length}` : `${visible.length} de ${filtered.length}`;
  $('#loadMoreWrap').hidden = remaining <= 0;
  if(remaining > 0) $('#loadMoreCount').textContent = `(${remaining} restante${remaining === 1 ? '' : 's'})`;

  grid.innerHTML = visible.map(cardHTML).join('');
  measurePage();
}

function setFilter(cat){
  currentCat = cat;
  visibleCount = pageSize();
  renderSidebar();
  renderProducts();
}

/* Orden del catálogo: número de modelo, luego montaje (FM sobre base antes que TM sobre tanque)
   y luego la versión con secador (FF). Ej.: G2 FM, G2 FM FF, G2 TM, G2 TM FF, G4 FM… */
function modelKey(p){
  const num = +(p.name.match(/G(\d+)/) || [0, 0])[1];
  const tm = /\bTM\b/.test(p.name) ? 1 : 0;
  const ff = /\bFF\b/.test(p.name) ? 1 : 0;
  return num * 100 + tm * 10 + ff;
}
function sortProducts(v){
  const byName = (a, b) => a.name.localeCompare(b.name, 'es', { numeric: true, sensitivity: 'base' });
  if(v === 'power-asc') PRODUCTS.sort((a, b) => a.power - b.power || byName(a, b));
  else if(v === 'power-desc') PRODUCTS.sort((a, b) => b.power - a.power || byName(a, b));
  else if(v === 'name-asc') PRODUCTS.sort((a, b) => modelKey(a) - modelKey(b) || byName(a, b));
  else PRODUCTS = [...PRODUCTS_BASE];
  visibleCount = pageSize();
  renderProducts();
}

/* ---------- Eventos del catálogo ---------- */
$('#catList').addEventListener('click', e => {
  const b = e.target.closest('.cat-btn');
  if(b) setFilter(b.dataset.cat);
});
let searchTimer;
$('#searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { currentSearch = e.target.value; visibleCount = pageSize(); renderProducts(); }, 120);
});
$('#sortSelect').addEventListener('change', e => sortProducts(e.target.value));
$('#loadMoreBtn').addEventListener('click', () => {
  const firstNew = visibleCount;
  visibleCount += pageSize();
  renderProducts();
  // Lleva el foco al primer equipo nuevo, para quien navega con teclado
  $$('#productsGrid .btn-ficha')[firstNew]?.focus({ preventScroll: true });
});
$$('.qf-btn[data-range]').forEach(btn => btn.addEventListener('click', () => {
  const r = btn.dataset.range;
  currentRange = currentRange === r ? null : r;     // un solo rango a la vez; tocar otra vez lo quita
  $$('.qf-btn[data-range]').forEach(b => {
    const on = b.dataset.range === currentRange;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  visibleCount = pageSize();
  renderProducts();
}));
$$('.qf-btn[data-qf]').forEach(btn => btn.addEventListener('click', () => {
  const k = btn.dataset.qf;
  quick[k] = !quick[k];
  btn.setAttribute('aria-pressed', String(quick[k]));
  btn.classList.toggle('active', quick[k]);
  visibleCount = pageSize();
  renderProducts();
}));
$('#productsGrid').addEventListener('click', e => {
  if(e.target.closest('a')) return;                 // enlaces de WhatsApp: dejar que abran
  const opener = e.target.closest('[data-open]');
  const card = e.target.closest('.pcard');
  if(opener) openModal(+opener.dataset.open);
  else if(card) openModal(+card.dataset.id);
});

/* ---------- Ficha de producto (modal accesible) ---------- */
const modal = $('#productModal');
let lastFocus = null;

/* Ficha de producto.
   Arriba: 4 datos clave. En medio: tabla de especificaciones (se desplaza).
   Abajo: botones de cotizar siempre visibles. Flechas para pasar de modelo sin cerrar. */
let modalList = [], modalIndex = -1;
function keyFacts(p){
  const c = p.chips || [];
  return [
    ['Potencia', c[0] || '—'],
    ['Presión máx.', c[1] || '—'],
    ['Caudal', c[2] || '—'],
    ['Secador', p.hasDryer ? 'Integrado' : 'No']
  ];
}
function fillModal(p){
  const gallery = p.images && p.images.length ? p.images : [p.img];
  $('#modalImg').src = gallery[0];
  $('#modalImg').alt = p.name;
  const galleryEl = $('#modalGallery');
  if(gallery.length > 1){
    galleryEl.innerHTML = gallery.map((src, i) => `
      <button type="button" class="modal-gallery-thumb ${i === 0 ? 'active' : ''}" data-src="${esc(src)}" aria-label="Vista ${i + 1}">
        <img src="${esc(src)}" alt="">
      </button>`).join('');
    galleryEl.hidden = false;
  } else {
    galleryEl.innerHTML = '';
    galleryEl.hidden = true;
  }
  $('#modalCat').textContent = catLabel(p.cat);
  $('#modalTitle').textContent = p.name;
  $('#modalDesc').textContent = p.desc;
  $('#modalKeys').innerHTML = keyFacts(p).map(([l, v]) => `<div class="modal-key"><dt>${esc(l)}</dt><dd>${esc(v)}</dd></div>`).join('');
  $('#modalSpecs').innerHTML = p.specs.map(s => `<tr><th scope="row">${esc(s.l)}</th><td>${esc(s.v)}</td></tr>`).join('');
  $('#modalApps').textContent = p.apps.join(', ') + '.';
  /* Enlace a la página propia del modelo (la que indexa Google) */
  const modelName = p.name.replace(/^Atlas Copco\s+/, '');
  $('#modalPage').href = 'compresores/' + modelName.toLowerCase().replace(/\s+/g, '-') + '/';
  $('#modalPage').textContent = 'Ver la página completa del ' + modelName;
  $('#modalWaBtn').href = waLink(`¡Hola, POWER! Quiero cotizar el compresor ${p.name}.`);
  $('#modalQuoteBtn').href = waLink('¡Hola, POWER! ¿Me pueden enviar la ficha técnica en PDF del compresor ' + p.name + '?');
  $('#modalCount').textContent = modalList.length > 1 ? `${modalIndex + 1} de ${modalList.length}` : '';
  $('#modalPrev').disabled = modalIndex <= 0;
  $('#modalNext').disabled = modalIndex >= modalList.length - 1;
  $('#modalScroll').scrollTop = 0;
}
/* Último modelo que miró la persona (se incluye en el correo del formulario) */
function recordarModelo(nombre){ try { sessionStorage.setItem('power:modelo', nombre.replace('Atlas Copco ', '')); } catch(_){} }
function modeloVisto(){ try { return sessionStorage.getItem('power:modelo') || ''; } catch(_){ return ''; } }

function openModal(id){
  const p = PRODUCTS_BASE.find(x => x.id === id);
  if(!p) return;
  recordarModelo(p.name);
  // Se navega dentro de la lista que el usuario está viendo (con su búsqueda, filtros y orden)
  modalList = getFiltered();
  if(!modalList.some(x => x.id === id)) modalList = [...PRODUCTS];
  modalIndex = modalList.findIndex(x => x.id === id);
  fillModal(p);
  lastFocus = document.activeElement;
  modal.hidden = false;
  modal.classList.add('open');
  // Siempre empieza desde arriba: se hace después de mostrar la ficha,
  // porque mientras está oculta el navegador ignora el cambio de scroll
  $('#modalScroll').scrollTop = 0;
  document.body.style.overflow = 'hidden';
  // El foco va al diálogo (no al botón de cerrar) para no mostrar el aro de foco al abrir con el mouse
  $('.modal-box', modal).focus();
}
function stepModal(dir){
  const n = modalIndex + dir;
  if(n < 0 || n >= modalList.length) return;
  modalIndex = n;
  fillModal(modalList[n]);
}
function closeModal(){
  if(modal.hidden) return;
  modal.classList.remove('open');
  modal.hidden = true;
  document.body.style.overflow = '';
  lastFocus?.focus?.({ preventScroll: true });
}
$('#modalClose').addEventListener('click', closeModal);
$('#modalPrev').addEventListener('click', () => stepModal(-1));
$('#modalNext').addEventListener('click', () => stepModal(1));
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
modal.addEventListener('keydown', e => {
  if(e.target.matches('input, textarea, select')) return;
  if(e.key === 'ArrowLeft'){ e.preventDefault(); stepModal(-1); }
  if(e.key === 'ArrowRight'){ e.preventDefault(); stepModal(1); }
});
$('#modalGallery').addEventListener('click', e => {
  const t = e.target.closest('.modal-gallery-thumb');
  if(!t) return;
  $('#modalImg').src = t.dataset.src;
  $$('.modal-gallery-thumb').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
});

// Mantiene el foco del teclado dentro del diálogo abierto
function trapFocus(e, container){
  const f = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', container)
    .filter(el => el.offsetParent !== null);
  if(!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}

/* ---------- Menú móvil ---------- */
const mobileMenu = $('#mobileMenu');
const hamburger = $('#hamburger');
function setMenu(open){
  mobileMenu.hidden = !open;
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if(open) $('#mobileClose').focus(); else hamburger.focus({ preventScroll: true });
}
hamburger.addEventListener('click', () => setMenu(true));
$('#mobileClose').addEventListener('click', () => setMenu(false));
$$('a', mobileMenu).forEach(a => a.addEventListener('click', () => {
  mobileMenu.hidden = true; mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

/* Teclado global: Esc cierra y Tab no se escapa de los diálogos */
document.addEventListener('keydown', e => {
  const menuOpen = !mobileMenu.hidden;
  if(e.key === 'Escape'){
    if(!modal.hidden) closeModal();
    else if(menuOpen) setMenu(false);
  }
  if(e.key === 'Tab'){
    if(!modal.hidden) trapFocus(e, modal);
    else if(menuOpen) trapFocus(e, mobileMenu);
  }
});

/* ---------- Preguntas frecuentes ---------- */
$$('.faq-q').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  $$('.faq-item.open').forEach(i => { i.classList.remove('open'); $('.faq-q', i).setAttribute('aria-expanded', 'false'); });
  if(!isOpen){ item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
}));

/* ---------- Scroll: barra de progreso, botón arriba, navbar ---------- */
const navbar = $('#navbar');
const progressBar = $('#scrollProgressBar');
const backToTop = $('#backToTop');
let docHeight = 1, ticking = false, lastY = window.scrollY;
function measurePage(){ docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); }
/* Barra superior: se oculta al bajar y reaparece apenas el usuario sube.
   Siempre visible arriba del todo y mientras un menú está abierto o tiene el foco del teclado. */
function updateNavbar(y){
  const delta = y - lastY;
  const busy = navbar.matches(':hover, :focus-within') || !$('#mobileMenu').hidden;
  if(y < 120 || busy) navbar.classList.remove('nav-hidden');
  else if(delta > 6) navbar.classList.add('nav-hidden');
  else if(delta < -6) navbar.classList.remove('nav-hidden');
  if(Math.abs(delta) > 6 || y < 120) lastY = y;
}
function onScroll(){
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 20);
  updateNavbar(y);
  progressBar.style.width = Math.min(100, (y / docHeight) * 100) + '%';
  backToTop.classList.toggle('visible', y > 500);
  ticking = false;
}
window.addEventListener('scroll', () => { if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener('resize', () => { measurePage(); onScroll(); }, { passive: true });
window.addEventListener('load', () => { measurePage(); onScroll(); });
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
  $('.nav-logo').focus({ preventScroll: true });
});

/* ---------- Menú activo según la sección visible ---------- */
const spyLinks = $$('[data-spy]');
const spySections = spyLinks.map(a => document.getElementById(a.dataset.spy)).filter(Boolean);
function updateSpy(){
  const line = window.innerHeight * 0.35;
  let current = spySections[0]?.id;
  spySections.forEach(s => { if(s.getBoundingClientRect().top <= line) current = s.id; });
  spyLinks.forEach(a => {
    const on = a.dataset.spy === current;
    a.classList.toggle('active', on);
    if(on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', () => requestAnimationFrame(updateSpy), { passive: true });

/* ---------- Puntos sobre el compresor (Tecnología) ----------
   Cada punto de la foto está enlazado con su descripción: al tocar o enfocar uno,
   se resaltan ambos y se muestra el nombre junto al punto. */
const hsStage = $('.hs-stage');
if(hsStage){
  const pins = $$('.hs-pin', hsStage);
  const notes = $$('.hs-note');
  const tip = $('.hs-tip', hsStage);
  function activate(n){
    pins.forEach(p => { const on = p.dataset.hs === n; p.classList.toggle('active', on); p.setAttribute('aria-pressed', String(on)); });
    notes.forEach(x => x.classList.toggle('active', x.dataset.hs === n));
    const pin = pins.find(p => p.dataset.hs === n);
    if(pin){
      tip.textContent = pin.dataset.label;
      tip.style.left = pin.style.left; tip.style.top = pin.style.top;
      tip.hidden = false;
    }
  }
  function clear(){
    pins.forEach(p => { p.classList.remove('active'); p.setAttribute('aria-pressed', 'false'); });
    notes.forEach(x => x.classList.remove('active'));
    tip.hidden = true;
  }
  pins.forEach(p => {
    p.addEventListener('click', () => p.classList.contains('active') ? clear() : activate(p.dataset.hs));
    p.addEventListener('mouseenter', () => activate(p.dataset.hs));
    p.addEventListener('focus', () => activate(p.dataset.hs));
  });
  notes.forEach(x => {
    x.addEventListener('mouseenter', () => activate(x.dataset.hs));
    x.addEventListener('mouseleave', clear);
  });
  hsStage.addEventListener('mouseleave', clear);
}

/* ---------- Sedes: la lista y el mapa se resaltan juntos ---------- */
const sedesMap = $('.sedes-map-svg');
if(sedesMap){
  /* Departamento de cada sede: se resalta en el mapa junto con la sede */
  const SEDE_DEP = { arequipa:'arequipa', chala:'arequipa', juliaca:'puno', nasca:'ica', lima:'lima', trujillo:'la-libertad' };
  const sedeEls = id => [...$$(`[data-sede="${id}"]`), ...$$(`.sm-dep[data-dep="${SEDE_DEP[id]}"]`, sedesMap)];
  let current = null;
  function showSede(id){
    if(current) sedeEls(current).forEach(el => el.classList.remove('is-active'));
    current = id;
    if(id) sedeEls(id).forEach(el => el.classList.add('is-active'));
    sedesMap.classList.toggle('has-active', !!id);
  }
  $$('.sede-card').forEach(el => {
    el.addEventListener('mouseenter', () => showSede(el.dataset.sede));
    el.addEventListener('focusin', () => showSede(el.dataset.sede));
    el.addEventListener('click', () => showSede(el.dataset.sede));
  });
  $$('.sm-dot', sedesMap).forEach(d => d.addEventListener('mouseenter', () => showSede(d.dataset.sede)));
  $('.sedes-layout').addEventListener('mouseleave', () => showSede(null));
}

/* ---------- Placa técnica del inicio: abre la ficha del equipo destacado ---------- */
$$('[data-open-product]').forEach(el => el.addEventListener('click', e => {
  e.preventDefault();
  openModal(+el.dataset.openProduct);
}));

/* ============================================================
   FORMULARIO DE CONTACTO — envío por Web3Forms a ventas@power.com.pe
   Pega aquí la "Access Key" que te da Web3Forms (web3forms.com):
   ============================================================ */
const WEB3FORMS_KEY = '1f93959d-fb9f-42f5-b911-57092ad62ee5';

/* ---------- Filtros mientras se escribe (también al pegar) ---------- */
const FILTROS = {
  fNombre:   v => v.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ' .-]/g, ''),            // solo letras
  fEmpresa:  v => v.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9&' .,()-]/g, ''),   // letras, números y signos de razón social
  fTelefono: v => v.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, ''),        // solo números (y + al inicio)
  fCorreo:   v => v.replace(/\s/g, '')                                       // sin espacios
};
Object.entries(FILTROS).forEach(([id, fn]) => {
  $('#' + id).addEventListener('input', e => {
    const el = e.target, limpio = fn(el.value);
    if(limpio !== el.value){
      const pos = el.selectionStart - (el.value.length - limpio.length);
      el.value = limpio;
      try { el.setSelectionRange(pos, pos); } catch(_){}
    }
  });
});

/* ---------- Reglas de validación ---------- */
const FORM_RULES = {
  fNombre:   v => !v ? 'Escribe tu nombre.'
                : v.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/g, '').length < 3 ? 'El nombre es muy corto.'
                : !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' .-]+$/.test(v) ? 'El nombre solo puede tener letras.' : '',
  fEmpresa:  v => !v ? 'Escribe el nombre de tu empresa.'
                : v.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]/g, '').length < 2 ? 'El nombre de la empresa es muy corto.' : '',
  fTelefono: v => {
    const d = v.replace(/\D/g, '');
    if(!v) return 'Escribe un teléfono o WhatsApp para contactarte.';
    if(d.length < 7 || d.length > 15) return 'Revisa el número: debe tener entre 7 y 15 dígitos.';
    if(/^(\d)\1+$/.test(d)) return 'Revisa el número, no parece válido.';
    if(d.length === 8 && d[0] === '9') return 'Al celular le falta un dígito: debe tener 9.';
    if(d.length === 9 && /^[1-8]/.test(d)) return 'Revisa el número: los celulares empiezan con 9 y los fijos con el código de ciudad (ej. 054).';
    return '';
  },
  fCorreo:   v => v && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) ? 'Revisa el correo, por ejemplo: nombre@empresa.com' : '',
  fConsent:  (v, el) => el.checked ? '' : 'Debes aceptar la política para enviar tu solicitud.'
};
function checkField(id){
  const el = $('#' + id), err = $('#e' + id.slice(1));
  if(el.type !== 'checkbox') el.value = el.value.replace(/\s+/g, ' ').trimStart();
  const msg = FORM_RULES[id](el.value.trim(), el);
  err.textContent = msg; err.hidden = !msg;
  el.toggleAttribute('aria-invalid', !!msg);
  el.closest('.form-group, .form-consent').classList.toggle('has-error', !!msg);
  return !msg;
}
// Si el usuario va a pulsar "Enviar", no se valida al salir del campo: el mensaje movería el botón
// y se perdería el clic. El envío valida todo de una vez.
let pulsandoEnviar = false;
$('#submitBtn').addEventListener('pointerdown', () => { pulsandoEnviar = true; setTimeout(() => { pulsandoEnviar = false; }, 800); });
Object.keys(FORM_RULES).forEach(id => {
  const el = $('#' + id);
  el.addEventListener(el.type === 'checkbox' ? 'change' : 'blur', () => { if(!pulsandoEnviar && (el.type === 'checkbox' || el.value)) checkField(id); });
  el.addEventListener('input', () => { if(el.hasAttribute('aria-invalid')) checkField(id); });
});

/* ---------- Envío ---------- */
const BTN_TEXTO = $('#submitBtn').innerHTML;
let enviando = false;

function datosFormulario(){
  const v = id => $('#' + id).value.trim();
  const tel = v('fTelefono').replace(/\D/g, '');
  const telWa = tel.length === 9 ? '51' + tel : tel;            // celular peruano sin código de país
  const fecha = new Intl.DateTimeFormat('es-PE', { timeZone: 'America/Lima', dateStyle: 'long', timeStyle: 'short' }).format(new Date());
  return {
    'Nombre': v('fNombre'),
    'Empresa': v('fEmpresa'),
    'Teléfono / WhatsApp': v('fTelefono'),
    'Escribirle por WhatsApp': 'https://wa.me/' + telWa,
    'Modelo que estaba viendo': modeloVisto() || '(no abrió ninguna ficha)',
    'Qué necesita': v('fDescripcion') || '(no indicó)',
    'Sector': v('fSector') || '(no indicó)',
    'Correo': v('fCorreo') || '(no indicó)',
    'Fecha': fecha + ' (hora de Perú)'
  };
}
function mostrarExito(){
  $('#contactForm').hidden = true;
  $('#formHead').hidden = true;
  const ok = $('#formSuccess');
  ok.hidden = false;
  ok.setAttribute('tabindex', '-1');
  ok.focus();
  document.dispatchEvent(new CustomEvent('power:formulario-enviado'));
}
function mostrarFallo(datos){
  const texto = '¡Hola, POWER! Quiero cotizar.\n' +
    Object.entries(datos).filter(([k, val]) => val && !/^\(no /.test(val) && !['Escribirle por WhatsApp','Fecha'].includes(k)).map(([k, val]) => `${k}: ${val}`).join('\n');
  $('#formFailWa').href = 'https://wa.me/51958741899?text=' + encodeURIComponent(texto);
  $('#formFail').hidden = false;
}

$('#contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  if(enviando) return;                                   // evita envíos dobles
  $('#formFail').hidden = true;

  const fallos = Object.keys(FORM_RULES).filter(id => !checkField(id));
  if(fallos.length){ $('#' + fallos[0]).focus(); return; }

  // Robot (campo trampa marcado): se muestra "enviado" pero no se envía nada
  if($('#hpWebsite').checked){ mostrarExito(); return; }

  const datos = datosFormulario();
  const btn = $('#submitBtn');
  enviando = true;
  btn.disabled = true;
  btn.innerHTML = '<i aria-hidden="true" class="fas fa-spinner fa-spin"></i> Enviando...';

  const payload = Object.assign({
    access_key: WEB3FORMS_KEY,
    subject: ['Cotización web', datos['Empresa'], $('#fSector').value, modeloVisto()].filter(Boolean).join(' · '),
    from_name: 'Web POWER - Compresores',
    botcheck: false
  }, datos);
  if($('#fCorreo').value.trim()) payload.replyto = $('#fCorreo').value.trim();   // "Responder" va al cliente

  const ctrl = new AbortController();
  const limite = setTimeout(() => ctrl.abort(), 15000);
  try {
    if(!WEB3FORMS_KEY) throw new Error('Falta la Access Key de Web3Forms');
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal
    });
    const res = await r.json().catch(() => ({}));
    if(!r.ok || !res.success) throw new Error(res.message || 'Error ' + r.status);
    mostrarExito();
  } catch(err){
    console.warn('[Formulario] No se envió:', err.message);
    mostrarFallo(datos);
  } finally {
    clearTimeout(limite);
    enviando = false;
    btn.disabled = false;
    btn.innerHTML = BTN_TEXTO;
  }
});

/* ---------- Inicio ---------- */
buildCats();
renderSidebar();
sortProducts($('#sortSelect').value);
updateSpy();
