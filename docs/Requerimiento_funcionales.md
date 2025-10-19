# 📋 **REQUERIMIENTOS FUNCIONALES**
## **Sistema de Gestión - Fundación Atma Namasté**

---

## **🎯 INFORMACIÓN GENERAL**

**Proyecto:** Sistema Web de Gestión Integral  
**Cliente:** Fundación Atma Namasté - Valledupar, Colombia  
**Desarrolladores:** Jesús David Carvajal & María Isabel García  
**Año:** 2025  

**Propósito:**  
Desarrollar una aplicación web que sirva como plataforma para la gestión administrativa de la fundación y sitio web informativo para visitantes.

---

## **👤 ROLES DEL SISTEMA**

### **1. Administrador / Directivo**
- Acceso total al sistema
- Gestión completa de todos los módulos
- Creación y gestión de usuarios

### **2. Docente / Responsable de Programa**
- Acceso limitado a sus programas asignados
- Ver inscritos de sus programas
- Registro de asistencias
- Generación de reportes de sus programas

### **3. Visitante Público**
- Acceso al sitio web público
- Visualización de información institucional
- Sin acceso al sistema administrativo

### **4. Padrino con Cuenta (Opcional - Futuro)**
- Ver reportes de sus ahijados
- Ver historial de donaciones

---

## **🔐 MÓDULO 0: AUTENTICACIÓN Y AUTORIZACIÓN**

### **Propósito**
Controlar el acceso y roles dentro del sistema.

### **Funcionalidades**
- **Login**: Inicio de sesión con email/usuario y contraseña
- **Logout**: Cierre de sesión
- **Gestión de sesión**: Mantener usuario autenticado mediante JWT
- **Recuperación de contraseña**: Restablecer contraseña (opcional para MVP)
- **Expiración de tokens**: Control automático de sesiones
- **Validación de permisos**: Por módulo y por rol

### **Integración**
- Punto de entrada a todos los módulos
- Los tokens JWT autorizan peticiones del frontend al backend
- Según el rol, se muestran diferentes paneles (dashboard admin/docente)

### **Matriz de Permisos**

| Funcionalidad | Administrador | Docente |
|---------------|---------------|---------|
| Gestión de beneficiarios | ✅ Completa | ❌ No |
| Gestión de programas | ✅ Completa | ❌ No |
| Ver inscritos | ✅ Todos | ✅ Solo sus programas |
| Tomar asistencia | ✅ Todos | ✅ Solo sus programas |
| Apadrinamiento | ✅ Sí | ❌ No |
| Donaciones | ✅ Sí | ❌ No |
| Gastos/Recursos | ✅ Sí | ❌ No |
| Reportes | ✅ Todos | ✅ Solo sus programas |
| Gestión de usuarios | ✅ Sí | ❌ No |
| Configuración | ✅ Sí | ❌ No |

---

## **👥 MÓDULO 1: GESTIÓN DE PERSONAS Y BENEFICIARIOS**

### **Propósito**
Gestionar toda la información de las personas relacionadas con la fundación.

### **Tipos de Personas**

#### **1.1 Niños/Menores de Edad (< 18 años)**
**Datos obligatorios:**
- Información personal: Nombre completo, tipo y número de documento, fecha de nacimiento
- Información de contacto: Dirección, barrio, teléfono
- Información educativa: Institución educativa, grado actual
- Tutor/Representante legal: OBLIGATORIO, relación con tutor registrado
- Consentimiento informado de uso de imagen: OBLIGATORIO
- Documento de consentimiento (archivo adjunto)
- Fotografía (opcional)
- Estado: Activo/Inactivo

**Relaciones:**
- Debe tener al menos 1 tutor activo
- Puede estar en múltiples programas
- Puede tener 1 padrino (apadrinamiento)

#### **1.2 Tutores/Representantes Legales**
**Datos obligatorios:**
- Información personal: Nombre completo, cédula, fecha de nacimiento
- Información de contacto: Dirección, teléfono, email (opcional)
- Parentesco con el/los menor(es)
- Estado: Activo/Inactivo

**Características especiales:**
- Pueden ser SOLO tutores (no inscritos a programas)
- O tutores Y beneficiarios (inscritos a programas para adultos)

**Relaciones:**
- Tiene 1 o más menores a cargo
- Puede estar inscrito en programas

#### **1.3 Jóvenes y Adultos (≥ 18 años)**
**Datos obligatorios:**
- Información personal: Nombre completo, cédula, fecha de nacimiento
- Información de contacto: Dirección, teléfono, email
- Si es estudiante universitario: Institución, programa académico, semestre
- Estado: Activo/Inactivo

**Relaciones:**
- Pueden estar en múltiples programas
- No requieren tutor

#### **1.4 Docentes/Responsables de Programas**
**Datos obligatorios:**
- Información personal: Nombre completo, cédula
- Información de contacto: Teléfono, email
- Especialidad/Área
- Usuario y contraseña para acceso al sistema
- Estado: Activo/Inactivo

**Relaciones:**
- Asignado a 1 o más programas como responsable
- Puede tomar asistencia en sus programas

#### **1.5 Personal Administrativo**
**Datos obligatorios:**
- Información personal: Nombre completo, cédula
- Información de contacto: Teléfono, email
- Cargo
- Usuario y contraseña para acceso al sistema
- Estado: Activo/Inactivo

**Relaciones:**
- Acceso completo al sistema

#### **1.6 Otro Personal (Aseadora, etc.)**
**Datos obligatorios:**
- Información personal: Nombre completo, cédula
- Cargo
- Información de contacto
- Estado: Activo/Inactivo

**Relaciones:**
- Solo para registro de pagos
- No tienen acceso al sistema

### **Funcionalidades para Administradores**
- **Registrar persona/beneficiario**
  - Formulario con validaciones según tipo de persona
  - Si es menor: Obligar selección/creación de tutor
  - Si es tutor: Permitir vincular menores existentes o crear nuevos
- **Listar personas/beneficiarios**
  - Filtros: Por tipo, por programa, por estado
  - Búsqueda: Por nombre, documento
  - Paginación
- **Ver detalle**
  - Información completa
  - Programas inscritos con fechas
  - Si es menor: Ver tutor y padrino
  - Si es tutor: Ver menores a cargo
  - Historial de asistencias
- **Editar información**
- **Activar/Desactivar** (no eliminar físicamente)
- **Vincular/desvincular de programas**
- **Exportar listados**: PDF o Excel con filtros aplicados

### **Integración**
- Se conecta con Programas para inscripciones
- Se conecta con Apadrinamiento para asignar padrinos
- Requiere autenticación de rol ADMIN

---

## **📚 MÓDULO 2: GESTIÓN DE PROGRAMAS Y ACTIVIDADES**

### **Propósito**
Administrar los programas académicos, lúdicos y de apoyo de la fundación.

### **Tipos de Programas**
1. Programa de Mercados
2. Refuerzo Escolar
3. Artes Plásticas/Pintura
4. Danza
5. Escuela de Iniciación Musical
6. Becas Estudiantiles y Profesionales (BESPRO)
7. Programa de Meditación
8. Apadrinamiento

### **Datos de un Programa**
- Código único del programa
- Nombre
- Descripción
- Tipo: Académico, Lúdico, Apoyo Social, Espiritual
- Público objetivo: Niños, Jóvenes, Adultos, Todos
- Rango de edad: Mínimo y máximo (si aplica)
- Días de actividad
- Horario: Hora inicio y fin
- Requiere docente: Sí/No
- Cupo máximo (opcional)
- Responsable(s): Uno o más docentes/coordinadores asignados
- Estado: Activo, Inactivo, En Pausa
- Fechas de creación y última modificación

### **Funcionalidades para Administradores**
- **Crear programa**: Formulario completo
- **Listar programas**
  - Filtros: Por tipo, por público, por estado
  - Ver cantidad de inscritos por programa
- **Ver detalle de programa**
  - Información completa
  - Listado de inscritos (exportable)
  - Responsables asignados
  - Estadísticas: Total inscritos, asistencia promedio
- **Editar programa**
- **Activar/Desactivar/Pausar programa**
- **Asignar/remover responsables**
- **Gestionar inscritos**
  - Inscribir beneficiario con fecha
  - Desinscribir beneficiario con fecha y motivo
  - Ver historial de inscripciones
- **Control de cupos disponibles**
- **Exportar datos del programa**: PDF o Excel

### **Funcionalidades para Docentes**
- **Ver mis programas**: Solo donde es responsable
- **Ver inscritos de mi programa**
  - Lista completa con datos básicos
  - Exportar a PDF/Excel

### **Integración**
- Se conecta con Asistencias para registro
- Se relaciona con Beneficiarios y Docentes
- Admin ve todos; Docente solo los suyos

---

## **📝 MÓDULO 3: REGISTRO DE ASISTENCIAS**

### **Propósito**
Registrar y consultar la asistencia de beneficiarios en las clases.

### **Datos de una Asistencia**
- Programa
- Fecha
- Beneficiario (inscripción)
- Estado: Presente, Ausente, Justificado, Tardanza
- Observaciones (opcional)
- Registrado por
- Fecha y hora de registro

### **Funcionalidades para Administradores**
- **Tomar asistencia**
  - Seleccionar programa y fecha
  - Lista de inscritos del programa
  - Marcar estado para cada uno
  - Guardar asistencia del día
- **Ver historial de asistencias**
  - Por programa
  - Por beneficiario
  - Por rango de fechas
  - Estadísticas: % de asistencia por beneficiario
  - Alertas de baja asistencia
- **Editar asistencia**: Corregir errores recientes
- **Exportar asistencias**: PDF o Excel con filtros

### **Funcionalidades para Docentes**
- **Tomar asistencia**: Solo en sus programas asignados
- **Ver historial**: Solo de sus programas
- **Exportar**: Solo de sus programas

### **Integración**
- Usa los inscritos del Módulo de Programas
- Solo accesible por DOCENTE o ADMIN
- Un solo registro de asistencia por inscripción por fecha (restricción)

---

## **🤝 MÓDULO 4: GESTIÓN DE APADRINAMIENTO**

### **Propósito**
Gestionar la relación entre padrinos y niños apadrinados.

### **Datos de un Padrino**
- Tipo: Persona Natural, Empresa, Organización
- Nombre completo o razón social
- País de origen
- Ciudad (opcional)
- Email
- Teléfono (opcional)
- Tipo de donación: Monetaria, En especie, Ambas
- Frecuencia de donación: Mensual, Trimestral, Semestral, Anual, Ocasional
- Preferencia de privacidad: Pública, Privada, Anónima
- Fecha de inicio como padrino
- Estado: Activo/Inactivo
- Observaciones

### **Relación Padrino-Apadrinado**
- Un padrino puede tener 1 o más niños apadrinados
- Un niño puede tener 1 padrino activo (o ninguno)
- Fecha de inicio de la relación
- Fecha de finalización (si aplica)
- Estado: Activa/Finalizada
- Motivo de finalización (si aplica)

### **Funcionalidades para Administradores (SOLO)**
- **Registrar padrino**
- **Listar padrinos**
  - Filtros: Por estado, por país
  - Búsqueda por nombre
- **Ver detalle de padrino**
  - Información completa
  - Lista de niños apadrinados
  - Historial de donaciones realizadas
- **Editar padrino**
- **Desactivar padrino**
- **Asignar niño a padrino**
  - Seleccionar menor sin padrino o cambiar padrino
  - Fecha de inicio de apadrinamiento
- **Finalizar apadrinamiento**
  - Desvincular niño de padrino
  - Fecha y motivo de finalización
- **Exportar datos**: Padrinos, apadrinados, historial

### **Integración**
- Se conecta con Beneficiarios (menores)
- Se conecta con Donaciones
- Información completamente confidencial
- Docentes NO tienen acceso

---

## **💰 MÓDULO 5: REGISTRO DE DONACIONES Y AYUDAS**

### **Propósito**
Gestionar el registro de donaciones recibidas y ayudas entregadas.

### **5.1 Registro de Donaciones Recibidas**

#### **Tipos de Donaciones**
1. Donación de Padrino (vinculada a padrino y apadrinado)
2. Donación General (con donador conocido)
3. Donación Anónima
4. Donación para Programa específico

#### **Datos de una Donación**
- Tipo de donación
- Si es de padrino: Padrino y apadrinamiento asociados
- Si es para programa: Programa asociado
- Si es general: Nombre del donador
- Si es anónima: Marcar como anónima
- Tipo de recurso: Monetaria, En especie
- Si es monetaria: Monto en COP
- Si es en especie: Descripción detallada de items
- Fecha de recepción
- Método de recepción: Transferencia, Giro internacional, Efectivo, Cheque, Otro
- Número de referencia (transacción)
- Descripción general
- Observaciones
- Comprobante (archivo adjunto)
- Registrado por
- Fecha de registro

### **5.2 Registro de Ayudas Entregadas**

#### **Tipos de Ayudas**
1. Entrega de Mercados (mensual, masiva)
2. Ayuda Económica BESPRO (becas)
3. Entrega de Útiles Escolares
4. Entrega de Ropa/Zapatos
5. Ayuda Puntual (matrículas, medicamentos, etc.)
6. Otro

#### **Datos de una Ayuda Entregada**
- Tipo de ayuda
- Programa asociado (si aplica)
- Apadrinamiento asociado (si aplica)
- Beneficiario(s): Individual o múltiples (masiva)
- Tipo de recurso: Monetaria, En especie, Mixta
- Si es monetaria: Monto
- Descripción de items entregados
- Fecha programada
- Fecha real de entrega
- Estado: Programada, Entregada, Cancelada
- Motivo de cancelación (si aplica)
- Confirmación de recibido
- Firma digital o comprobante (archivo)
- Observaciones
- Registrado por
- Entregado por (usuario que hizo la entrega física)

### **Funcionalidades para Administradores**
- **Registrar donación recibida**
  - Formulario dinámico según tipo
  - Vincular con padrino, programa o dejar general/anónima
- **Listar donaciones**
  - Filtros: Por tipo, fecha, padrino, programa
  - Ver totales monetarios y cantidad
- **Ver detalle de donación**
- **Editar/Eliminar donación**: Por errores de registro
- **Registrar ayuda a entregar**
  - Seleccionar tipo y beneficiario(s)
  - Programar fecha de entrega
  - Individual o masiva
- **Listar ayudas**
  - Filtros: Por tipo, estado, fecha, programa
  - Vista de entregas pendientes
- **Confirmar entrega**
  - Cambiar estado a "Entregada"
  - Registrar fecha real
  - Subir firma/comprobante
  - Confirmar beneficiarios individualmente (si es masiva)
- **Ver detalle de ayuda**
- **Editar ayuda**
- **Cancelar ayuda**: Con motivo
- **Exportar datos**: Donaciones y ayudas con filtros

### **Integración**
- Se conecta con Beneficiarios, Padrinos y Programas
- Visible solo para ADMIN
- Donaciones de padrinos son confidenciales

---

## **💸 MÓDULO 6: GESTIÓN DE RECURSOS Y GASTOS**

### **Propósito**
Registro del destino de recursos económicos. NO es contabilidad completa, solo registro de gastos.

### **Categorías de Gastos**
1. **Pago de Personal**: Docentes, administrativos, personal de aseo, otro
2. **Gastos Operativos**: Servicios públicos, arriendo, transporte
3. **Gastos de Programas**: Materiales, insumos, empaque de mercados
4. **Eventos y Actividades**: Organización y materiales
5. **Otros Gastos**

### **Datos de un Gasto**
- Categoría
- Subcategoría/Concepto específico
- Si es pago a personal: Persona asociada del sistema
- Si es para programa: Programa asociado
- Monto
- Fecha del gasto
- Método de pago: Transferencia, Efectivo, Cheque, Otro
- Número de referencia
- Descripción
- Comprobante (archivo adjunto)
- Observaciones
- Registrado por
- Fecha de registro

### **Funcionalidades para Administradores**
- **Registrar gasto**
  - Formulario dinámico según categoría
  - Vincular con persona o programa si aplica
- **Listar gastos**
  - Filtros: Por categoría, fecha, programa, persona
  - Ver totales por categoría y total general
- **Ver detalle de gasto**
- **Editar/Eliminar gasto**: Corregir errores
- **Dashboard de gastos**
  - Gráfico por categoría
  - Comparativa por meses
  - Top gastos del mes
- **Exportar gastos**: PDF o Excel con filtros

### **Integración**
- Se conecta con Personas (si es pago a personal)
- Se conecta con Programas (si es gasto de programa)
- Solo accesible por ADMIN

---

## **📊 MÓDULO 7: REPORTES Y ESTADÍSTICAS**

### **Propósito**
Centralizar la generación de reportes, estadísticas y trazabilidad.

### **Reportes para Administradores**

#### **Reporte de Beneficiarios**
- Total por tipo
- Por programa
- Activos vs inactivos
- Exportar listado completo

#### **Reporte de Programas**
- Programas con cantidad de inscritos
- Programas más y menos concurridos
- Datos específicos por programa

#### **Reporte de Asistencias**
- Por programa (rango de fechas)
- Por beneficiario
- % de asistencia promedio
- Alertas de baja asistencia

#### **Reporte de Apadrinamiento**
- Total de padrinos activos
- Niños apadrinados vs sin apadrinar
- Donaciones por padrino
- Donaciones totales por período

#### **Reporte Financiero Básico**
- Total donaciones recibidas (por período)
- Total ayudas entregadas (por período)
- Total gastos (por período)
- Balance simple: Ingresos - Egresos
- Gráficos: Gastos por categoría, donaciones por mes

#### **Reporte de Entregas Pendientes**
- Ayudas programadas pendientes
- Filtros por tipo y fecha

#### **Auditoría de Acciones**
- Registro de quién creó, editó o eliminó registros
- Acciones críticas del sistema
- Historial por usuario y fecha

### **Reportes para Docentes**
- Listado de inscritos en sus programas
- Asistencias de sus programas
- Exportar datos de sus programas

### **Funcionalidades**
- Exportar a Excel, PDF o CSV
- Filtros avanzados
- Gráficos y estadísticas visuales
- Historial de reportes generados

### **Integración**
- Todos los módulos reportan a este
- Admin tiene acceso total
- Docente tiene acceso limitado

---

## **🌐 MÓDULO 8: SITIO WEB PÚBLICO**

### **Propósito**
Ofrecer un portal institucional para visitantes e interesados.

### **Páginas del Sitio**

#### **Página de Inicio**
- Hero section con mensaje de bienvenida
- Misión y visión
- Resumen de programas con imágenes
- Llamado a la acción
- Galería de fotos (carrusel)

#### **Página "Sobre Nosotros"**
- Historia de la fundación (desde 2009)
- Equipo directivo (opcional)
- Logros y reconocimientos
- Aliados y patrocinadores

#### **Página "Programas"**
- Listado de programas con descripción
- Público objetivo de cada programa
- Imágenes representativas


#### **Página "Contáctanos"**
- Información de contacto: Dirección, teléfono, email, redes sociales
- NO incluye formulario de contacto
- Solo datos para contacto externo

#### **Página "Cómo Ayudar"** (Opcional)
- Información sobre donaciones
- Formas de colaborar

### **Funcionalidades para Visitantes**
- Navegar por todas las páginas públicas
- Ver información de programas
- Diseño responsive (desktop, tablet, móvil)
- Botón de acceso al panel administrativo

### **Funcionalidades para Administradores (Opcional para MVP)**
- Editar contenido del sitio
- Actualizar textos e imágenes
- Gestionar información de programas

### **Integración**
- No depende del backend de autenticación para contenido estático
- Podría conectarse a API pública para mostrar programas actualizados

---

## **👤 MÓDULO 9: GESTIÓN DE USUARIOS DEL SISTEMA**

### **Propósito**
Administrar usuarios con acceso al sistema.

### **Funcionalidades para Administradores**

#### **Gestión de Usuarios**
- **Crear usuario**
  - Vincular a persona del sistema (docente o administrativo)
  - Asignar rol: Admin o Docente
  - Asignar usuario y contraseña temporal
  - Estado: Activo/Inactivo/Bloqueado
- **Listar usuarios**
  - Filtros: Por rol, por estado
  - Ver último acceso
- **Ver detalle de usuario**
  - Información de acceso
  - Historial de actividad
- **Editar usuario**
  - Cambiar rol
  - Cambiar contraseña
  - Activar/Desactivar/Bloquear
- **Eliminar usuario**: Desactivar acceso
- **Asignar programas a docente**: Vincular como responsable

#### **Gestión de Roles y Permisos**
- Definición de permisos por rol
- Validación de acceso por módulo

### **Funcionalidades para Todos los Usuarios**
- Ver mi perfil
- Cambiar mi contraseña
- Actualizar datos de contacto

### **Integración**
- Se conecta con Personas
- Se conecta con Autenticación
- Solo accesible por ADMIN

---

## **⚙️ MÓDULO 10: CONFIGURACIÓN Y SEGURIDAD**

### **Propósito**
Administrar parámetros generales del sistema y seguridad de datos.

### **Funcionalidades para Administradores**
- **Gestión de roles y permisos**
- **Configuración de backups**: Automáticos o manuales
- **Políticas de seguridad**: Contraseñas, sesiones
- **Configuración de correo**: Notificaciones
- **Panel de logs del sistema**
- **Gestión de contraseñas**: Cambio, recuperación, expiración

### **Integración**
- Transversal a todos los módulos
- Solo accesible por ADMIN

---

## **📱 FUNCIONALIDADES TRANSVERSALES**

### **Para Todos los Usuarios**

#### **Dashboard Personalizado por Rol**
- **Admin**: Estadísticas generales, accesos rápidos a todos los módulos
- **Docente**: Mis programas, asistencias pendientes, accesos limitados

#### **Búsqueda Global**
- Buscar beneficiarios por nombre o documento
- Buscar programas
- Buscar padrinos (solo admin)

#### **Exportación**
- PDF y Excel en listados principales
- Filtros aplicados mantenidos en exportación

#### **Diseño Responsive**
- Funciona en desktop, tablet y móvil
- Interfaz adaptativa

#### **Validaciones**
- Formularios con validaciones claras
- Mensajes de error descriptivos
- Prevención de datos duplicados

#### **Mensajes de Confirmación**
- "¿Estás seguro?" en acciones críticas
- Confirmación antes de eliminar/desactivar
- Feedback visual de acciones completadas

---

## **🎯 PRIORIZACIÓN DE MÓDULOS**

| Prioridad | Módulo | Justificación |
|-----------|--------|---------------|
| 🔴 Alta | Autenticación | Base para acceder al sistema |
| 🔴 Alta | Gestión de Personas | Core del sistema |
| 🔴 Alta | Gestión de Programas | Core del sistema |
| 🔴 Alta | Gestión de Usuarios | Necesario para crear usuarios |
| 🟡 Media | Asistencias | Funcionalidad importante pero no bloqueante |
| 🟡 Media | Apadrinamiento | Confidencial pero no urgente para MVP |
| 🟡 Media | Donaciones y Ayudas | Importante pero puede implementarse después |
| 🟡 Media | Sitio Web Público | Marketing y visibilidad |
| 🟢 Baja | Gastos/Recursos | Útil pero no crítico para MVP |
| 🟢 Baja | Reportes | Puede implementarse gradualmente |
| 🟢 Baja | Configuración | Ajustes finales |