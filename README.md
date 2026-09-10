# 3X Platform

Base profesional en Angular para una plataforma/directorio de talentos adultos verificados.

## Stack

- Angular 22 standalone components.
- Firebase listo para Auth, Firestore, Storage y Hosting.
- Arquitectura inspirada en `InvertChile`: `core`, `data`, `features`, `shared`, `environments`, reglas Firebase y carpeta `public`.

## Primer arranque

```bash
npm install
npm start
```

Luego abre `http://localhost:4200`.

## Configurar Firebase

1. Crea un proyecto en Firebase.
2. Reemplaza los valores en `src/environments/environment.ts`.
3. Reemplaza el project id en `.firebaserc`.
4. Revisa `firestore.rules` y `storage.rules` antes de publicar.
5. Despliega con:

```bash
npm run deploy:firebase
```

## Estructura principal

- `src/app/core`: modelos, servicios, Firebase y guards.
- `src/app/data`: datos temporales para desarrollo.
- `src/app/features`: paginas por dominio: home, perfil, postular, admin, legal.
- `src/app/shared`: layout y componentes reutilizables.
- `public/assets`: imagenes y marca.

## Legal y acceso adulto

- Puerta 18+ en `src/app/shared/components/age-gate`.
- Aviso de cookies en `src/app/shared/components/cookie-consent`.
- Textos editables en `src/app/data/legal-documents.ts`.
- Rutas publicas: `/terminos-y-condiciones`, `/politica-de-privacidad`, `/politica-de-cookies`.

## Nota importante

Antes de operar con datos reales, fotos, videos o documentos, valida los flujos de mayoria de edad, consentimiento, privacidad, retencion de datos y moderacion con asesoria legal local.
