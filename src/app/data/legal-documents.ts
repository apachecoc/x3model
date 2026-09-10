import { LegalDocument } from '@core/models/legal-document.model';

export const LEGAL_DOCUMENTS: Record<LegalDocument['id'], LegalDocument> = {
  terms: {
    id: 'terms',
    title: 'Terminos y condiciones',
    summary: 'Reglas de acceso, publicacion, verificacion, moderacion y uso de 3X.',
    lastUpdated: '10 de septiembre de 2026',
    sections: [
      {
        heading: '1. Naturaleza de la plataforma',
        body: [
          '3X es una plataforma de publicacion y descubrimiento de perfiles de talentos adultos. La plataforma no participa en acuerdos privados, pagos externos ni encuentros entre usuarios.',
          'La publicacion de un perfil no garantiza oportunidades, ingresos, visibilidad permanente ni aprobacion automatica de contenido.',
        ],
      },
      {
        heading: '2. Acceso exclusivo para mayores de edad',
        body: [
          'Al ingresar declaras que tienes al menos 18 anos o la mayoria de edad exigida en tu jurisdiccion, lo que sea mayor.',
          'Queda prohibido acceder, registrarse, publicar o enviar material si eres menor de edad o si no puedes acreditar identidad y mayoria de edad cuando sea requerido.',
        ],
      },
      {
        heading: '3. Consentimiento y publicacion',
        body: [
          'Toda persona publicada debe entregar consentimiento libre, informado y verificable para el uso de su alias, imagenes, videos, descripcion y datos de contacto editorial.',
          'No se permite publicar contenido de terceros, material obtenido sin autorizacion, contenido generado mediante suplantacion, documentos privados ni datos sensibles no autorizados.',
        ],
      },
      {
        heading: '4. Revision editorial y moderacion',
        body: [
          '3X puede aprobar, pausar, editar, ocultar o eliminar perfiles cuando existan dudas sobre edad, consentimiento, identidad, derechos de imagen, seguridad o cumplimiento legal.',
          'Las publicaciones pueden requerir revision manual antes de quedar visibles y pueden ser auditadas con posterioridad.',
        ],
      },
      {
        heading: '5. Contenido prohibido',
        body: [
          'Esta prohibido cualquier contenido que involucre menores de edad, coercion, trata de personas, violencia, amenazas, datos de ubicacion privada, documentos personales expuestos o material ilegal.',
          'Tambien se prohibe el contenido que sugiera servicios no consentidos, explotacion, discriminacion, acoso, suplantacion o captacion enganosa.',
        ],
      },
      {
        heading: '6. Responsabilidad del usuario',
        body: [
          'Cada usuario es responsable de la veracidad de la informacion que entrega y de contar con derechos suficientes sobre los materiales subidos.',
          'Los perfiles deben mantener informacion actualizada y solicitar retiro o correccion de datos cuando corresponda.',
        ],
      },
      {
        heading: '7. Cambios de los terminos',
        body: [
          '3X puede actualizar estos terminos para reflejar cambios legales, operativos o de seguridad. La fecha de actualizacion se indicara en esta pagina.',
          'Estos textos son una base operativa y deben ser revisados por asesoria legal antes de lanzar el servicio con datos reales.',
        ],
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Politica de privacidad',
    summary: 'Como 3X recolecta, usa, protege y elimina datos personales y archivos privados.',
    lastUpdated: '10 de septiembre de 2026',
    sections: [
      {
        heading: '1. Datos que podemos tratar',
        body: [
          'Podemos tratar alias publico, ciudad, categoria, descripcion, datos de contacto editorial, imagenes, videos cortos, estado de revision y registros tecnicos de uso.',
          'Para verificar identidad y mayoria de edad podriamos solicitar documentos, selfies de control u otros antecedentes. Ese material debe almacenarse como privado y no publicarse.',
        ],
      },
      {
        heading: '2. Finalidades',
        body: [
          'Usamos los datos para crear y revisar perfiles, confirmar consentimiento, moderar contenido, prevenir abuso, responder reportes y administrar solicitudes de retiro o correccion.',
          'No se deben vender documentos de identidad, datos privados ni material de verificacion.',
        ],
      },
      {
        heading: '3. Base de consentimiento',
        body: [
          'La publicacion de imagenes, videos y textos requiere consentimiento de la persona identificable. El consentimiento debe poder retirarse mediante un canal claro.',
          'Cuando una persona solicite retirar contenido propio, la solicitud debe revisarse con prioridad y dejar registro de la accion tomada.',
        ],
      },
      {
        heading: '4. Seguridad',
        body: [
          'Los datos privados deben protegerse con autenticacion, reglas de acceso, separacion entre medios publicos y privados, registros de auditoria y revision de permisos.',
          'El acceso administrativo debe limitarse a personal autorizado y protegido con cuentas individuales.',
        ],
      },
      {
        heading: '5. Retencion y eliminacion',
        body: [
          'Los datos deben conservarse solo por el tiempo necesario para publicar, verificar, cumplir obligaciones legales, resolver disputas o prevenir abuso.',
          'Las solicitudes de eliminacion deben evaluarse y ejecutarse salvo que exista una razon legal, de seguridad o auditoria para retener informacion minima.',
        ],
      },
      {
        heading: '6. Derechos',
        body: [
          'Las personas publicadas pueden solicitar acceso, rectificacion, retiro, oposicion o eliminacion de datos, sujeto a verificacion de identidad.',
          'Antes de operar publicamente, adapta esta politica a la legislacion aplicable del pais donde funcionara 3X.',
        ],
      },
    ],
  },
  cookies: {
    id: 'cookies',
    title: 'Politica de cookies',
    summary: 'Uso de cookies y almacenamiento local para acceso 18+, preferencias y medicion.',
    lastUpdated: '10 de septiembre de 2026',
    sections: [
      {
        heading: '1. Que son las cookies',
        body: [
          'Las cookies y tecnologias similares permiten recordar preferencias, mantener sesiones, mejorar seguridad y medir el funcionamiento del sitio.',
          'En esta version, 3X usa almacenamiento local para recordar la confirmacion de mayoria de edad y la preferencia de cookies.',
        ],
      },
      {
        heading: '2. Cookies necesarias',
        body: [
          'Son necesarias para recordar la confirmacion 18+, mantener preferencias basicas y proteger el acceso a areas privadas.',
          'Estas cookies o registros locales no requieren aceptacion opcional porque permiten operar funciones esenciales del sitio.',
        ],
      },
      {
        heading: '3. Cookies analiticas y de mejora',
        body: [
          'Podrian usarse para medir visitas, rendimiento, errores, rutas consultadas y comportamiento agregado sin exponer documentos privados.',
          'Debes habilitarlas solo con consentimiento cuando la ley aplicable lo exija y documentar los proveedores usados.',
        ],
      },
      {
        heading: '4. Gestion de preferencias',
        body: [
          'El usuario puede aceptar o rechazar cookies no esenciales desde el aviso inferior. Tambien puede borrar datos del navegador para reiniciar preferencias.',
          'Si en el futuro se incorporan proveedores de publicidad, analitica o chat, esta politica debe actualizarse antes de activarlos.',
        ],
      },
    ],
  },
};
