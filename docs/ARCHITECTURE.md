# Arquitectura 3X

La app separa presentacion, dominio y preparacion de infraestructura:

- `core/models`: contratos de perfiles, postulaciones, medios y filtros.
- `core/services`: estado de catalogo y postulaciones; luego pueden reemplazarse por repositorios Firestore.
- `core/firebase`: inicializacion centralizada del SDK Firebase.
- `features`: rutas principales cargadas de forma diferida.
- `shared`: layout y componentes visuales reutilizables.

## Camino a Firestore

1. Crear colecciones `profiles`, `applications`, `users`, `reports`, `auditLogs`.
2. Mover `ProfileCatalogService` desde datos semilla a consultas Firestore.
3. Mover `ApplicationService` desde `localStorage` a `addDoc(collection(db, 'applications'))`.
4. Agregar Auth y roles antes de habilitar `/admin`.
5. Registrar cada cambio sensible en `auditLogs`.

## Medios

Las fotos y videos cortos deben subir a Storage con rutas separadas:

- `profiles/{profileId}/public`: medios aprobados para publicacion.
- `profiles/{profileId}/private`: material pendiente o restringido.
- `verification/{uid}`: documentos privados de verificacion.
