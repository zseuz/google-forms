# Forms Clone

Clon de **Google Forms** construido con **Angular** y **Angular Material**. Permite crear formularios con distintos tipos de pregunta, compartirlos para que otras personas los llenen, y revisar las respuestas en un resumen visual (gráfico de barras) o de forma individual.

No usa backend: todo el estado (formularios y respuestas) se guarda en el `localStorage` del navegador.

## Características

- **Constructor de formularios (drag & drop)**: título, descripción y preguntas reordenables arrastrándolas.
- **8 tipos de pregunta**: respuesta corta, párrafo, opción múltiple, casillas, lista desplegable, escala lineal (rango configurable con etiquetas), fecha y hora.
- **Preguntas obligatorias** con validación al enviar.
- **Autoguardado**: los cambios en el editor se persisten automáticamente.
- **Vista de llenado** tal como la vería un encuestado, con botón para volver a la página anterior.
- **Respuestas**: conteo total, resumen por pregunta (barras de distribución para preguntas de opción/escala, listado de texto para las demás) y vista de respuestas individuales.
- **Gestión de formularios**: crear, duplicar, eliminar (con confirmación) y borrar todas las respuestas de un formulario.

## Stack técnico

- [Angular 22](https://angular.dev/) — componentes standalone, signals y control flow (`@if`/`@for`/`@switch`)
- [Angular Material](https://material.angular.dev/) + [Angular CDK](https://material.angular.dev/cdk) (drag & drop)
- TypeScript, SCSS
- Persistencia en `localStorage` (sin backend ni base de datos)

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm 10 o superior

## Puesta en marcha

Instalar dependencias:

```bash
npm install
```

Levantar el servidor de desarrollo:

```bash
npm start
```

Abre `http://localhost:4200/` en tu navegador. La app se recarga automáticamente al guardar cambios.

## Scripts disponibles

| Comando         | Descripción                                              |
| --------------- | --------------------------------------------------------- |
| `npm start`      | Inicia el servidor de desarrollo (`ng serve`)             |
| `npm run build`  | Genera el build de producción en `dist/forms-clone`       |
| `npm run watch`  | Build en modo desarrollo con recompilación automática     |
| `npm test`       | Ejecuta las pruebas unitarias con Vitest                  |

## Estructura del proyecto

```
src/app/
├── core/
│   ├── models.ts          # Tipos: FormModel, Question, FormResponse, etc.
│   └── forms-store.ts     # Estado global (signals) + persistencia en localStorage
├── shared/
│   └── confirm-dialog/    # Diálogo de confirmación reutilizable
└── pages/
    ├── dashboard/         # Listado de formularios (crear, duplicar, eliminar)
    ├── builder/           # Editor de preguntas con drag & drop y autoguardado
    ├── fill/               # Vista de llenado para el encuestado
    └── responses/          # Resumen y respuestas individuales
```

## Rutas

| Ruta                              | Página                                  |
| ---------------------------------- | ---------------------------------------- |
| `/inicio`                          | Listado de formularios                   |
| `/editar/:id`                      | Editor de un formulario                  |
| `/formulario/:id`                  | Vista de llenado                         |
| `/formulario/:id/respuestas`       | Resumen y respuestas individuales        |

## Notas

- Al no tener backend, los datos viven solo en el navegador donde se crearon; no se comparten entre dispositivos ni usuarios.
- Ideas para evolucionar el proyecto: exportar respuestas a CSV, más tipos de pregunta (cuadrícula, carga de archivos), y un backend real (por ejemplo Firebase) para compartir formularios entre distintos usuarios.
