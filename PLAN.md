# CEAN LMS — Plan de Desarrollo

> Documento de referencia rápida. Actualizar el estado de cada tarea al completarla.

---

## Estado General

| Archivo | Estado | Notas |
|---|---|---|
| `index.html` | ✅ COMPLETO | CEAN-branded, todas las vistas presentes |
| `style.css` | ✅ COMPLETO | Variables CEAN, responsive, certificado imprimible |
| `assets/cursos/` | ✅ COMPLETO | 34 imágenes copiadas y renombradas |
| `DATABASE.md` | ✅ COMPLETO | Schema SQL relacional completo |
| `app.js` | ⬜ PENDIENTE | Reescritura completa con datos CEAN |
| `README.md` | ⬜ PENDIENTE | Documentación de despliegue |

---

## Tareas app.js — Checklist detallado

### BLOQUE 1 — Constantes y datos maestros
- [ ] `COURSES[]` — 33 cursos CEAN con campos completos
- [ ] Cada curso tiene: `id, title, category, law, image, description, objectives[], instructor, duration, lessons[], exam{}`
- [ ] Lecciones: mínimo 4 por curso (`{id, title, duration, videoUrl}`)
- [ ] Examen: 10 preguntas, 4 opciones cada una, `correctIndex`
- [ ] `DEMO_USER` — cuenta demo `demo@cean.bo` / `cean2026`

### BLOQUE 2 — Capa de persistencia (localStorage)
- [ ] `Storage.getUsers()` / `setUsers()`
- [ ] `Storage.getSession()` / `setSession()` / `clearSession()`
- [ ] `Storage.getProgress(userId)` / `setProgress(userId, data)`
- [ ] `Storage.getCertificates(userId)` / `addCertificate(userId, cert)`
- [ ] `Storage.getEnrollments(userId)` / `addEnrollment(userId, courseId)`

### BLOQUE 3 — Router SPA
- [ ] `showView(name)` — oculta todas, muestra la elegida
- [ ] Vistas: `home | dashboard | player | exam-intro | exam | exam-result | certificate`
- [ ] `scrollToCourses()` — scroll suave al catálogo en home

### BLOQUE 4 — Auth
- [ ] `initApp()` — leer sesión al cargar, restaurar estado navbar
- [ ] `showAuth(tab)` — abrir modal login/register, cambiar pestaña
- [ ] `closeAuth()` — cerrar modal
- [ ] `switchAuthTab(tab)` — alternar login ↔ registro en el modal
- [ ] `register(event)` — validar email único, hashear, guardar, auto-login
- [ ] `login(event)` — verificar credenciales, guardar sesión
- [ ] `logout()` — limpiar sesión, redirigir a home
- [ ] `updateNavbar(user)` — mostrar avatar/nombre en navbar

### BLOQUE 5 — Home / Catálogo
- [ ] `renderCatalog()` — generar tarjetas de cursos en `#catalog-grid`
- [ ] `filterCourses(category)` — filtrar por Todos/Leyes/Idiomas/Tecnología
- [ ] `openCourse(courseId)` — si logueado → enroll+player, si no → showAuth

### BLOQUE 6 — Dashboard
- [ ] `showDashboard()` — cargar panel del usuario
- [ ] `renderMyCoursesTab()` — cursos inscritos con progreso %
- [ ] `renderCatalogTab()` — catálogo dentro del dashboard
- [ ] `renderCertificatesTab()` — lista de certificados obtenidos
- [ ] `switchDashTab(tab)` — alternar pestañas del panel

### BLOQUE 7 — Player de video
- [ ] `openPlayer(courseId)` — inicializar player para el curso
- [ ] `renderLessonList(course, progress)` — sidebar con lecciones y check
- [ ] `loadLesson(courseId, lessonIndex)` — cargar video en iframe, actualizar progreso
- [ ] `markLessonComplete(courseId, lessonIndex)` — marcar lección, calcular %
- [ ] `checkCourseComplete(courseId)` — si 100% → habilitar examen
- [ ] `goToExam(courseId)` — navegar a vista exam-intro

### BLOQUE 8 — Motor de examen
- [ ] `showExamIntro(courseId)` — mostrar card con info del examen
- [ ] `startExam(courseId)` — inicializar estado del examen
- [ ] `renderQuestion(index)` — mostrar pregunta y opciones
- [ ] `selectAnswer(optionIndex)` — registrar respuesta del alumno
- [ ] `nextQuestion()` / `prevQuestion()` — navegar preguntas
- [ ] `submitExam()` — calcular score, determinar aprobado/reprobado
- [ ] `showExamResult(passed, score)` — mostrar resultado
- [ ] `retryExam(courseId)` — reintentar si reprobado
- [ ] Nota de aprobación: 70% (7 de 10 preguntas)

### BLOQUE 9 — Certificados
- [ ] `generateCertificate(courseId)` — crear registro de certificado
- [ ] `showCertificate(certId)` — renderizar vista imprimible
- [ ] `printCertificate()` — `window.print()`
- [ ] `downloadCertificate()` — función de descarga (PDF via print dialog)
- [ ] Certificado contiene: nombre alumno, curso, ley/normativa, fecha, nro. correlativo

### BLOQUE 10 — Utilidades
- [ ] `formatDate(date)` — formato `DD de MMMM de YYYY` en español
- [ ] `calcProgress(userId, courseId)` — % de lecciones completadas
- [ ] `getCertNumber(certId)` — número formateado `CEAN-2026-XXXXXX`
- [ ] `showToast(msg, type)` — notificaciones temporales (success/error/info)

---

## Datos de los 33 Cursos CEAN

### Categoría: Leyes y Normativa (25 cursos)

| # | ID | Título | Ley | Imagen |
|---|---|---|---|---|
| 1 | ley-safco | Ley SAFCO | Ley 1178 | ley-safco.png |
| 2 | responsabilidad-publica | Responsabilidad por la Función Pública | Ley 1178 Art. | responsabilidad-funcion-publica.png |
| 3 | estatuto-funcionario | Estatuto del Funcionario Público | Ley 2027 | estatuto-funcionario.png |
| 4 | marcelo-quiroga | Ley Marcelo Quiroga Santa Cruz | Ley 004 | marcelo-quiroga.png |
| 5 | contra-discriminacion | Ley contra el Racismo y Discriminación | Ley 045 | contra-discriminacion.png |
| 6 | codigo-tributario | Código Tributario Boliviano | Ley 2492 | codigo-tributario.png |
| 7 | normas-sbbs | Normas SBBS | DS 23318-A | normas-sbbs.png |
| 8 | sicoes | SICOES — Sistema de Contrataciones | DS 0181 | sicoes.png |
| 9 | seguridad-social | Seguridad Social a Corto Plazo | Ley 924 | seguridad-social.png |
| 10 | pensiones | Sistema Integral de Pensiones | Ley 065 | pensiones.png |
| 11 | ley-aduanas | Ley General de Aduanas | Ley 1990 | ley-aduanas.png |
| 12 | codigo-procesal-civil | Código Procesal Civil | Ley 439 | codigo-procesal-civil.png |
| 13 | codigo-civil | Código Civil Boliviano | Ley 12760 | codigo-civil.png |
| 14 | medio-ambiente | Ley del Medio Ambiente | Ley 1333 | medio-ambiente.png |
| 15 | ley-forestal | Ley Forestal | Ley 1700 | ley-forestal.png |
| 16 | safci | Salud Familiar Comunitaria Intercultural | Ley 475 | safci.png |
| 17 | avelino-sinani | Ley Avelino Siñani - Elizardo Pérez | Ley 070 | avelino-sinani.png |
| 18 | violencia-mujer | Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia | Ley 348 | violencia-mujer.png |
| 19 | codigo-comercio | Código de Comercio | Ley 14379 | codigo-comercio.png |
| 20 | ley-trabajo | Ley General del Trabajo | LGT | ley-trabajo.png |
| 21 | sigma-sigep | SIGMA y SIGEP | DS varios | sigma-sigep.png |
| 22 | organo-judicial | Ley del Órgano Judicial | Ley 025 | organo-judicial.png |
| 23 | admi-personal | Administración de Personal | DS 26115 | admi-personal.png |
| 24 | servicios-salud | Servicios de Salud | DS 29601 | servicios-salud.png |
| 25 | reforma-agraria | Ley de Reconducción Comunitaria | Ley 3545 | reforma-agraria.png |

### Categoría: Idiomas (4 cursos)

| # | ID | Título | Imagen |
|---|---|---|---|
| 1 | aymara-basico | Aymara Básico | aymara-basico.png |
| 2 | quechua-basico | Quechua Básico | quechua-basico.png |
| 3 | ingles-basico | Inglés Básico | ingles-basico.png |
| 4 | lenguaje-senas | Lenguaje de Señas Boliviano | lenguaje-senas.png |

### Categoría: Tecnología (4 cursos)

| # | ID | Título | Imagen |
|---|---|---|---|
| 1 | ofimatica | Ofimática Básica | ofimatica.png |
| 2 | aulas-virtuales | Aulas Virtuales | aulas-virtuales.png |
| 3 | marketing-digital | Marketing Digital | marketing-digital.png |
| 4 | politicas-publicas | Gestión de Políticas Públicas | politicas-publicas.png |

---

## Estructura de Datos localStorage

```js
// Clave: 'cean_users'
[{ id, nombre, email, passwordHash, createdAt, role:'student'|'admin' }]

// Clave: 'cean_session'
{ userId, email, nombre, loginAt }

// Clave: 'cean_progress_{userId}'
{
  [courseId]: {
    enrolled: true,
    enrolledAt: ISO,
    lessons: { [lessonIndex]: { completed: bool, completedAt: ISO } },
    percent: 0-100,
    examPassed: bool,
    examScore: 0-10,
    examDate: ISO
  }
}

// Clave: 'cean_certs_{userId}'
[{ id, courseId, courseTitle, studentName, issuedAt, certNumber }]
```

---

## Variables del examen en memoria (no persistente)

```js
let examState = {
  courseId: null,
  questions: [],      // 10 preguntas shuffled
  answers: [],        // respuestas del alumno (null | 0-3)
  current: 0,
  startedAt: null
}
```

---

## Orden de ejecución al cargar

```
DOMContentLoaded
  └─ initApp()
       ├─ leer cean_session
       ├─ si hay sesión → updateNavbar() + precargar dashboard
       └─ showView('home')
            └─ renderCatalog()
```

---

## Cuenta Demo

| Campo | Valor |
|---|---|
| Email | demo@cean.bo |
| Contraseña | cean2026 |
| Nombre | Alumno Demo |

---

## Colores CEAN (referencia)

```css
--cean-blue:      #1d5f8a
--cean-blue-dark: #0d3b5e
--cean-blue-mid:  #2a7ab5
--cean-gold:      #f5c518
--cean-gold-dark: #d4a800
```

---

## IDs de vistas HTML (referencia rápida)

```
#view-home          → landing page pública
#view-dashboard     → panel del alumno
#view-player        → reproductor + lista lecciones
#view-exam-intro    → tarjeta previa al examen
#view-exam          → preguntas del examen
#view-exam-result   → resultado aprobado/reprobado
#view-certificate   → certificado imprimible
#auth-modal         → modal login/registro
```

---

## Próximos pasos (en orden)

1. ⬜ Escribir `app.js` — Bloque 1: COURSES[] completo (33 cursos)
2. ⬜ Escribir `app.js` — Bloque 2: Storage layer
3. ⬜ Escribir `app.js` — Bloque 3-4: Router + Auth
4. ⬜ Escribir `app.js` — Bloque 5-6: Home + Dashboard
5. ⬜ Escribir `app.js` — Bloque 7-8: Player + Examen
6. ⬜ Escribir `app.js` — Bloque 9-10: Certificados + Utilidades
7. ⬜ Escribir `README.md`
8. ⬜ Prueba integral: registro → curso → examen → certificado → imprimir
