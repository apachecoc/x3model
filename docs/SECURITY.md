# Seguridad y privacidad

Esta base incluye reglas iniciales, pero no debe publicarse con datos reales sin completar:

- Firebase Auth con roles `owner`, `admin`, `moderator`, `talent`.
- Verificacion de mayoria de edad documentada.
- Consentimiento explicito por imagen, video y texto.
- Revision manual antes de `status = published`.
- Panel de reportes y retiro de contenido.
- Auditoria de cambios en perfiles, medios y contactos.
- Politica de retencion y borrado de datos personales.

## Datos sensibles

No guardes documentos de identidad, telefonos privados, direcciones o material no aprobado en documentos publicos de Firestore. Usa Storage privado y documentos con reglas estrictas.
