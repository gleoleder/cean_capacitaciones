# CEAN LMS — Diseño de Base de Datos

> Schema SQL relacional para producción (PostgreSQL / MySQL).  
> Esta versión web usa localStorage como capa de persistencia temporal;  
> este documento define la migración al backend real.

---

## Diagrama de entidades (resumen)

```
usuarios ──< inscripciones >── cursos ──< lecciones
                                │
                            examenes ──< preguntas ──< opciones
                                │
                         intentos_examen ──< respuestas_alumno
                                │
                          certificados
usuarios ──< sesiones
usuarios ──< pagos
usuarios ──< notificaciones
```

---

## Tablas

### 1. `roles`

```sql
CREATE TABLE roles (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(50) NOT NULL UNIQUE,  -- 'admin', 'instructor', 'student'
  descripcion TEXT
);
```

### 2. `usuarios`

```sql
CREATE TABLE usuarios (
  id             SERIAL PRIMARY KEY,
  rol_id         INT NOT NULL REFERENCES roles(id) DEFAULT 3,
  nombre         VARCHAR(100) NOT NULL,
  apellido       VARCHAR(100),
  email          VARCHAR(255) NOT NULL UNIQUE,
  password_hash  VARCHAR(255) NOT NULL,
  telefono       VARCHAR(20),
  ci             VARCHAR(20),                     -- Cédula de identidad Bolivia
  departamento   VARCHAR(50),
  institucion    VARCHAR(150),
  avatar_url     VARCHAR(500),
  activo         BOOLEAN NOT NULL DEFAULT TRUE,
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  creado_en      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_usuarios_email ON usuarios(email);
```

### 3. `sesiones`

```sql
CREATE TABLE sesiones (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id  INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  token       VARCHAR(500) NOT NULL UNIQUE,
  ip          INET,
  user_agent  TEXT,
  expira_en   TIMESTAMPTZ NOT NULL,
  creado_en   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_sesiones_usuario ON sesiones(usuario_id);
CREATE INDEX idx_sesiones_token   ON sesiones(token);
```

### 4. `categorias`

```sql
CREATE TABLE categorias (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL UNIQUE,  -- 'Leyes y Normativa', 'Idiomas', 'Tecnología'
  slug        VARCHAR(100) NOT NULL UNIQUE,  -- 'leyes', 'idiomas', 'tecnologia'
  descripcion TEXT,
  icono       VARCHAR(10),                   -- emoji o código de ícono
  orden       INT NOT NULL DEFAULT 0
);
```

### 5. `cursos`

```sql
CREATE TABLE cursos (
  id              SERIAL PRIMARY KEY,
  categoria_id    INT NOT NULL REFERENCES categorias(id),
  slug            VARCHAR(150) NOT NULL UNIQUE,   -- 'ley-safco'
  titulo          VARCHAR(200) NOT NULL,
  descripcion     TEXT,
  objetivos       TEXT[],                         -- array de objetivos
  ley_referencia  VARCHAR(100),                   -- 'Ley 1178', 'DS 0181'
  instructor      VARCHAR(100),
  nivel           VARCHAR(50) DEFAULT 'Básico',   -- 'Básico','Intermedio','Avanzado'
  duracion_horas  NUMERIC(4,1),
  imagen_url      VARCHAR(500),
  precio          NUMERIC(10,2) DEFAULT 0,        -- 0 = gratuito
  publicado       BOOLEAN NOT NULL DEFAULT FALSE,
  destacado       BOOLEAN NOT NULL DEFAULT FALSE,
  orden           INT NOT NULL DEFAULT 0,
  creado_en       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  actualizado_en  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_cursos_categoria ON cursos(categoria_id);
CREATE INDEX idx_cursos_slug      ON cursos(slug);
```

### 6. `lecciones`

```sql
CREATE TABLE lecciones (
  id          SERIAL PRIMARY KEY,
  curso_id    INT NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  titulo      VARCHAR(200) NOT NULL,
  descripcion TEXT,
  video_url   VARCHAR(500),                  -- YouTube embed URL
  duracion_min INT,                          -- duración en minutos
  orden       INT NOT NULL DEFAULT 0,
  tipo        VARCHAR(30) DEFAULT 'video',   -- 'video', 'documento', 'actividad'
  es_gratis   BOOLEAN NOT NULL DEFAULT FALSE,
  creado_en   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_lecciones_curso ON lecciones(curso_id);
```

### 7. `inscripciones`

```sql
CREATE TABLE inscripciones (
  id           SERIAL PRIMARY KEY,
  usuario_id   INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  curso_id     INT NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  estado       VARCHAR(30) NOT NULL DEFAULT 'activo', -- 'activo','completado','cancelado'
  inscrito_en  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completado_en TIMESTAMPTZ,
  UNIQUE(usuario_id, curso_id)
);

CREATE INDEX idx_inscripciones_usuario ON inscripciones(usuario_id);
CREATE INDEX idx_inscripciones_curso   ON inscripciones(curso_id);
```

### 8. `progreso_lecciones`

```sql
CREATE TABLE progreso_lecciones (
  id              SERIAL PRIMARY KEY,
  inscripcion_id  INT NOT NULL REFERENCES inscripciones(id) ON DELETE CASCADE,
  leccion_id      INT NOT NULL REFERENCES lecciones(id) ON DELETE CASCADE,
  completada      BOOLEAN NOT NULL DEFAULT FALSE,
  segundos_vistos INT DEFAULT 0,          -- tiempo de reproducción acumulado
  completada_en   TIMESTAMPTZ,
  UNIQUE(inscripcion_id, leccion_id)
);

CREATE INDEX idx_progreso_inscripcion ON progreso_lecciones(inscripcion_id);
```

### 9. `examenes`

```sql
CREATE TABLE examenes (
  id                  SERIAL PRIMARY KEY,
  curso_id            INT NOT NULL REFERENCES cursos(id) ON DELETE CASCADE UNIQUE,
  titulo              VARCHAR(200),
  instrucciones       TEXT,
  num_preguntas       INT NOT NULL DEFAULT 10,
  puntaje_aprobacion  INT NOT NULL DEFAULT 7,   -- 7/10 = 70%
  intentos_max        INT NOT NULL DEFAULT 3,   -- 0 = ilimitado
  tiempo_limite_min   INT DEFAULT 0,            -- 0 = sin límite
  activo              BOOLEAN NOT NULL DEFAULT TRUE
);
```

### 10. `preguntas`

```sql
CREATE TABLE preguntas (
  id          SERIAL PRIMARY KEY,
  examen_id   INT NOT NULL REFERENCES examenes(id) ON DELETE CASCADE,
  enunciado   TEXT NOT NULL,
  explicacion TEXT,                   -- retroalimentación al responder
  orden       INT NOT NULL DEFAULT 0,
  puntos      INT NOT NULL DEFAULT 1
);

CREATE INDEX idx_preguntas_examen ON preguntas(examen_id);
```

### 11. `opciones`

```sql
CREATE TABLE opciones (
  id           SERIAL PRIMARY KEY,
  pregunta_id  INT NOT NULL REFERENCES preguntas(id) ON DELETE CASCADE,
  texto        TEXT NOT NULL,
  es_correcta  BOOLEAN NOT NULL DEFAULT FALSE,
  orden        INT NOT NULL DEFAULT 0
);

CREATE INDEX idx_opciones_pregunta ON opciones(pregunta_id);
```

### 12. `intentos_examen`

```sql
CREATE TABLE intentos_examen (
  id              SERIAL PRIMARY KEY,
  usuario_id      INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  examen_id       INT NOT NULL REFERENCES examenes(id) ON DELETE CASCADE,
  inscripcion_id  INT NOT NULL REFERENCES inscripciones(id),
  puntaje         INT NOT NULL DEFAULT 0,
  total_preguntas INT NOT NULL DEFAULT 10,
  aprobado        BOOLEAN NOT NULL DEFAULT FALSE,
  iniciado_en     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  finalizado_en   TIMESTAMPTZ
);

CREATE INDEX idx_intentos_usuario ON intentos_examen(usuario_id);
CREATE INDEX idx_intentos_examen  ON intentos_examen(examen_id);
```

### 13. `respuestas_alumno`

```sql
CREATE TABLE respuestas_alumno (
  id            SERIAL PRIMARY KEY,
  intento_id    INT NOT NULL REFERENCES intentos_examen(id) ON DELETE CASCADE,
  pregunta_id   INT NOT NULL REFERENCES preguntas(id),
  opcion_id     INT REFERENCES opciones(id),    -- NULL si no respondió
  es_correcta   BOOLEAN,
  respondido_en TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_respuestas_intento ON respuestas_alumno(intento_id);
```

### 14. `certificados`

```sql
CREATE TABLE certificados (
  id              SERIAL PRIMARY KEY,
  usuario_id      INT NOT NULL REFERENCES usuarios(id),
  curso_id        INT NOT NULL REFERENCES cursos(id),
  intento_id      INT NOT NULL REFERENCES intentos_examen(id),
  numero          VARCHAR(50) NOT NULL UNIQUE,   -- 'CEAN-2026-000001'
  puntaje         INT NOT NULL,
  emitido_en      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  url_pdf         VARCHAR(500),                  -- ruta al PDF generado
  valido          BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE(usuario_id, curso_id)
);

CREATE INDEX idx_certificados_usuario ON certificados(usuario_id);
CREATE INDEX idx_certificados_numero  ON certificados(numero);
```

### 15. `pagos`

```sql
CREATE TABLE pagos (
  id               SERIAL PRIMARY KEY,
  usuario_id       INT NOT NULL REFERENCES usuarios(id),
  curso_id         INT NOT NULL REFERENCES cursos(id),
  inscripcion_id   INT REFERENCES inscripciones(id),
  monto            NUMERIC(10,2) NOT NULL,
  moneda           CHAR(3) NOT NULL DEFAULT 'BOB',
  metodo           VARCHAR(50),   -- 'transferencia', 'qr', 'efectivo'
  referencia       VARCHAR(100),  -- número de transacción
  estado           VARCHAR(30) NOT NULL DEFAULT 'pendiente', -- 'pendiente','aprobado','rechazado'
  pagado_en        TIMESTAMPTZ,
  creado_en        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 16. `notificaciones`

```sql
CREATE TABLE notificaciones (
  id          SERIAL PRIMARY KEY,
  usuario_id  INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  tipo        VARCHAR(50),    -- 'bienvenida', 'inscripcion', 'certificado', 'recordatorio'
  titulo      VARCHAR(200),
  mensaje     TEXT,
  leida       BOOLEAN NOT NULL DEFAULT FALSE,
  creado_en   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_notif_usuario ON notificaciones(usuario_id);
```

---

## Vista útil: progreso consolidado

```sql
CREATE VIEW v_progreso_alumno AS
SELECT
  i.usuario_id,
  i.curso_id,
  c.titulo AS curso,
  COUNT(l.id)                                          AS total_lecciones,
  COUNT(pl.leccion_id) FILTER (WHERE pl.completada)   AS lecciones_completadas,
  ROUND(
    COUNT(pl.leccion_id) FILTER (WHERE pl.completada)::NUMERIC
    / NULLIF(COUNT(l.id), 0) * 100, 1
  )                                                    AS porcentaje,
  i.estado
FROM inscripciones i
JOIN cursos c ON c.id = i.curso_id
JOIN lecciones l ON l.curso_id = c.id
LEFT JOIN progreso_lecciones pl ON pl.inscripcion_id = i.id AND pl.leccion_id = l.id
GROUP BY i.usuario_id, i.curso_id, c.titulo, i.estado;
```

---

## Datos semilla — Categorías

```sql
INSERT INTO categorias (nombre, slug, icono, orden) VALUES
  ('Leyes y Normativa', 'leyes',      '⚖️',  1),
  ('Idiomas',           'idiomas',    '🌐',  2),
  ('Tecnología',        'tecnologia', '💻',  3);
```

---

## Notas de implementación

- **Contraseñas**: bcrypt con cost factor 12.
- **Tokens de sesión**: JWT HS256 + refresh token rotativo, expiración 8h.
- **Número de certificado**: secuencia `CEAN-{YYYY}-{NNNNNN}` generada en trigger.
- **Soft delete**: usar columna `activo = FALSE` en lugar de `DELETE`.
- **Auditoría**: se recomienda tabla `auditoria_log(tabla, operacion, usuario_id, datos_antes JSONB, datos_despues JSONB, en TIMESTAMPTZ)`.
- **Índices de texto**: para búsqueda de cursos usar `GIN` sobre `to_tsvector('spanish', titulo || ' ' || descripcion)`.
- **ORM sugerido**: Prisma (Node.js) o SQLAlchemy (Python).
- **Backend sugerido**: Express.js + PostgreSQL o FastAPI + PostgreSQL.
