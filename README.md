# CEAN LMS — Plataforma Virtual de Capacitación

Plataforma de aprendizaje en línea para **CEAN Capacitación**, construida con HTML, CSS y JavaScript vanilla.

## 📋 Descripción

Sistema de gestión de aprendizaje (LMS) que permite:
- Catálogo de 33 cursos de leyes, idiomas y tecnología
- Registro e inicio de sesión de usuarios
- Seguimiento de progreso por curso
- Exámenes finales con calificación automática
- Generación de certificados con código único

## 🚀 Inicio Rápido

### Opción 1: Abrir directamente
```bash
# Simplemente abre el archivo index.html en tu navegador
# Doble clic en index.html o:
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### Opción 2: Usar un servidor local (recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js (necesitas http-server)
npx http-server -p 8000

# Luego abre: http://localhost:8000
```

## 📁 Estructura del Proyecto

```
lms-cursos/
├── index.html          # Página principal
├── style.css           # Estilos CEAN
├── app.js              # Lógica de la aplicación
├── PLAN.md             # Plan de desarrollo
├── DATABASE.md         # Schema de base de datos (para migración futura)
├── README.md           # Este archivo
└── assets/
    └── cursos/         # Imágenes de los cursos (34 archivos)
```

## 🎓 Cursos Disponibles

### Leyes y Normativa (25 cursos)
1. Ley SAFCO (Ley 1178)
2. Responsabilidad por la Función Pública
3. Estatuto del Funcionario Público (Ley 2027)
4. Ley Marcelo Quiroga Santa Cruz (Ley 004)
5. Ley contra el Racismo y Discriminación (Ley 045)
6. Código Tributario Boliviano (Ley 2492)
7. Normas SBBS (DS 23318-A)
8. SICOES (DS 0181)
9. Seguridad Social a Corto Plazo (Ley 924)
10. Sistema Integral de Pensiones (Ley 065)
11. Ley General de Aduanas (Ley 1990)
12. Código Procesal Civil (Ley 439)
13. Código Civil Boliviano (Ley 12760)
14. Ley del Medio Ambiente (Ley 1333)
15. Ley Forestal (Ley 1700)
16. Salud Familiar Comunitaria Intercultural (Ley 475)
17. Ley Avelino Siñani - Elizardo Pérez (Ley 070)
18. Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia (Ley 348)
19. Código de Comercio (Ley 14379)
20. Ley General del Trabajo (LGT)
21. SIGMA y SIGEP
22. Ley del Órgano Judicial (Ley 025)
23. Administración de Personal (DS 26115)
24. Servicios de Salud (DS 29601)
25. Ley de Reconducción Comunitaria (Ley 3545)

### Idiomas (4 cursos)
1. Aymara Básico
2. Quechua Básico
3. Inglés Básico
4. Lenguaje de Señas Boliviano

### Tecnología (4 cursos)
1. Ofimática Básica
2. Aulas Virtuales
3. Marketing Digital
4. Gestión de Políticas Públicas

## 👤 Cuenta Demo

Para probar la plataforma sin registrarte:

| Campo | Valor |
|-------|-------|
| **Email** | `demo@cean.bo` |
| **Contraseña** | `cean2026` |

### Que incluye la cuenta Demo?

La cuenta demo tiene **progreso precargado** para que puedas ver como funciona el sistema:

1. **Curso: Ley SAFCO**
   - 3 de 5 lecciones completadas
   - 60% de avance
   - Faltan 2 lecciones para habilitar el examen

2. **Curso: Marketing Digital**
   - 5 de 5 lecciones completadas
   - 100% de avance
   - **Examen final habilitado** - Pruébalo!

### Flujo recomendado para la demo:

1. **Inicia sesion** con la cuenta demo
2. Ve a **"Mis Cursos"** en el dashboard
3. Veras los 2 cursos con su progreso
4. **Completa las lecciones faltantes** en Ley SAFCO:
   - Leccion 4: Sistema de Contabilidad Integrada
   - Leccion 5: Sistema de Control Gubernamental
5. Haz click en **"Marcar completada"** en cada leccion
6. La **barra de progreso** se actualizara automaticamente
7. Cuando completes el 100%, el boton de **Examen** se habilitara
8. **Presenta el examen** y obtén tu certificado (necesitas 70%)

## 🔧 Características Técnicas

### Almacenamiento
- **localStorage** para persistencia de datos
- Claves utilizadas:
  - `cean_users` — Lista de usuarios
  - `cean_session` — Sesión actual
  - `cean_progress_{userId}` — Progreso por usuario
  - `cean_certs_{userId}` — Certificados por usuario
  - `cean_enrollments_{userId}` — Inscripciones por usuario

### Vistas de la Aplicación
- `view-home` — Landing page pública con catálogo
- `view-dashboard` — Panel del alumno
- `view-player` — Reproductor de lecciones
- `view-exam` — Examen final
- `view-certificate` — Certificado imprimible

### Flujo del Usuario
1. **Registro/Login** → Modal de autenticación
2. **Explorar cursos** → Catálogo filtrable por categoría
3. **Inscribirse** → Click en cualquier curso
4. **Estudiar** → Ver lecciones y marcar como completadas
5. **Examen** → 10 preguntas, necesita 70% para aprobar
6. **Certificado** → Generación automática con código único

## 🎨 Colores Corporativos CEAN

```css
--cean-blue:      #1d5f8a
--cean-blue-dark: #0d3b5e
--cean-blue-mid:  #2a7ab5
--cean-gold:      #f5c518
--cean-gold-dark: #d4a800
```

## 📞 Contacto

**CEAN Capacitación**
- 📍 La Paz, Av. 20 de Octubre, edit. Yocapri Mezzanine
- 📞 72530940

## 🔮 Migración a Producción

Para llevar esta aplicación a producción con backend real:

1. **Base de datos**: Usar el schema en `DATABASE.md` (PostgreSQL/MySQL)
2. **Backend**: Implementar API REST (Node.js/Express o Python/FastAPI)
3. **Autenticación**: JWT con refresh tokens
4. **Videos**: Integrar YouTube, Vimeo o servidor propio
5. **PDF**: Generar certificados con librerías como jsPDF o pdfkit
6. **Email**: Enviar notificaciones y bienvenida

## 📝 Licencia

© 2026 CEAN Capacitación — Plataforma Virtual de Aprendizaje

---

*Desarrollado para CEAN Capacitación, La Paz, Bolivia*
