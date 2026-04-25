/* ═══════════════════════════════════════════════
   CEAN LMS — Plataforma de Capacitación
   Lógica principal
   ═══════════════════════════════════════════════ */

'use strict';

// ─══════════════════════════════════════════════
// BLOQUE 1 — CONSTANTES Y DATOS MAESTROS
// ═══════════════════════════════════════════════

const DEMO_USER = {
  email: 'demo@cean.bo',
  password: 'cean2026',
  name: 'Alumno Demo'
};

const COURSES = [
  // ═══════════════════════════════════════════════
  // LEYES Y NORMATIVA (25 cursos)
  // ═══════════════════════════════════════════════
  
  {
    id: 'ley-safco',
    title: 'Ley SAFCO',
    category: 'Leyes y Normativa',
    law: 'Ley 1178',
    image: 'assets/cursos/ley-safco.png',
    price: 80,
    description: 'Conoce la Ley de Administración y Control Gubernamentales (SAFCO), norma fundamental del sistema de gestión pública boliviano.',
    instructor: 'Dr. Juan Carlos Mamani',
    duration: '4 horas',
    level: 'Básico',
    objectives: [
      'Comprender los fundamentos de la Ley SAFCO',
      'Conocer la estructura del sistema de administración pública',
      'Identificar los sistemas de control gubernamental',
      'Aplicar los principios de responsabilidad por la función pública'
    ],
    lessons: [
      { id: 'safco-1', title: 'Introducción a la Ley SAFCO', duration: '15 min', videoUrl: '' },
      { id: 'safco-2', title: 'Sistema de Administración de Personal', duration: '20 min', videoUrl: '' },
      { id: 'safco-3', title: 'Sistema de Administración de Bienes y Servicios', duration: '18 min', videoUrl: '' },
      { id: 'safco-4', title: 'Sistema de Contabilidad Integrada', duration: '22 min', videoUrl: '' },
      { id: 'safco-5', title: 'Sistema de Control Gubernamental', duration: '25 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué significa SAFCO?', options: ['Sistema de Administración y Control Gubernamentales', 'Servicio de Administración Financiera', 'Sistema de Auditoría Fiscal', 'Servicio de Control Empresarial'], correct: 0 },
      { q: '¿Cuál es el número de la Ley SAFCO?', options: ['Ley 1178', 'Ley 2027', 'Ley 1234', 'Ley 999'], correct: 0 },
      { q: '¿Cuántos sistemas establece la Ley SAFCO?', options: ['3 sistemas', '4 sistemas', '5 sistemas', '6 sistemas'], correct: 1 },
      { q: '¿Qué sistema NO pertenece a la Ley SAFCO?', options: ['Administración de Personal', 'Contabilidad Integrada', 'Seguridad Social', 'Control Gubernamental'], correct: 2 },
      { q: '¿Qué entidad ejerce el control externo?', options: ['Ministerio de Economía', 'Contraloría General del Estado', 'Banco Central', 'Tribunal Supremo'], correct: 1 },
      { q: '¿Quiénes están sujetos a la Ley SAFCO?', options: ['Solo empresas privadas', 'Entidades públicas y privadas con fondos públicos', 'Solo ministerios', 'Solo gobernaciones'], correct: 1 },
      { q: '¿Qué es el POA?', options: ['Plan Operativo Anual', 'Programa de Obras Públicas', 'Plan de Auditoría', 'Proyecto de Administración'], correct: 0 },
      { q: '¿Cuál es el principio fundamental de la Ley SAFCO?', options: ['Eficiencia administrativa', 'Maximizar ganancias', 'Reducir personal', 'Centralizar decisiones'], correct: 0 },
      { q: '¿Qué sistema regula las contrataciones públicas?', options: ['SICOES', 'SIGEP', 'SIGMA', 'SENASAG'], correct: 0 },
      { q: '¿La Ley SAFCO fue promulgada en qué año?', options: ['1989', '1995', '2000', '2010'], correct: 0 }
    ]
  },
  
  {
    id: 'responsabilidad-publica',
    title: 'Responsabilidad por la Función Pública',
    category: 'Leyes y Normativa',
    law: 'Ley 1178 Art. 16-18',
    price: 80,
    image: 'assets/cursos/responsabilidad-funcion-publica.png',
    description: 'Aprende sobre los tipos de responsabilidad que enfrentan los servidores públicos en el ejercicio de sus funciones.',
    instructor: 'Dra. María Elena Vargas',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Identificar los tipos de responsabilidad del servidor público',
      'Comprender las sanciones administrativas',
      'Conocer los procedimientos de sumario administrativo',
      'Diferenciar responsabilidad administrativa, civil y penal'
    ],
    lessons: [
      { id: 'resp-1', title: 'Fundamentos de la Función Pública', duration: '12 min', videoUrl: '' },
      { id: 'resp-2', title: 'Responsabilidad Administrativa', duration: '18 min', videoUrl: '' },
      { id: 'resp-3', title: 'Responsabilidad Civil', duration: '15 min', videoUrl: '' },
      { id: 'resp-4', title: 'Responsabilidad Penal', duration: '20 min', videoUrl: '' },
      { id: 'resp-5', title: 'Procedimiento de Sumario Administrativo', duration: '25 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Cuántos tipos de responsabilidad establece la Ley 1178?', options: ['2 tipos', '3 tipos', '4 tipos', '5 tipos'], correct: 1 },
      { q: '¿Qué tipo de responsabilidad implica indemnización económica?', options: ['Administrativa', 'Civil', 'Penal', 'Política'], correct: 1 },
      { q: '¿Qué sanción corresponde a falta grave administrativa?', options: ['Multa económica', 'Destitución', 'Prisión', 'Solo amonestación'], correct: 1 },
      { q: '¿Quién inicia el sumario administrativo?', options: ['El servidor público', 'La autoridad nominadora', 'El juez', 'El Ministerio Público'], correct: 1 },
      { q: '¿Cuál es el plazo máximo del sumario administrativo?', options: ['15 días', '30 días', '60 días', '90 días'], correct: 2 },
      { q: '¿La responsabilidad penal se juzga en sede:', options: ['Administrativa', 'Judicial', 'Ejecutiva', 'Legislativa'], correct: 1 },
      { q: '¿Qué es el descargo en el sumario?', options: ['Una sanción', 'La defensa del servidor', 'Una prueba', 'Un recurso'], correct: 1 },
      { q: '¿La responsabilidad administrativa prescribe a los:', options: ['2 años', '4 años', '6 años', '10 años'], correct: 2 },
      { q: '¿Qué autoridad aplica sanciones administrativas?', options: ['Juez penal', 'Autoridad nominadora', 'Contralor', 'Ministro'], correct: 1 },
      { q: '¿El servidor puede ser sancionado dos veces por el mismo hecho?', options: ['Sí, siempre', 'No, es non bis in idem', 'Solo si es grave', 'Depende del caso'], correct: 1 }
    ]
  },
  
  {
    id: 'estatuto-funcionario',
    title: 'Estatuto del Funcionario Público',
    category: 'Leyes y Normativa',
    law: 'Ley 2027',
    image: 'assets/cursos/estatuto-funcionario.png',
    description: 'Domina la normativa que regula los derechos, deberes y régimen disciplinario de los servidores públicos en Bolivia.',
    instructor: 'Dr. Roberto Fernández',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer los derechos y deberes del servidor público',
      'Entender el régimen de carrera administrativa',
      'Identificar las causales de despido',
      'Aplicar el código de ética del servidor público'
    ],
    lessons: [
      { id: 'estat-1', title: 'Ámbito de Aplicación de la Ley 2027', duration: '10 min', videoUrl: '' },
      { id: 'estat-2', title: 'Derechos del Servidor Público', duration: '20 min', videoUrl: '' },
      { id: 'estat-3', title: 'Deberes y Obligaciones', duration: '18 min', videoUrl: '' },
      { id: 'estat-4', title: 'Régimen de Carrera Administrativa', duration: '22 min', videoUrl: '' },
      { id: 'estat-5', title: 'Régimen Disciplinario', duration: '25 min', videoUrl: '' },
      { id: 'estat-6', title: 'Código de Ética', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula el Estatuto del Funcionario Público?', options: ['Ley 1178', 'Ley 2027', 'Ley 348', 'Ley 070'], correct: 1 },
      { q: '¿Cuál NO es un derecho del servidor público?', options: ['Remuneración justa', 'Capacitación', 'Huelga ilimitada', 'Estabilidad laboral'], correct: 2 },
      { q: '¿Qué es la carrera administrativa?', options: ['Un concurso', 'Sistema de ascenso por mérito', 'Un curso', 'Una sanción'], correct: 1 },
      { q: '¿Cuál es causal de despido justificado?', options: ['Llegar tarde una vez', 'Abandono de cargo', 'Pedir licencia', 'Enfermarse'], correct: 1 },
      { q: '¿Quién evalúa el desempeño del servidor?', options: ['El compañero', 'La autoridad inmediata', 'El Ministro', 'El Presidente'], correct: 1 },
      { q: '¿El servidor público puede ejercer actividad privada?', options: ['Sí, sin restricción', 'No, es incompatible', 'Solo si es de noche', 'Solo los fines de semana'], correct: 1 },
      { q: '¿Qué es el código de ética?', options: ['Una ley penal', 'Norma de conducta', 'Un reglamento salarial', 'Un contrato'], correct: 1 },
      { q: '¿La licencia sin goce de haberes puede ser hasta:', options: ['1 año', '2 años', '3 años', '5 años'], correct: 1 },
      { q: '¿Qué recurso procede contra despido injustificado?', options: ['Solo queja', 'Recurso de apelación', 'Demanda laboral', 'No hay recurso'], correct: 2 },
      { q: '¿El servidor interino tiene los mismos derechos?', options: ['Sí, todos', 'No, solo algunos', 'Ninguno', 'Depende'], correct: 1 }
    ]
  },
  
  {
    id: 'marcelo-quiroga',
    title: 'Ley Marcelo Quiroga Santa Cruz',
    category: 'Leyes y Normativa',
    law: 'Ley 004',
    image: 'assets/cursos/marcelo-quiroga.png',
    description: 'Estudia la ley de lucha contra la corrupción, enriquecimiento ilícito y recuperación de activos del Estado.',
    instructor: 'Dra. Patricia Luna',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Comprender los delitos de corrupción',
      'Identificar el enriquecimiento ilícito',
      'Conocer el procedimiento de recuperación de activos',
      'Aplicar las normas de declaración jurada'
    ],
    lessons: [
      { id: 'mqsc-1', title: 'Antecedentes de la Ley 004', duration: '10 min', videoUrl: '' },
      { id: 'mqsc-2', title: 'Delito de Enriquecimiento Ilícito', duration: '20 min', videoUrl: '' },
      { id: 'mqsc-3', title: 'Lavado de Dinero', duration: '22 min', videoUrl: '' },
      { id: 'mqsc-4', title: 'Recuperación de Activos', duration: '18 min', videoUrl: '' },
      { id: 'mqsc-5', title: 'Declaración Jurada de Patrimonio', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la Ley Marcelo Quiroga Santa Cruz?', options: ['Ley 001', 'Ley 004', 'Ley 007', 'Ley 010'], correct: 1 },
      { q: '¿Qué delito persigue principalmente esta ley?', options: ['Homicidio', 'Enriquecimiento ilícito', 'Robo', 'Estafa'], correct: 1 },
      { q: '¿Quién investiga el enriquecimiento ilícito?', options: ['Policía', 'Ministerio Público', 'Contraloría', 'SAT'], correct: 1 },
      { q: '¿Qué es la declaración jurada?', options: ['Un impuesto', 'Declaración de patrimonio', 'Un contrato', 'Una multa'], correct: 1 },
      { q: '¿Cuándo se presenta la declaración jurada?', options: ['Solo al ingresar', 'Al ingresar y salir del cargo', 'Cada año', 'Nunca'], correct: 1 },
      { q: '¿El enriquecimiento ilícito se configura cuando:', options: ['Ganas la lotería', 'El patrimonio supera ingresos declarados', 'Heredas', 'Compras casa'], correct: 1 },
      { q: '¿Qué es el lavado de dinero?', options: ['Limpiar billetes', 'Ocultar origen ilegal de fondos', 'Pagar impuestos', 'Invertir legalmente'], correct: 1 },
      { q: '¿La recuperación de activos beneficia a:', options: ['Solo al Estado', 'Estado y víctimas', 'Solo víctimas', 'Nadie'], correct: 1 },
      { q: '¿La pena por enriquecimiento ilícito es:', options: ['Solo multa', 'Prisión de 5 a 15 años', 'Solo inhabilitación', 'Trabajos comunitarios'], correct: 1 },
      { q: '¿Qué entidad administra bienes incautados?', options: ['Policía', 'Agencia de Recuperación de Activos', 'Ministerio', 'Alcaldía'], correct: 1 }
    ]
  },
  
  {
    id: 'contra-discriminacion',
    title: 'Ley contra el Racismo y Discriminación',
    category: 'Leyes y Normativa',
    law: 'Ley 045',
    image: 'assets/cursos/contra-discriminacion.png',
    description: 'Conoce la normativa que garantiza la igualdad y elimina toda forma de discriminación en Bolivia.',
    instructor: 'Lic. Carmen Choque',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Identificar actos discriminatorios',
      'Conocer las sanciones por discriminación',
      'Promover la igualdad de oportunidades',
      'Aplicar protocolos de actuación'
    ],
    lessons: [
      { id: 'disc-1', title: 'Concepto de Discriminación', duration: '15 min', videoUrl: '' },
      { id: 'disc-2', title: 'Formas de Discriminación', duration: '18 min', videoUrl: '' },
      { id: 'disc-3', title: 'Sanciones Penales', duration: '20 min', videoUrl: '' },
      { id: 'disc-4', title: 'Mecanismos de Denuncia', duration: '12 min', videoUrl: '' },
      { id: 'disc-5', title: 'Políticas de Igualdad', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley combate la discriminación en Bolivia?', options: ['Ley 045', 'Ley 070', 'Ley 348', 'Ley 1178'], correct: 0 },
      { q: '¿Qué es discriminación?', options: ['Trato igual', 'Distinción que anula derechos', 'Una opinión', 'Una preferencia'], correct: 1 },
      { q: '¿Cuál NO es motivo de discriminación prohibido?', options: ['Raza', 'Género', 'Preferencia musical', 'Religión'], correct: 2 },
      { q: '¿La discriminación puede ser sancionada con:', options: ['Solo multa', 'Prisión de 1 a 7 años', 'Solo disculpas', 'Nada'], correct: 1 },
      { q: '¿Quién puede denunciar discriminación?', options: ['Solo la víctima', 'Cualquier persona', 'Solo familiares', 'Solo autoridades'], correct: 1 },
      { q: '¿Qué es racismo?', options: ['Una ideología de superioridad racial', 'Una opinión política', 'Una creencia religiosa', 'Un deporte'], correct: 0 },
      { q: '¿Los medios de comunicación pueden difundir racismo?', options: ['Sí, libremente', 'No, está prohibido', 'Solo en redes', 'Depende'], correct: 1 },
      { q: '¿Qué institución recibe denuncias?', options: ['Solo policía', 'Ministerio Público y Defensoría', 'Solo Defensoría', 'Ninguna'], correct: 1 },
      { q: '¿La ley protege a:', options: ['Solo bolivianos', 'Todas las personas en Bolivia', 'Solo nativos', 'Solo ciudadanos'], correct: 1 },
      { q: '¿Qué es discriminación indirecta?', options: ['Insulto directo', 'Norma aparentemente neutra que afecta', 'Gritos', 'Golpes'], correct: 1 }
    ]
  },
  
  {
    id: 'codigo-tributario',
    title: 'Código Tributario Boliviano',
    category: 'Leyes y Normativa',
    law: 'Ley 2492',
    image: 'assets/cursos/codigo-tributario.png',
    description: 'Domina las normas generales del sistema tributario boliviano, obligaciones y procedimientos administrativos.',
    instructor: 'Dr. Luis Alberto Paz',
    duration: '6 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer los principios del derecho tributario',
      'Identificar obligaciones del contribuyente',
      'Comprender el procedimiento de fiscalización',
      'Aplicar normas de prescripción'
    ],
    lessons: [
      { id: 'trib-1', title: 'Principios del Derecho Tributario', duration: '20 min', videoUrl: '' },
      { id: 'trib-2', title: 'Hecho Generador y Base Imponible', duration: '25 min', videoUrl: '' },
      { id: 'trib-3', title: 'Obligaciones del Contribuyente', duration: '18 min', videoUrl: '' },
      { id: 'trib-4', title: 'Facultades de la Administración', duration: '22 min', videoUrl: '' },
      { id: 'trib-5', title: 'Procedimiento de Fiscalización', duration: '30 min', videoUrl: '' },
      { id: 'trib-6', title: 'Prescripción Tributaria', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es el Código Tributario?', options: ['Ley 2492', 'Ley 1178', 'Ley 2027', 'Ley 843'], correct: 0 },
      { q: '¿Qué es el hecho generador?', options: ['Un impuesto', 'Situación que origina la obligación tributaria', 'Una multa', 'Un descuento'], correct: 1 },
      { q: '¿Cuál NO es un impuesto nacional?', options: ['IVA', 'IUE', 'Predial', 'RC-IVA'], correct: 2 },
      { q: '¿La facultad de determinación prescribe a los:', options: ['3 años', '5 años', '7 años', '10 años'], correct: 2 },
      { q: '¿Qué es la base imponible?', options: ['El impuesto', 'Valor sobre el cual se calcula el impuesto', 'Una multa', 'Un descuento'], correct: 1 },
      { q: '¿El NIT es:', options: ['Opcional', 'Obligatorio para contribuyentes', 'Solo para empresas', 'Solo para extranjeros'], correct: 1 },
      { q: '¿Qué es la retención?', options: ['Un impuesto', 'Mecanismo de recaudación anticipada', 'Una multa', 'Un beneficio'], correct: 1 },
      { q: '¿La administración puede ingresar a domicilio?', options: ['Nunca', 'Con orden judicial', 'Siempre', 'Solo de día'], correct: 1 },
      { q: '¿Qué recurso procede contra resolución administrativa?', options: ['Solo queja', 'Recurso de alzada', 'Demanda penal', 'Ninguno'], correct: 1 },
      { q: '¿La mora tributaria genera:', options: ['Solo interés', 'Interés y multas', 'Solo multas', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'normas-sbbs',
    title: 'Normas SBBS',
    category: 'Leyes y Normativa',
    law: 'DS 23318-A',
    image: 'assets/cursos/normas-sbbs.png',
    description: 'Estudia las normas básicas del Sistema de Administración de Bienes y Servicios del Estado.',
    instructor: 'Ing. Pedro Sánchez',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer el objeto de las normas SBBS',
      'Identificar las fases del proceso de contratación',
      'Comprender los métodos de contratación',
      'Aplicar normas de registro de proveedores'
    ],
    lessons: [
      { id: 'sbbs-1', title: 'Introducción a las Normas SBBS', duration: '15 min', videoUrl: '' },
      { id: 'sbbs-2', title: 'Fases del Proceso', duration: '20 min', videoUrl: '' },
      { id: 'sbbs-3', title: 'Métodos de Contratación', duration: '25 min', videoUrl: '' },
      { id: 'sbbs-4', title: 'Registro de Proveedores', duration: '12 min', videoUrl: '' },
      { id: 'sbbs-5', title: 'Contratos y Órdenes de Compra', duration: '18 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué significa SBBS?', options: ['Sistema de Bienes Básicos', 'Sistema de Administración de Bienes y Servicios', 'Servicio de Bienes del Estado', 'Sistema Básico de Servicios'], correct: 1 },
      { q: '¿Qué norma aprueba las normas SBBS?', options: ['DS 23318-A', 'Ley 1178', 'Ley 2027', 'DS 0181'], correct: 0 },
      { q: '¿Cuál NO es un método de contratación?', options: ['Licitación', 'Contratación directa', 'Subasta inversa', 'Compra por catálogo'], correct: 3 },
      { q: '¿La licitación pública requiere:', options: ['1 proveedor', 'Al menos 3 proveedores', '5 proveedores', '10 proveedores'], correct: 1 },
      { q: '¿Qué es el RUP?', options: ['Registro Único de Proveedores', 'Registro de Usuarios Públicos', 'Registro de Productos', 'Ninguno'], correct: 0 },
      { q: '¿La contratación directa procede cuando:', options: ['Siempre', 'Urgencia o exclusividad', 'Nunca', 'Solo para alimentos'], correct: 1 },
      { q: '¿Quién aprueba el proceso?', options: ['El proveedor', 'La UAC', 'El Ministro', 'El Presidente'], correct: 1 },
      { q: '¿Qué es la UAC?', options: ['Unidad de Contrataciones', 'Unidad Administrativa y de Contrataciones', 'Unidad de Auditoría', 'Unidad de Compras'], correct: 1 },
      { q: '¿El contrato debe formalizarse en:', options: ['Oral', 'Escrito', 'Email', 'Cualquier forma'], correct: 1 },
      { q: '¿Las normas SBBS aplican a:', options: ['Solo ministerios', 'Todas las entidades públicas', 'Solo empresas', 'Solo alcaldías'], correct: 1 }
    ]
  },
  
  {
    id: 'sicoes',
    title: 'SICOES — Sistema de Contrataciones Estatales',
    category: 'Leyes y Normativa',
    law: 'DS 0181',
    image: 'assets/cursos/sicoes.png',
    description: 'Aprende a utilizar el sistema electrónico de contrataciones del Estado boliviano.',
    instructor: 'Lic. Andrea Molina',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Navegar en la plataforma SICOES',
      'Registrar procesos de contratación',
      'Consultar contrataciones públicas',
      'Gestionar usuarios del sistema'
    ],
    lessons: [
      { id: 'sicoes-1', title: 'Introducción al SICOES', duration: '10 min', videoUrl: '' },
      { id: 'sicoes-2', title: 'Registro de Usuarios', duration: '15 min', videoUrl: '' },
      { id: 'sicoes-3', title: 'Publicación de Procesos', duration: '20 min', videoUrl: '' },
      { id: 'sicoes-4', title: 'Recepción de Ofertas', duration: '18 min', videoUrl: '' },
      { id: 'sicoes-5', title: 'Adjudicación y Contrato', duration: '17 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es SICOES?', options: ['Sistema de Contabilidad', 'Sistema de Contrataciones Estatales', 'Sistema de Compras', 'Sistema de Control'], correct: 1 },
      { q: '¿Qué norma regula SICOES?', options: ['DS 0181', 'Ley 1178', 'DS 23318', 'Ley 2027'], correct: 0 },
      { q: '¿Quién administra SICOES?', options: ['Ministerio de Economía', 'Viceministerio de Contrataciones', 'Contraloría', 'SAT'], correct: 1 },
      { q: '¿El registro en SICOES es:', options: ['Opcional', 'Obligatorio para entidades públicas', 'Solo para privados', 'Solo para ONGs'], correct: 1 },
      { q: '¿Qué información publica SICOES?', options: ['Solo contratos', 'Todo el proceso de contratación', 'Solo adjudicaciones', 'Solo proveedores'], correct: 1 },
      { q: '¿Los proveedores deben registrarse en:', options: ['RUP', 'SICOES', 'Ambos', 'Ninguno'], correct: 2 },
      { q: '¿Se puede modificar una oferta publicada?', options: ['Sí, siempre', 'No, es irreversible', 'Solo el precio', 'Solo la cantidad'], correct: 1 },
      { q: '¿Qué es la transparencia en SICOES?', options: ['Ocultar información', 'Publicidad de todo el proceso', 'Solo publicar contratos', 'Nada'], correct: 1 },
      { q: '¿SICOES es de acceso:', options: ['Solo para funcionarios', 'Gratuito y público', 'Solo para proveedores', 'De pago'], correct: 1 },
      { q: '¿Qué sucede si no se publica en SICOES?', options: ['Nada', 'El contrato es nulo', 'Solo multa', 'Se valida igual'], correct: 1 }
    ]
  },
  
  {
    id: 'seguridad-social',
    title: 'Seguridad Social a Corto Plazo',
    category: 'Leyes y Normativa',
    law: 'Ley 924',
    image: 'assets/cursos/seguridad-social.png',
    description: 'Conoce los beneficios de la seguridad social: subsidios por enfermedad, maternidad y lactancia.',
    instructor: 'Dra. Sonia Rivera',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Identificar los subsidios de corto plazo',
      'Conocer los requisitos de acceso',
      'Calcular subsidios por enfermedad',
      'Gestionar licencias por maternidad'
    ],
    lessons: [
      { id: 'sscp-1', title: 'Introducción a la Seguridad Social', duration: '12 min', videoUrl: '' },
      { id: 'sscp-2', title: 'Subsidio por Enfermedad General', duration: '18 min', videoUrl: '' },
      { id: 'sscp-3', title: 'Subsidio por Maternidad', duration: '20 min', videoUrl: '' },
      { id: 'sscp-4', title: 'Subsidio por Lactancia', duration: '15 min', videoUrl: '' },
      { id: 'sscp-5', title: 'Trámites y Requisitos', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula la seguridad social a corto plazo?', options: ['Ley 924', 'Ley 065', 'Ley 1178', 'Ley 2027'], correct: 0 },
      { q: '¿Qué subsidio NO es de corto plazo?', options: ['Enfermedad', 'Maternidad', 'Vejez', 'Lactancia'], correct: 2 },
      { q: '¿El subsidio por enfermedad cubre:', options: ['100% del salario', '70% del salario', '50% del salario', '30% del salario'], correct: 1 },
      { q: '¿Cuántos días de descanso por maternidad?', options: ['30 días', '45 días antes y 45 después', '60 días', '90 días'], correct: 1 },
      { q: '¿El subsidio de lactancia es hasta:', options: ['6 meses', '1 año', '2 años', '3 años'], correct: 1 },
      { q: '¿Quién paga el subsidio?', options: ['El empleador', 'La Caja de Salud', 'El Estado', 'El banco'], correct: 1 },
      { q: '¿Se necesita certificado médico para enfermedad?', options: ['Sí, siempre', 'No', 'Solo si es grave', 'Depende'], correct: 0 },
      { q: '¿El período de espera para enfermedad es:', options: ['1 día', '3 días', '5 días', '7 días'], correct: 1 },
      { q: '¿La lactancia permite:', options: ['Solo descanso', '2 descansos de 30 min por día', '1 hora libre', 'Nada'], correct: 1 },
      { q: '¿Los independientes tienen acceso?', options: ['Sí, si cotizan', 'No', 'Solo mujeres', 'Solo mayores'], correct: 0 }
    ]
  },
  
  {
    id: 'pensiones',
    title: 'Sistema Integral de Pensiones',
    category: 'Leyes y Normativa',
    law: 'Ley 065',
    image: 'assets/cursos/pensiones.png',
    description: 'Estudia el sistema de pensiones boliviano: jubilación, vejez, invalidez y muerte.',
    instructor: 'Dr. Carlos Ortega',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Comprender el sistema de pensiones',
      'Calcular la jubilación',
      'Conocer las edades de retiro',
      'Identificar los regímenes de transición'
    ],
    lessons: [
      { id: 'pens-1', title: 'Historia del Sistema de Pensiones', duration: '15 min', videoUrl: '' },
      { id: 'pens-2', title: 'Jubilación por Vejez', duration: '20 min', videoUrl: '' },
      { id: 'pens-3', title: 'Jubilación por Invalidez', duration: '18 min', videoUrl: '' },
      { id: 'pens-4', title: 'Pensión de Muerte', duration: '15 min', videoUrl: '' },
      { id: 'pens-5', title: 'Régimen de Transición', duration: '22 min', videoUrl: '' },
      { id: 'pens-6', title: 'Aportes y Cotizaciones', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula el sistema de pensiones?', options: ['Ley 065', 'Ley 924', 'Ley 1178', 'Ley 2027'], correct: 0 },
      { q: '¿La edad de jubilación para hombres es:', options: ['55 años', '58 años', '60 años', '65 años'], correct: 2 },
      { q: '¿La edad de jubilación para mujeres es:', options: ['55 años', '58 años', '60 años', '62 años'], correct: 0 },
      { q: '¿Cuántos años de aporte mínimo se necesitan?', options: ['10 años', '15 años', '20 años', '25 años'], correct: 2 },
      { q: '¿Qué es la edad media de vida?', options: ['Promedio de vida', 'Factor para cálculo de pensión', 'Edad de jubilación', 'Nada'], correct: 1 },
      { q: '¿La pensión de invalidez requiere:', options: ['60% de pérdida', '50% de pérdida', '70% de pérdida', '40% de pérdida'], correct: 0 },
      { q: '¿Los beneficiarios de pensión de muerte son:', options: ['Solo hijos', 'Cónyuge e hijos', 'Solo padres', 'Hermanos'], correct: 1 },
      { q: '¿Qué es el régimen de transición?', options: ['Para nuevos trabajadores', 'Para quienes cotizaron antes de 1997', 'Para extranjeros', 'Para independientes'], correct: 1 },
      { q: '¿El aporte para pensiones es:', options: ['10%', '12.71%', '15%', '20%'], correct: 1 },
      { q: '¿Qué es la APS?', options: ['Administradora de Pensiones', 'Agencia de Pensiones', 'Autoridad de Fiscalización', 'Asociación'], correct: 1 }
    ]
  },
  
  {
    id: 'ley-aduanas',
    title: 'Ley General de Aduanas',
    category: 'Leyes y Normativa',
    law: 'Ley 1990',
    image: 'assets/cursos/ley-aduanas.png',
    description: 'Conoce el régimen aduanero boliviano, procedimientos de importación, exportación y tributos aduaneros.',
    instructor: 'Dr. Fernando Copa',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Comprender el régimen aduanero',
      'Identificar los regímenes aduaneros',
      'Calcular tributos aduaneros',
      'Conocer procedimientos de despacho'
    ],
    lessons: [
      { id: 'adua-1', title: 'Introducción al Derecho Aduanero', duration: '15 min', videoUrl: '' },
      { id: 'adua-2', title: 'Regímenes Aduaneros', duration: '25 min', videoUrl: '' },
      { id: 'adua-3', title: 'Valor en Aduana', duration: '20 min', videoUrl: '' },
      { id: 'adua-4', title: 'Clasificación Arancelaria', duration: '22 min', videoUrl: '' },
      { id: 'adua-5', title: 'Despacho Aduanero', duration: '28 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula las aduanas en Bolivia?', options: ['Ley 1990', 'Ley 1178', 'Ley 2492', 'Ley 843'], correct: 0 },
      { q: '¿Qué es el DUI?', options: ['Documento Único de Importación', 'Documento de Usuario', 'Declaración de Impuestos', 'Ninguno'], correct: 0 },
      { q: '¿Cuál NO es un régimen aduanero?', options: ['Importación', 'Exportación', 'Tránsito', 'Turismo'], correct: 3 },
      { q: '¿Qué es el arancel aduanero?', options: ['Un impuesto', 'Tasa aplicable a mercancías', 'Una multa', 'Un subsidio'], correct: 1 },
      { q: '¿El IVA en importación es:', options: ['10%', '13%', '15%', '20%'], correct: 1 },
      { q: '¿Qué es la partida arancelaria?', options: ['Un código de clasificación', 'Un impuesto', 'Un documento', 'Una multa'], correct: 0 },
      { q: '¿Quién dirige la Aduana Nacional?', options: ['Ministerio de Economía', 'SAT', 'Contraloría', 'Banco Central'], correct: 0 },
      { q: '¿El despacho aduanero lo hace:', options: ['Cualquiera', 'Despachante de aduanas', 'Solo el importador', 'El banco'], correct: 1 },
      { q: '¿Qué es el canal verde?', options: ['Sin revisión documental', 'Sin revisión física', 'Revisión completa', 'Nada'], correct: 1 },
      { q: '¿El contrabando es:', options: ['Legal', 'Delito aduanero', 'Permitido', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'codigo-procesal-civil',
    title: 'Código Procesal Civil',
    category: 'Leyes y Normativa',
    law: 'Ley 439',
    image: 'assets/cursos/codigo-procesal-civil.png',
    description: 'Estudia el procedimiento civil boliviano: procesos ordinarios, ejecutivos y medidas cautelares.',
    instructor: 'Dr. Mario Alberto Ruiz',
    duration: '6 horas',
    level: 'Avanzado',
    objectives: [
      'Conocer las etapas del proceso civil',
      'Identificar los tipos de procesos',
      'Aplicar normas de competencia',
      'Gestionar medidas cautelares'
    ],
    lessons: [
      { id: 'proc-1', title: 'Principios del Proceso Civil', duration: '20 min', videoUrl: '' },
      { id: 'proc-2', title: 'Competencia y Jurisdicción', duration: '25 min', videoUrl: '' },
      { id: 'proc-3', title: 'Proceso Ordinario de Conocimiento', duration: '30 min', videoUrl: '' },
      { id: 'proc-4', title: 'Proceso Ejecutivo', duration: '22 min', videoUrl: '' },
      { id: 'proc-5', title: 'Medidas Cautelares', duration: '18 min', videoUrl: '' },
      { id: 'proc-6', title: 'Medios Impugnatorios', duration: '25 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es el Código Procesal Civil?', options: ['Ley 439', 'Ley 12760', 'Ley 1178', 'Ley 025'], correct: 0 },
      { q: '¿Cuál NO es una etapa del proceso?', options: ['Demanda', 'Contestación', 'Sentencia', 'Arresto'], correct: 3 },
      { q: '¿Qué es la competencia?', options: ['Jurisdicción', 'Medida de la jurisdicción', 'Una sentencia', 'Un recurso'], correct: 1 },
      { q: '¿El proceso ordinario inicia con:', options: ['Sentencia', 'Demanda', 'Contestación', 'Prueba'], correct: 1 },
      { q: '¿El plazo para contestar demanda es:', options: ['10 días', '15 días', '20 días', '30 días'], correct: 2 },
      { q: '¿Qué es una medida cautelar?', options: ['Una sentencia', 'Medida de aseguramiento', 'Un recurso', 'Una prueba'], correct: 1 },
      { q: '¿El embargo es:', options: ['Una sentencia', 'Medida cautelar real', 'Un recurso', 'Una demanda'], correct: 1 },
      { q: '¿Qué recurso procede contra sentencia?', options: ['Solo queja', 'Apelación', 'Casación', 'Ninguno'], correct: 1 },
      { q: '¿La cosa juzgada implica:', options: ['Repetir proceso', 'No se puede volver a juzgar', 'Nueva prueba', 'Nada'], correct: 1 },
      { q: '¿El proceso ejecutivo requiere:', options: ['Título ejecutivo', 'Solo demanda', 'Testigos', 'Prueba documental'], correct: 0 }
    ]
  },
  
  {
    id: 'codigo-civil',
    title: 'Código Civil Boliviano',
    category: 'Leyes y Normativa',
    law: 'Ley 12760',
    image: 'assets/cursos/codigo-civil.png',
    description: 'Domina las normas del derecho civil: personas, familia, bienes, sucesiones y obligaciones.',
    instructor: 'Dra. Elizabeth García',
    duration: '8 horas',
    level: 'Avanzado',
    objectives: [
      'Comprender la teoría de las obligaciones',
      'Conocer el derecho de familia',
      'Identificar los regímenes de bienes',
      'Aplicar normas sucesorias'
    ],
    lessons: [
      { id: 'civil-1', title: 'Personas y Capacidad', duration: '25 min', videoUrl: '' },
      { id: 'civil-2', title: 'Derecho de Familia', duration: '30 min', videoUrl: '' },
      { id: 'civil-3', title: 'Regímenes de Bienes', duration: '22 min', videoUrl: '' },
      { id: 'civil-4', title: 'Obligaciones y Contratos', duration: '28 min', videoUrl: '' },
      { id: 'civil-5', title: 'Derechos Reales', duration: '25 min', videoUrl: '' },
      { id: 'civil-6', title: 'Sucesiones', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es el Código Civil?', options: ['Ley 12760', 'Ley 439', 'Ley 1178', 'Ley 2027'], correct: 0 },
      { q: '¿La mayoría de edad en Bolivia es a los:', options: ['16 años', '18 años', '21 años', '25 años'], correct: 1 },
      { q: '¿El matrimonio puede ser:', options: ['Solo civil', 'Civil y religioso', 'Solo religioso', 'Ninguno'], correct: 1 },
      { q: '¿Qué es la sociedad conyugal?', options: ['Régimen de bienes', 'Una empresa', 'Un contrato', 'Una sociedad'], correct: 0 },
      { q: '¿La herencia se transmite por:', options: ['Solo testamento', 'Testamento o ley', 'Solo ley', 'Contrato'], correct: 1 },
      { q: '¿Qué es un contrato?', options: ['Acuerdo de voluntades', 'Una ley', 'Una sentencia', 'Un documento'], correct: 0 },
      { q: '¿La propiedad es un derecho:', options: ['Real', 'Personal', 'Creditorio', 'Ninguno'], correct: 0 },
      { q: '¿Los herederos forzosos son:', options: ['Solo hijos', 'Descendientes, ascendientes y cónyuge', 'Solo padres', 'Hermanos'], correct: 1 },
      { q: '¿Qué es la usucapión?', options: ['Compra', 'Adquisición por posesión', 'Herencia', 'Donación'], correct: 1 },
      { q: '¿El divorcio disuelve:', options: ['Solo la sociedad conyugal', 'El vínculo matrimonial', 'Nada', 'Solo bienes'], correct: 1 }
    ]
  },
  
  {
    id: 'medio-ambiente',
    title: 'Ley del Medio Ambiente',
    category: 'Leyes y Normativa',
    law: 'Ley 1333',
    image: 'assets/cursos/medio-ambiente.png',
    description: 'Aprende la normativa ambiental boliviana: licencias, evaluación de impacto y responsabilidad ambiental.',
    instructor: 'Ing. María Eugenia Morales',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer los principios ambientales',
      'Identificar instrumentos de gestión',
      'Comprender la evaluación de impacto',
      'Aplicar normas de responsabilidad'
    ],
    lessons: [
      { id: 'amb-1', title: 'Principios del Derecho Ambiental', duration: '18 min', videoUrl: '' },
      { id: 'amb-2', title: 'Licencia Ambiental', duration: '22 min', videoUrl: '' },
      { id: 'amb-3', title: 'Evaluación de Impacto Ambiental', duration: '25 min', videoUrl: '' },
      { id: 'amb-4', title: 'Responsabilidad Ambiental', duration: '20 min', videoUrl: '' },
      { id: 'amb-5', title: 'Áreas Protegidas', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula el medio ambiente?', options: ['Ley 1333', 'Ley 1178', 'Ley 2027', 'Ley 1700'], correct: 0 },
      { q: '¿Qué es la licencia ambiental?', options: ['Un permiso', 'Autorización para actividades', 'Un impuesto', 'Una multa'], correct: 1 },
      { q: '¿Qué es el EIA?', options: ['Estudio de Impacto Ambiental', 'Examen de Impacto', 'Evaluación Interna', 'Ninguno'], correct: 0 },
      { q: '¿Quién otorga la licencia ambiental?', options: ['Alcaldía', 'Autoridad ambiental competente', 'Ministerio', 'Gobernación'], correct: 1 },
      { q: '¿El que contamina paga es:', options: ['Un principio ambiental', 'Una multa', 'Un impuesto', 'Nada'], correct: 0 },
      { q: '¿Las áreas protegidas son:', options: ['Zonas de conservación', 'Zonas urbanas', 'Zonas industriales', 'Nada'], correct: 0 },
      { q: '¿Qué es el daño ambiental?', options: ['Alteración del ambiente', 'Una multa', 'Un impuesto', 'Nada'], correct: 0 },
      { q: '¿La responsabilidad ambiental es:', options: ['Subjetiva', 'Objetiva', 'Contractual', 'Ninguna'], correct: 1 },
      { q: '¿Qué es la auditoría ambiental?', options: ['Evaluación de cumplimiento', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿El derecho al ambiente es:', options: ['Un derecho humano', 'Un privilegio', 'Una obligación', 'Nada'], correct: 0 }
    ]
  },
  
  {
    id: 'ley-forestal',
    title: 'Ley Forestal',
    category: 'Leyes y Normativa',
    law: 'Ley 1700',
    image: 'assets/cursos/ley-forestal.png',
    description: 'Conoce la ley que regula el aprovechamiento sostenible de los recursos forestales en Bolivia.',
    instructor: 'Ing. Roberto Vaca',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Comprender el régimen forestal',
      'Identificar los tipos de contratos',
      'Conocer las áreas protegidas',
      'Aplicar normas de aprovechamiento'
    ],
    lessons: [
      { id: 'for-1', title: 'Principios de la Ley Forestal', duration: '15 min', videoUrl: '' },
      { id: 'for-2', title: 'Contratos de Concesión', duration: '20 min', videoUrl: '' },
      { id: 'for-3', title: 'Plan de Manejo Forestal', duration: '25 min', videoUrl: '' },
      { id: 'for-4', title: 'Transporte y Comercialización', duration: '18 min', videoUrl: '' },
      { id: 'for-5', title: 'Régimen Sancionatorio', duration: '22 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la Ley Forestal?', options: ['Ley 1700', 'Ley 1333', 'Ley 1178', 'Ley 2027'], correct: 0 },
      { q: '¿Quién administra los bosques?', options: ['ABT', 'SAT', 'SERNAP', 'Ministerio'], correct: 0 },
      { q: '¿Qué es un contrato de concesión?', options: ['Permiso de aprovechamiento', 'Una multa', 'Un impuesto', 'Nada'], correct: 0 },
      { q: '¿El plan de manejo es:', options: ['Opcional', 'Obligatorio', 'Solo para grandes', 'Nada'], correct: 1 },
      { q: '¿Qué es la GUÍA Forestal?', options: ['Documento de transporte', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿Las áreas protegidas pueden aprovecharse?', options: ['Sí, siempre', 'No, está prohibido', 'Solo madera', 'Depende'], correct: 1 },
      { q: '¿Qué es el aserradero?', options: ['Industria de transformación', 'Un bosque', 'Un árbol', 'Nada'], correct: 0 },
      { q: '¿La tala ilegal es:', options: ['Permitida', 'Delito forestal', 'Normal', 'Nada'], correct: 1 },
      { q: '¿Qué es el reforestación?', options: ['Plantar árboles', 'Cortar árboles', 'Quemar bosques', 'Nada'], correct: 0 },
      { q: '¿Los pueblos indígenas tienen derechos?', options: ['No', 'Sí, sobre sus territorios', 'Solo algunos', 'Ninguno'], correct: 1 }
    ]
  },
  
  {
    id: 'safci',
    title: 'Salud Familiar Comunitaria Intercultural',
    category: 'Leyes y Normativa',
    law: 'Ley 475',
    image: 'assets/cursos/safci.png',
    description: 'Estudia el modelo de salud familiar comunitaria intercultural del sistema nacional de salud.',
    instructor: 'Dra. Rosa Condori',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Conocer el modelo SAFCI',
      'Identificar los niveles de atención',
      'Comprender la participación comunitaria',
      'Aplicar normas de medicina tradicional'
    ],
    lessons: [
      { id: 'safci-1', title: 'Fundamentos del SAFCI', duration: '15 min', videoUrl: '' },
      { id: 'safci-2', title: 'Niveles de Atención', duration: '18 min', videoUrl: '' },
      { id: 'safci-3', title: 'Participación Comunitaria', duration: '20 min', videoUrl: '' },
      { id: 'safci-4', title: 'Medicina Tradicional', duration: '17 min', videoUrl: '' },
      { id: 'safci-5', title: 'Seguro Universal de Salud', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula el SAFCI?', options: ['Ley 475', 'Ley 924', 'Ley 065', 'Ley 1178'], correct: 0 },
      { q: '¿Qué significa SAFCI?', options: ['Salud Familiar', 'Salud Familiar Comunitaria Intercultural', 'Servicio de Salud', 'Sistema de Atención'], correct: 1 },
      { q: '¿Cuántos niveles de atención hay?', options: ['2', '3', '4', '5'], correct: 1 },
      { id: 'safci-3', title: 'El primer nivel es:', options: ['Hospitalario', 'Promoción y prevención', 'Especializado', 'Terciario'], correct: 1 },
      { q: '¿La participación comunitaria se da en:', options: ['SEDES', 'Comités de Salud', 'Hospitales', 'Clínicas'], correct: 1 },
      { q: '¿La medicina tradicional es:', options: ['Prohibida', 'Reconocida', 'Ignorada', 'Nada'], correct: 1 },
      { q: '¿El SUS es:', options: ['Seguro Universal de Salud', 'Solo para pobres', 'Solo para niños', 'Nada'], correct: 0 },
      { q: '¿Qué es el carné del SUS?', options: ['Documento de afiliación', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿La atención es:', options: ['Solo curativa', 'Integral', 'Solo preventiva', 'Nada'], correct: 1 },
      { q: '¿Los yatiris son:', options: ['Médicos', 'Sabios de medicina tradicional', 'Enfermeros', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'avelino-sinani',
    title: 'Ley Avelino Siñani - Elizardo Pérez',
    category: 'Leyes y Normativa',
    law: 'Ley 070',
    image: 'assets/cursos/avelino-sinani.png',
    description: 'Conoce la ley educativa que establece el modelo de educación sociocomunitaria productiva en Bolivia.',
    instructor: 'Lic. Pedro Huayta',
    duration: '4 horas',
    level: 'Básico',
    objectives: [
      'Comprender el modelo educativo',
      'Identificar los subsistemas',
      'Conocer la estructura curricular',
      'Aplicar normas de evaluación'
    ],
    lessons: [
      { id: 'asep-1', title: 'Fundamentos de la Ley 070', duration: '18 min', videoUrl: '' },
      { id: 'asep-2', title: 'Subsistema de Educación Regular', duration: '20 min', videoUrl: '' },
      { id: 'asep-3', title: 'Subsistema de Educación Alternativa', duration: '15 min', videoUrl: '' },
      { id: 'asep-4', title: 'Subsistema de Educación Superior', duration: '17 min', videoUrl: '' },
      { id: 'asep-5', title: 'Evaluación y Certificación', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la Avelino Siñani?', options: ['Ley 070', 'Ley 071', 'Ley 072', 'Ley 073'], correct: 0 },
      { q: '¿Cuántos subsistemas tiene?', options: ['2', '3', '4', '5'], correct: 1 },
      { q: '¿El nivel inicial es desde:', options: ['0 años', '3 años', '5 años', '6 años'], correct: 0 },
      { q: '¿La educación es:', options: ['Solo formal', 'Formal, alternativa y superior', 'Solo escolar', 'Nada'], correct: 1 },
      { q: '¿Qué es el PSP?', options: ['Proyecto Socioproductivo', 'Plan de Estudios', 'Programa Escolar', 'Nada'], correct: 0 },
      { q: '¿La educación es obligatoria hasta:', options: ['Primaria', 'Secundaria', 'Universidad', 'Nada'], correct: 1 },
      { q: '¿Qué es el currículo base?', options: ['Contenidos mínimos', 'Un libro', 'Una evaluación', 'Nada'], correct: 0 },
      { q: '¿La evaluación es:', options: ['Solo escrita', 'Integral', 'Solo oral', 'Nada'], correct: 1 },
      { q: '¿Los CEAs son:', options: ['Colegios', 'Centros de Educación Alternativa', 'Universidades', 'Nada'], correct: 1 },
      { q: '¿La educación superior incluye:', options: ['Solo universidades', 'Universidades e institutos', 'Solo institutos', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'violencia-mujer',
    title: 'Ley Integral para Garantizar a las Mujeres una Vida Libre de Violencia',
    category: 'Leyes y Normativa',
    law: 'Ley 348',
    image: 'assets/cursos/violencia-mujer.png',
    description: 'Estudia la normativa que protege a las mujeres contra toda forma de violencia en Bolivia.',
    instructor: 'Dra. Gabriela Mendoza',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Identificar tipos de violencia',
      'Conocer las medidas de protección',
      'Comprender el proceso penal',
      'Aplicar protocolos de actuación'
    ],
    lessons: [
      { id: 'vm-1', title: 'Concepto de Violencia contra la Mujer', duration: '20 min', videoUrl: '' },
      { id: 'vm-2', title: 'Tipos de Violencia', duration: '22 min', videoUrl: '' },
      { id: 'vm-3', title: 'Medidas de Protección', duration: '18 min', videoUrl: '' },
      { id: 'vm-4', title: 'Proceso Penal', duration: '25 min', videoUrl: '' },
      { id: 'vm-5', title: 'Instituciones Competentes', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la Ley 348?', options: ['Ley de Educación', 'Ley de Protección a la Mujer', 'Ley de Salud', 'Ley de Trabajo'], correct: 1 },
      { q: '¿Cuál NO es un tipo de violencia?', options: ['Física', 'Psicológica', 'Económica', 'Deportiva'], correct: 3 },
      { q: '¿El feminicidio es:', options: ['Homicidio simple', 'Asesinato por razón de género', 'Suicidio', 'Nada'], correct: 1 },
      { q: '¿Las medidas de protección son:', options: ['Opcionales', 'Obligatorias', 'Solo sugerencias', 'Nada'], correct: 1 },
      { q: '¿Quién emite medidas de protección?', options: ['Policía', 'Juez', 'Fiscal', 'Alcalde'], correct: 1 },
      { q: '¿La violencia económica es:', options: ['Control de recursos', 'Un regalo', 'Una herencia', 'Nada'], correct: 0 },
      { q: '¿Qué es la SLAPP?', options: ['Demanda estratégica', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿El acoso político es:', options: ['Permitido', 'Delito', 'Normal', 'Nada'], correct: 1 },
      { q: '¿La FELCV es:', options: ['Fuerza Especial de Lucha Contra la Violencia', 'Una escuela', 'Un hospital', 'Nada'], correct: 0 },
      { q: '¿Se puede conciliar en violencia?', options: ['Sí, siempre', 'No, está prohibido', 'Solo a veces', 'Depende'], correct: 1 }
    ]
  },
  
  {
    id: 'codigo-comercio',
    title: 'Código de Comercio',
    category: 'Leyes y Normativa',
    law: 'Ley 14379',
    image: 'assets/cursos/codigo-comercio.png',
    description: 'Domina las normas del derecho comercial: actos de comercio, sociedades y títulos valores.',
    instructor: 'Dr. Alberto Sánchez',
    duration: '6 horas',
    level: 'Avanzado',
    objectives: [
      'Identificar actos de comercio',
      'Conocer tipos societarios',
      'Comprender títulos valores',
      'Aplicar normas de quiebras'
    ],
    lessons: [
      { id: 'com-1', title: 'Actos de Comercio', duration: '20 min', videoUrl: '' },
      { id: 'com-2', title: 'Comerciantes', duration: '18 min', videoUrl: '' },
      { id: 'com-3', title: 'Sociedades Mercantiles', duration: '30 min', videoUrl: '' },
      { id: 'com-4', title: 'Títulos Valores', duration: '25 min', videoUrl: '' },
      { id: 'com-5', title: 'Quiebras y Concurso', duration: '22 min', videoUrl: '' },
      { id: 'com-6', title: 'Contratos Mercantiles', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es el Código de Comercio?', options: ['Ley 14379', 'Ley 12760', 'Ley 1178', 'Ley 2027'], correct: 0 },
      { q: '¿Qué es un acto de comercio?', options: ['Cualquier acto', 'Acto de especulación comercial', 'Un contrato', 'Nada'], correct: 1 },
      { q: '¿Cuál NO es una sociedad?', options: ['SRL', 'SA', 'Comunidad', 'SNC'], correct: 2 },
      { q: '¿La SRL requiere mínimo:', options: ['1 socio', '2 socios', '3 socios', '5 socios'], correct: 1 },
      { q: '¿Qué es un cheque?', options: ['Título valor', 'Un contrato', 'Una factura', 'Nada'], correct: 0 },
      { q: '¿La SA requiere capital mínimo de:', options: ['1000 Bs', '25000 Bs', '50000 Bs', '100000 Bs'], correct: 2 },
      { q: '¿Qué es la quiebra?', options: ['Estado de insolvencia', 'Una multa', 'Un contrato', 'Nada'], correct: 0 },
      { q: '¿El endoso es:', options: ['Transferencia de título', 'Un contrato', 'Una firma', 'Nada'], correct: 0 },
      { q: '¿Qué es el registro de comercio?', options: ['Registro público', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿Los libros de comercio son:', options: ['Opcionales', 'Obligatorios', 'Solo sugerencias', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'ley-trabajo',
    title: 'Ley General del Trabajo',
    category: 'Leyes y Normativa',
    law: 'LGT',
    image: 'assets/cursos/ley-trabajo.png',
    description: 'Conoce los derechos laborales: contrato, salario, jornada, vacaciones y despido.',
    instructor: 'Dr. Luis Fernando Paz',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Identificar tipos de contrato',
      'Calcular beneficios sociales',
      'Conocer derechos del trabajador',
      'Aplicar normas de despido'
    ],
    lessons: [
      { id: 'lgt-1', title: 'Contrato de Trabajo', duration: '20 min', videoUrl: '' },
      { id: 'lgt-2', title: 'Salario y Jornada', duration: '22 min', videoUrl: '' },
      { id: 'lgt-3', title: 'Vacaciones y Aguinaldo', duration: '18 min', videoUrl: '' },
      { id: 'lgt-4', title: 'Despido y Indemnización', duration: '25 min', videoUrl: '' },
      { id: 'lgt-5', title: 'Sindicatos y Huelga', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley regula el trabajo?', options: ['LGT', 'Ley 1178', 'Ley 2027', 'Ley 065'], correct: 0 },
      { q: '¿La jornada laboral es:', options: ['6 horas', '8 horas', '10 horas', '12 horas'], correct: 1 },
      { q: '¿El salario mínimo es:', options: ['Fijo', 'Actualizable', 'Nunca cambia', 'Nada'], correct: 1 },
      { q: '¿Las vacaciones son:', options: ['10 días', '15 días hábiles', '30 días', 'Nada'], correct: 1 },
      { q: '¿El aguinaldo es:', options: ['1 sueldo', '2 sueldos', '3 sueldos', 'Nada'], correct: 0 },
      { q: '¿El despido injustificado genera:', options: ['Nada', 'Indemnización', 'Solo carta', 'Nada'], correct: 1 },
      { q: '¿Qué es el preaviso?', options: ['Notificación previa', 'Una multa', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿El período de prueba es:', options: ['1 mes', '3 meses', '6 meses', '1 año'], correct: 1 },
      { q: '¿Las horas extras pagan:', options: ['Igual', '50% más', '100% más', 'Nada'], correct: 1 },
      { q: '¿El trabajador puede renunciar?', options: ['No', 'Sí, con carta', 'Solo con permiso', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'sigma-sigep',
    title: 'SIGMA y SIGEP',
    category: 'Leyes y Normativa',
    law: 'DS varios',
    image: 'assets/cursos/sigma-sigep.png',
    description: 'Aprende a utilizar los sistemas de gestión administrativa y financiera del Estado.',
    instructor: 'Lic. Patricia Rojas',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Navegar en SIGMA',
      'Gestionar procesos en SIGEP',
      'Generar reportes',
      'Aplicar normas de uso'
    ],
    lessons: [
      { id: 'sis-1', title: 'Introducción a SIGMA', duration: '15 min', videoUrl: '' },
      { id: 'sis-2', title: 'Módulos de SIGMA', duration: '20 min', videoUrl: '' },
      { id: 'sis-3', title: 'Introducción a SIGEP', duration: '18 min', videoUrl: '' },
      { id: 'sis-4', title: 'Procesos en SIGEP', duration: '22 min', videoUrl: '' },
      { id: 'sis-5', title: 'Reportes y Consultas', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es SIGMA?', options: ['Sistema de Gestión', 'Sistema Integrado de Gestión', 'Un programa', 'Nada'], correct: 1 },
      { q: '¿Qué es SIGEP?', options: ['Sistema de Gestión Pública', 'Sistema Integrado de Gestión Financiera', 'Un programa', 'Nada'], correct: 1 },
      { q: '¿SIGMA gestiona:', options: ['Solo personal', 'Personal y bienes', 'Solo bienes', 'Nada'], correct: 1 },
      { q: '¿SIGEP gestiona:', options: ['Solo presupuesto', 'Presupuesto y tesorería', 'Solo contabilidad', 'Nada'], correct: 1 },
      { q: '¿El usuario de SIGMA es:', options: ['Personal', 'Nominal', 'Genérico', 'Nada'], correct: 1 },
      { q: '¿La certificación presupuestaria es:', options: ['Opcional', 'Obligatoria', 'Solo sugerencia', 'Nada'], correct: 1 },
      { q: '¿Qué es el devengado?', options: ['Un pago', 'Reconocimiento de deuda', 'Un cobro', 'Nada'], correct: 1 },
      { q: '¿El giro es:', options: ['Orden de pago', 'Un cobro', 'Una multa', 'Nada'], correct: 0 },
      { q: '¿Los reportes son:', options: ['Opcionales', 'Disponibles', 'Prohibidos', 'Nada'], correct: 1 },
      { q: '¿Los sistemas son:', options: ['Privados', 'Públicos', 'Mixtos', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'organo-judicial',
    title: 'Ley del Órgano Judicial',
    category: 'Leyes y Normativa',
    law: 'Ley 025',
    image: 'assets/cursos/organo-judicial.png',
    description: 'Estudia la estructura y competencias del Órgano Judicial boliviano.',
    instructor: 'Dr. Víctor Hugo Cárdenas',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer la estructura judicial',
      'Identificar competencias',
      'Comprender la carrera judicial',
      'Aplicar normas procesales'
    ],
    lessons: [
      { id: 'oj-1', title: 'Estructura del Órgano Judicial', duration: '18 min', videoUrl: '' },
      { id: 'oj-2', title: 'Tribunal Supremo de Justicia', duration: '20 min', videoUrl: '' },
      { id: 'oj-3', title: 'Tribunal Constitucional', duration: '17 min', videoUrl: '' },
      { id: 'oj-4', title: 'Carrera Judicial', duration: '15 min', videoUrl: '' },
      { id: 'oj-5', title: 'Jurisdicciones', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la del Órgano Judicial?', options: ['Ley 025', 'Ley 026', 'Ley 027', 'Ley 028'], correct: 0 },
      { q: '¿Cuál es la máxima instancia judicial?', options: ['TSJ', 'TCP', 'TAE', 'Consejo'], correct: 0 },
      { q: '¿El TCP es:', options: ['Tribunal de Justicia', 'Tribunal Constitucional', 'Tribunal Penal', 'Nada'], correct: 1 },
      { q: '¿Los vocales son:', options: ['Jueces', 'Miembros de tribunales', 'Fiscales', 'Nada'], correct: 1 },
      { q: '¿La carrera judicial es:', options: ['Por concurso', 'Por elección', 'Por sorteo', 'Nada'], correct: 0 },
      { q: '¿Qué es la jurisdicción?', options: ['Territorio', 'Competencia', 'Instancia', 'Nada'], correct: 1 },
      { q: '¿Los jueces son:', options: ['Independientes', 'Dependientes', 'Subordinados', 'Nada'], correct: 0 },
      { q: '¿El Consejo de la Magistratura:', options: ['Administra', 'Juzga', 'Fiscaliza', 'Nada'], correct: 0 },
      { q: '¿La justicia indígena es:', options: ['Prohibida', 'Reconocida', 'Ignorada', 'Nada'], correct: 1 },
      { q: '¿El debido proceso es:', options: ['Opcional', 'Derecho fundamental', 'Sugerencia', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'admi-personal',
    title: 'Administración de Personal',
    category: 'Leyes y Normativa',
    law: 'DS 26115',
    image: 'assets/cursos/admi-personal.png',
    description: 'Gestiona el personal público: contrataciones, licencias, evaluaciones y desvinculaciones.',
    instructor: 'Lic. Sonia Mamani',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer el régimen administrativo',
      'Gestionar licencias',
      'Aplicar evaluaciones',
      'Procesar desvinculaciones'
    ],
    lessons: [
      { id: 'adp-1', title: 'Régimen Administrativo', duration: '15 min', videoUrl: '' },
      { id: 'adp-2', title: 'Contrataciones de Personal', duration: '20 min', videoUrl: '' },
      { id: 'adp-3', title: 'Licencias y Permisos', duration: '18 min', videoUrl: '' },
      { id: 'adp-4', title: 'Evaluación de Desempeño', duration: '22 min', videoUrl: '' },
      { id: 'adp-5', title: 'Desvinculaciones', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué norma regula administración de personal?', options: ['DS 26115', 'Ley 1178', 'Ley 2027', 'Ley 065'], correct: 0 },
      { q: '¿El ítem es:', options: ['Cargo presupuestado', 'Un sueldo', 'Un permiso', 'Nada'], correct: 0 },
      { q: '¿La licencia sin goce es:', options: ['Con sueldo', 'Sin sueldo', 'Parcial', 'Nada'], correct: 1 },
      { q: '¿La evaluación es:', options: ['Opcional', 'Obligatoria', 'Solo sugerencia', 'Nada'], correct: 1 },
      { q: '¿El contrato es:', options: ['Verbal', 'Escrito', 'Email', 'Nada'], correct: 1 },
      { q: '¿La renuncia es:', options: ['Voluntaria', 'Forzada', 'Automática', 'Nada'], correct: 0 },
      { q: '¿El despido es:', options: ['Voluntario', 'Involuntario', 'Automático', 'Nada'], correct: 1 },
      { q: '¿La jubilación es:', options: ['Por edad', 'Por voluntad', 'Por despido', 'Nada'], correct: 0 },
      { q: '¿El haber básico es:', options: ['Fijo', 'Variable', 'Nulo', 'Nada'], correct: 0 },
      { q: '¿Los beneficios son:', options: ['Opcionales', 'Legales', 'Prohibidos', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'servicios-salud',
    title: 'Servicios de Salud',
    category: 'Leyes y Normativa',
    law: 'DS 29601',
    image: 'assets/cursos/servicios-salud.png',
    description: 'Normativa de prestación de servicios de salud en Bolivia: habilitación, regulación y control.',
    instructor: 'Dra. Elizabeth Torres',
    duration: '3 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer requisitos de habilitación',
      'Identificar niveles de complejidad',
      'Aplicar normas de calidad',
      'Gestionar licencias sanitarias'
    ],
    lessons: [
      { id: 'ss-1', title: 'Habilitación de Establecimientos', duration: '15 min', videoUrl: '' },
      { id: 'ss-2', title: 'Niveles de Complejidad', duration: '18 min', videoUrl: '' },
      { id: 'ss-3', title: 'Normas de Calidad', duration: '20 min', videoUrl: '' },
      { id: 'ss-4', title: 'Licencia Sanitaria', duration: '17 min', videoUrl: '' },
      { id: 'ss-5', title: 'Control y Fiscalización', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué norma regula servicios de salud?', options: ['DS 29601', 'Ley 475', 'Ley 924', 'Ley 1178'], correct: 0 },
      { q: '¿La licencia sanitaria es:', options: ['Opcional', 'Obligatoria', 'Solo sugerencia', 'Nada'], correct: 1 },
      { q: '¿Cuántos niveles de complejidad hay?', options: ['2', '3', '4', '5'], correct: 1 },
      { q: '¿El primer nivel es:', options: ['Hospital', 'Centro de salud', 'Clínica', 'Nada'], correct: 1 },
      { q: '¿La habilitación es:', options: ['Permanente', 'Temporal', 'Nula', 'Nada'], correct: 0 },
      { q: '¿Quién fiscaliza?', options: ['SEDES', 'Hospitales', 'Clínicas', 'Nada'], correct: 0 },
      { q: '¿Las normas de calidad son:', options: ['Opcionales', 'Obligatorias', 'Sugerencias', 'Nada'], correct: 1 },
      { q: '¿El personal debe tener:', options: ['Título', 'Licencia', 'Ambos', 'Nada'], correct: 2 },
      { q: '¿La infraestructura requiere:', options: ['Aprobación', 'Nada', 'Solo espacio', 'Nada'], correct: 0 },
      { q: '¿Los residuos son:', options: ['Comunes', 'Especiales', 'Peligrosos', 'Todos'], correct: 3 }
    ]
  },
  
  {
    id: 'reforma-agraria',
    title: 'Ley de Reconducción Comunitaria',
    category: 'Leyes y Normativa',
    law: 'Ley 3545',
    image: 'assets/cursos/reforma-agraria.png',
    description: 'Estudia la ley de reforma agraria: dotación, titulación y saneamiento de tierras.',
    instructor: 'Ing. Marcelo Cruz',
    duration: '4 horas',
    level: 'Intermedio',
    objectives: [
      'Conocer el régimen de tierras',
      'Identificar tipos de propiedad',
      'Comprender el saneamiento',
      'Aplicar normas de dotación'
    ],
    lessons: [
      { id: 'ra-1', title: 'Principios de la Ley 3545', duration: '18 min', videoUrl: '' },
      { id: 'ra-2', title: 'Tipos de Propiedad', duration: '20 min', videoUrl: '' },
      { id: 'ra-3', title: 'Saneamiento de Tierras', duration: '22 min', videoUrl: '' },
      { id: 'ra-4', title: 'Dotación y Titulación', duration: '20 min', videoUrl: '' },
      { id: 'ra-5', title: 'Función Económico Social', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué ley es la de reforma agraria?', options: ['Ley 3545', 'Ley 3546', 'Ley 3547', 'Ley 3548'], correct: 0 },
      { q: '¿Qué es el saneamiento?', options: ['Verificación de propiedad', 'Limpieza', 'Medida', 'Nada'], correct: 0 },
      { q: '¿La FES es:', options: ['Función Económico Social', 'Una escuela', 'Una empresa', 'Nada'], correct: 0 },
      { q: '¿El latifundio es:', options: ['Permitido', 'Prohibido', 'Normal', 'Nada'], correct: 1 },
      { q: '¿La propiedad comunitaria es:', options: ['Reconocida', 'Prohibida', 'Ignorada', 'Nada'], correct: 0 },
      { q: '¿El INRA es:', options: ['Instituto de Reforma Agraria', 'Una escuela', 'Una empresa', 'Nada'], correct: 0 },
      { q: '¿La dotación es:', options: ['Entrega de tierras', 'Venta', 'Alquiler', 'Nada'], correct: 0 },
      { q: '¿El título es:', options: ['Documento de propiedad', 'Un permiso', 'Una multa', 'Nada'], correct: 0 },
      { q: '¿Las TCO son:', options: ['Tierras Comunitarias de Origen', 'Empresas', 'Escuelas', 'Nada'], correct: 0 },
      { q: '¿El revertimiento es:', options: ['Pérdida de propiedad', 'Ganancia', 'Venta', 'Nada'], correct: 0 }
    ]
  },
  
  // ═══════════════════════════════════════════════
  // IDIOMAS (4 cursos)
  // ═══════════════════════════════════════════════
  
  {
    id: 'aymara-basico',
    title: 'Aymara Básico',
    category: 'Idiomas',
    law: '',
    price: 80,
    image: 'assets/cursos/aymara-basico.png',
    description: 'Aprende los fundamentos del idioma aymara: saludos, números, familia y conversación básica.',
    instructor: 'Lic. Elena Quispe',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Saludar y despedirse en aymara',
      'Contar del 1 al 100',
      'Identificar miembros de la familia',
      'Mantener conversaciones simples'
    ],
    lessons: [
      { id: 'aym-1', title: 'Saludos y Presentaciones', duration: '15 min', videoUrl: '' },
      { id: 'aym-2', title: 'Los Números', duration: '18 min', videoUrl: '' },
      { id: 'aym-3', title: 'La Familia', duration: '20 min', videoUrl: '' },
      { id: 'aym-4', title: 'Colores y Días', duration: '17 min', videoUrl: '' },
      { id: 'aym-5', title: 'Conversación Básica', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Cómo se dice "hola" en aymara?', options: ['Kamisaki', 'Tayka', 'Wawa', 'Utjawi'], correct: 0 },
      { q: '¿Qué significa "tayka"?', options: ['Padre', 'Madre', 'Hijo', 'Hermano'], correct: 1 },
      { q: '¿Cómo se dice "uno"?', options: ['Maya', 'Paya', 'Kimsa', 'Pusi'], correct: 0 },
      { q: '¿Qué significa "wawa"?', options: ['Casa', 'Bebé', 'Sol', 'Luna'], correct: 1 },
      { q: '¿Cómo se dice "gracias"?', options: ['Juk\'a', 'Sulpayki', 'Kamisaki', 'Waliki'], correct: 1 },
      { q: '¿Qué significa "uta"?', options: ['Casa', 'Tierra', 'Agua', 'Fuego'], correct: 0 },
      { q: '¿Cómo se dice "agua"?', options: ['Uma', 'Nina', 'Q\'illu', 'Ch\'uxña'], correct: 0 },
      { q: '¿Qué significa "wali"?', options: ['Mal', 'Bien', 'Grande', 'Pequeño'], correct: 1 },
      { q: '¿Cómo se dice "sol"?', options: ['Phaxsi', 'Inti', 'Nina', 'Uma'], correct: 1 },
      { q: '¿Qué significa "suli"?', options: ['Blanco', 'Negro', 'Rojo', 'Verde'], correct: 0 }
    ]
  },
  
  {
    id: 'quechua-basico',
    title: 'Quechua Básico',
    category: 'Idiomas',
    law: '',
    image: 'assets/cursos/quechua-basico.png',
    description: 'Iníciate en el idioma quechua: pronunciación, vocabulario básico y expresiones cotidianas.',
    instructor: 'Lic. Roberto Choque',
    duration: '3 horas',
    level: 'Básico',
    objectives: [
      'Pronunciar correctamente',
      'Saludar y presentarse',
      'Usar números quechuas',
      'Expresarse en situaciones cotidianas'
    ],
    lessons: [
      { id: 'que-1', title: 'Pronunciación y Alfabeto', duration: '15 min', videoUrl: '' },
      { id: 'que-2', title: 'Saludos y Despedidas', duration: '18 min', videoUrl: '' },
      { id: 'que-3', title: 'Números y Colores', duration: '20 min', videoUrl: '' },
      { id: 'que-4', title: 'La Familia y Casa', duration: '17 min', videoUrl: '' },
      { id: 'que-5', title: 'Diálogos Cotidianos', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Cómo se dice "hola" en quechua?', options: ['Allinllachu', 'Tayta', 'Mama', 'Wasi'], correct: 0 },
      { q: '¿Qué significa "allin"?', options: ['Mal', 'Bien', 'Grande', 'Pequeño'], correct: 1 },
      { q: '¿Cómo se dice "uno"?', options: ['Huk', 'Iskay', 'Kimsa', 'Tawa'], correct: 0 },
      { q: '¿Qué significa "wasi"?', options: ['Casa', 'Tierra', 'Agua', 'Fuego'], correct: 0 },
      { q: '¿Cómo se dice "gracias"?', options: ['Sulpayki', 'Allinllachu', 'Tayta', 'Mama'], correct: 0 },
      { q: '¿Qué significa "mama"?', options: ['Padre', 'Madre', 'Hijo', 'Hermana'], correct: 1 },
      { q: '¿Cómo se dice "agua"?', options: ['Yaku', 'Nina', 'Inti', 'Quilla'], correct: 0 },
      { q: '¿Qué significa "inti"?', options: ['Luna', 'Sol', 'Estrella', 'Cielo'], correct: 1 },
      { q: '¿Cómo se dice "dos"?', options: ['Huk', 'Iskay', 'Kimsa', 'Tawa'], correct: 1 },
      { q: '¿Qué significa "q\'illu"?', options: ['Rojo', 'Amarillo', 'Verde', 'Azul'], correct: 1 }
    ]
  },
  
  {
    id: 'ingles-basico',
    title: 'Inglés Básico',
    category: 'Idiomas',
    law: '',
    image: 'assets/cursos/ingles-basico.png',
    description: 'Aprende inglés desde cero: gramática básica, vocabulario esencial y conversación fundamental.',
    instructor: 'Lic. Jennifer Smith',
    duration: '5 horas',
    level: 'Básico',
    objectives: [
      'Usar el verbo "to be"',
      'Formar oraciones simples',
      'Vocabulario de uso diario',
      'Mantener conversaciones básicas'
    ],
    lessons: [
      { id: 'ing-1', title: 'Verbo To Be', duration: '20 min', videoUrl: '' },
      { id: 'ing-2', title: 'Pronombres Personales', duration: '15 min', videoUrl: '' },
      { id: 'ing-3', title: 'Presente Simple', duration: '25 min', videoUrl: '' },
      { id: 'ing-4', title: 'Vocabulario Básico', duration: '20 min', videoUrl: '' },
      { id: 'ing-5', title: 'Conversación Diaria', duration: '25 min', videoUrl: '' },
      { id: 'ing-6', title: 'Pasado Simple', duration: '25 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Cuál es la forma correcta del verbo "to be" para "I"?', options: ['is', 'am', 'are', 'be'], correct: 1 },
      { q: '¿Cómo se dice "yo soy" en inglés?', options: ['I is', 'I am', 'I are', 'I be'], correct: 1 },
      { q: '¿Qué significa "hello"?', options: ['Adiós', 'Hola', 'Gracias', 'Por favor'], correct: 1 },
      { q: '¿Cómo se dice "gracias"?', options: ['Please', 'Sorry', 'Thank you', 'Excuse me'], correct: 2 },
      { q: '¿Qué es un "noun"?', options: ['Verbo', 'Adjetivo', 'Sustantivo', 'Adverbio'], correct: 2 },
      { q: '¿Cómo se dice "casa"?', options: ['Car', 'House', 'Tree', 'Road'], correct: 1 },
      { q: '¿Qué significa "good morning"?', options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hasta luego'], correct: 1 },
      { q: '¿Cómo se dice "agua"?', options: ['Fire', 'Earth', 'Water', 'Air'], correct: 2 },
      { q: '¿Qué significa "book"?', options: ['Lápiz', 'Libro', 'Mesa', 'Silla'], correct: 1 },
      { q: '¿Cómo se dice "yo tengo"?', options: ['I has', 'I have', 'I am', 'I do'], correct: 1 }
    ]
  },
  
  {
    id: 'lenguaje-senas',
    title: 'Lenguaje de Señas Boliviano',
    category: 'Idiomas',
    law: '',
    image: 'assets/cursos/lenguaje-senas.png',
    description: 'Aprende la lengua de señas boliviana para comunicarte con la comunidad sorda.',
    instructor: 'Lic. María Eugenia López',
    duration: '4 horas',
    level: 'Básico',
    objectives: [
      'Conocer el alfabeto dactilológico',
      'Saludar en LSB',
      'Expresar necesidades básicas',
      'Comunicarse en situaciones cotidianas'
    ],
    lessons: [
      { id: 'lsb-1', title: 'Alfabeto Dactilológico', duration: '20 min', videoUrl: '' },
      { id: 'lsb-2', title: 'Saludos y Presentaciones', duration: '18 min', videoUrl: '' },
      { id: 'lsb-3', title: 'Números y Colores', duration: '20 min', videoUrl: '' },
      { id: 'lsb-4', title: 'Familia y Emociones', duration: '22 min', videoUrl: '' },
      { id: 'lsb-5', title: 'Conversación Básica', duration: '25 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es la LSB?', options: ['Lengua de Señas Boliviana', 'Lenguaje Simple Básico', 'Lectura Señalada', 'Nada'], correct: 0 },
      { q: '¿El alfabeto dactilológico usa:', options: ['Las manos', 'La voz', 'Los pies', 'Nada'], correct: 0 },
      { q: '¿Cómo se saluda en LSB?', options: ['Con la voz', 'Moviendo la mano', 'Gritando', 'Nada'], correct: 1 },
      { q: '¿La expresión facial es:', options: ['Importante', 'Irrelevante', 'Prohibida', 'Nada'], correct: 0 },
      { q: '¿Los números se señalan con:', options: ['Una mano', 'Dos manos', 'Los pies', 'Nada'], correct: 0 },
      { q: '¿Qué es la comunicación total?', options: ['Señas + voz + expresión', 'Solo señas', 'Solo voz', 'Nada'], correct: 0 },
      { q: '¿La comunidad sorda usa:', options: ['LSB', 'Español', 'Inglés', 'Nada'], correct: 0 },
      { q: '¿El intérprete traduce:', options: ['Idiomas', 'Señas-voz', 'Colores', 'Nada'], correct: 1 },
      { q: '¿Las señas son:', options: ['Universales', 'Específicas de cada país', 'Iguales', 'Nada'], correct: 1 },
      { q: '¿Se puede aprender LSB online?', options: ['Sí', 'No', 'Nunca', 'Nada'], correct: 0 }
    ]
  },
  
  // ═══════════════════════════════════════════════
  // TECNOLOGÍA (4 cursos)
  // ═══════════════════════════════════════════════
  
  {
    id: 'ofimatica',
    title: 'Ofimática Básica',
    category: 'Tecnología',
    law: '',
    price: 80,
    image: 'assets/cursos/ofimatica.png',
    description: 'Domina las herramientas ofimáticas esenciales: Word, Excel y PowerPoint para el trabajo de oficina.',
    instructor: 'Ing. Carlos Méndez',
    duration: '6 horas',
    level: 'Básico',
    objectives: [
      'Crear documentos en Word',
      'Usar fórmulas en Excel',
      'Diseñar presentaciones',
      'Gestionar archivos digitalmente'
    ],
    lessons: [
      { id: 'ofi-1', title: 'Introducción a Windows', duration: '15 min', videoUrl: '' },
      { id: 'ofi-2', title: 'Word: Documentos', duration: '25 min', videoUrl: '' },
      { id: 'ofi-3', title: 'Excel: Hojas de Cálculo', duration: '30 min', videoUrl: '' },
      { id: 'ofi-4', title: 'PowerPoint: Presentaciones', duration: '25 min', videoUrl: '' },
      { id: 'ofi-5', title: 'Gestión de Archivos', duration: '15 min', videoUrl: '' },
      { id: 'ofi-6', title: 'Correo Electrónico', duration: '20 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es Word?', options: ['Hoja de cálculo', 'Procesador de texto', 'Presentaciones', 'Nada'], correct: 1 },
      { q: '¿Excel sirve para:', options: ['Texto', 'Cálculos', 'Dibujo', 'Nada'], correct: 1 },
      { q: '¿PowerPoint es para:', options: ['Texto', 'Cálculos', 'Presentaciones', 'Nada'], correct: 2 },
      { q: '¿Una celda en Excel es:', options: ['Fila', 'Columna', 'Intersección', 'Nada'], correct: 2 },
      { q: '¿Las fórmulas en Excel inician con:', options: ['=', '+', '-', '#'], correct: 0 },
      { q: '¿Qué es un archivo?', options: ['Documento digital', 'Carpeta', 'Programa', 'Nada'], correct: 0 },
      { q: '¿Ctrl+G sirve para:', options: ['Copiar', 'Pegar', 'Guardar', 'Borrar'], correct: 2 },
      { q: '¿El correo electrónico usa:', options: ['@', '#', '$', '%'], correct: 0 },
      { q: '¿Qué es adjuntar?', options: ['Enviar archivo', 'Borrar', 'Copiar', 'Nada'], correct: 0 },
      { q: '¿Una carpeta sirve para:', options: ['Organizar', 'Borrar', 'Imprimir', 'Nada'], correct: 0 }
    ]
  },
  
  {
    id: 'aulas-virtuales',
    title: 'Aulas Virtuales',
    category: 'Tecnología',
    law: '',
    image: 'assets/cursos/aulas-virtuales.png',
    description: 'Aprende a utilizar plataformas de educación virtual: Moodle, Google Classroom y herramientas digitales.',
    instructor: 'Lic. Andrea Paz',
    duration: '4 horas',
    level: 'Básico',
    objectives: [
      'Navegar en Moodle',
      'Usar Google Classroom',
      'Participar en foros',
      'Entregar tareas digitales'
    ],
    lessons: [
      { id: 'av-1', title: 'Introducción a Educación Virtual', duration: '15 min', videoUrl: '' },
      { id: 'av-2', title: 'Plataforma Moodle', duration: '20 min', videoUrl: '' },
      { id: 'av-3', title: 'Google Classroom', duration: '20 min', videoUrl: '' },
      { id: 'av-4', title: 'Foros y Chats', duration: '15 min', videoUrl: '' },
      { id: 'av-5', title: 'Entrega de Tareas', duration: '15 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es un aula virtual?', options: ['Salón físico', 'Plataforma digital', 'Video', 'Nada'], correct: 1 },
      { q: 'Moodle es:', options: ['Juego', 'Plataforma educativa', 'Red social', 'Nada'], correct: 1 },
      { q: 'Google Classroom es:', options: ['Juego', 'Aula virtual', 'Correo', 'Nada'], correct: 1 },
      { q: 'Un foro es:', options: ['Chat', 'Espacio de debate', 'Video', 'Nada'], correct: 1 },
      { q: '¿Para entregar tareas se usa:', options: ['Email', 'Plataforma', 'Papel', 'Nada'], correct: 1 },
      { q: '¿El usuario es:', options: ['Público', 'Personal', 'Compartido', 'Nada'], correct: 1 },
      { q: '¿La contraseña debe ser:', options: ['Simple', 'Segura', 'Corta', 'Nada'], correct: 1 },
      { q: '¿Un PDF es:', options: ['Imagen', 'Documento', 'Video', 'Nada'], correct: 1 },
      { q: '¿Subir un archivo es:', options: ['Bajar', 'Cargar', 'Borrar', 'Nada'], correct: 1 },
      { q: '¿Descargar es:', options: ['Subir', 'Bajar', 'Borrar', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    category: 'Tecnología',
    law: '',
    image: 'assets/cursos/marketing-digital.png',
    description: 'Domina las estrategias de marketing en entornos digitales: redes sociales, SEO y publicidad online.',
    instructor: 'Lic. Laura Vega',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Crear estrategias digitales',
      'Gestionar redes sociales',
      'Optimizar para buscadores',
      'Crear campañas publicitarias'
    ],
    lessons: [
      { id: 'md-1', title: 'Fundamentos de Marketing Digital', duration: '20 min', videoUrl: '' },
      { id: 'md-2', title: 'Redes Sociales', duration: '25 min', videoUrl: '' },
      { id: 'md-3', title: 'SEO y Posicionamiento', duration: '22 min', videoUrl: '' },
      { id: 'md-4', title: 'Publicidad Online', duration: '25 min', videoUrl: '' },
      { id: 'md-5', title: 'Email Marketing', duration: '18 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es el marketing digital?', options: ['Venta física', 'Promoción online', 'Publicidad TV', 'Nada'], correct: 1 },
      { q: 'SEO significa:', options: ['Search Engine Optimization', 'Social Engagement', 'Site Exchange', 'Nada'], correct: 0 },
      { q: '¿Facebook es:', options: ['Red social', 'Buscador', 'Correo', 'Nada'], correct: 0 },
      { q: '¿Instagram es de:', options: ['Google', 'Meta', 'Twitter', 'Nada'], correct: 1 },
      { q: '¿El engagement es:', options: ['Compromiso', 'Venta', 'Compra', 'Nada'], correct: 0 },
      { q: '¿Un post es:', options: ['Publicación', 'Like', 'Share', 'Nada'], correct: 0 },
      { q: '¿El hashtag sirve para:', options: ['Etiquetar', 'Borrar', 'Ocultar', 'Nada'], correct: 0 },
      { q: '¿Google Ads es:', options: ['Gratuito', 'De pago', 'Libre', 'Nada'], correct: 1 },
      { q: '¿El ROI es:', options: ['Retorno de inversión', 'Tasa de interés', 'Impuesto', 'Nada'], correct: 0 },
      { q: '¿Un influencer es:', options: ['Vendedor', 'Persona con seguidores', 'Comprador', 'Nada'], correct: 1 }
    ]
  },
  
  {
    id: 'politicas-publicas',
    title: 'Gestión de Políticas Públicas',
    category: 'Tecnología',
    law: '',
    image: 'assets/cursos/politicas-publicas.png',
    description: 'Aprende a diseñar, implementar y evaluar políticas públicas efectivas para el desarrollo.',
    instructor: 'Dr. Fernando García',
    duration: '5 horas',
    level: 'Intermedio',
    objectives: [
      'Diseñar políticas públicas',
      'Implementar programas',
      'Evaluar impactos',
      'Gestionar proyectos públicos'
    ],
    lessons: [
      { id: 'pp-1', title: 'Conceptos de Políticas Públicas', duration: '20 min', videoUrl: '' },
      { id: 'pp-2', title: 'Ciclo de las Políticas', duration: '25 min', videoUrl: '' },
      { id: 'pp-3', title: 'Diseño de Programas', duration: '22 min', videoUrl: '' },
      { id: 'pp-4', title: 'Implementación', duration: '20 min', videoUrl: '' },
      { id: 'pp-5', title: 'Evaluación de Impacto', duration: '23 min', videoUrl: '' }
    ],
    exam: [
      { q: '¿Qué es una política pública?', options: ['Ley', 'Acción del Estado', 'Decreto', 'Nada'], correct: 1 },
      { q: '¿El ciclo de políticas inicia con:', options: ['Evaluación', 'Diagnóstico', 'Implementación', 'Nada'], correct: 1 },
      { q: '¿Los stakeholders son:', options: ['Actores interesados', 'Políticos', 'Ciudadanos', 'Nada'], correct: 0 },
      { q: '¿La evaluación es:', options: ['Final', 'Continua', 'Inicial', 'Nada'], correct: 1 },
      { q: '¿Un indicador mide:', options: ['Resultados', 'Procesos', 'Recursos', 'Nada'], correct: 0 },
      { q: '¿El presupuesto es:', options: ['Opcional', 'Necesario', 'Innecesario', 'Nada'], correct: 1 },
      { q: '¿La participación ciudadana es:', options: ['Importante', 'Irrelevante', 'Prohibida', 'Nada'], correct: 0 },
      { q: '¿Un programa es:', options: ['Proyecto', 'Conjunto de acciones', 'Ley', 'Nada'], correct: 1 },
      { q: '¿El monitoreo es:', options: ['Seguimiento', 'Evaluación', 'Inicio', 'Nada'], correct: 0 },
      { q: '¿La transparencia es:', options: ['Opcional', 'Necesaria', 'Innecesaria', 'Nada'], correct: 1 }
    ]
  }
];

// ═══════════════════════════════════════════════
// BLOQUE 2 — CAPA DE PERSISTENCIA (localStorage)
// ═══════════════════════════════════════════════

const Storage = {
  // Usuarios
  getUsers: () => JSON.parse(localStorage.getItem('cean_users') || '[]'),
  setUsers: (users) => localStorage.setItem('cean_users', JSON.stringify(users)),
  
  // Sesión
  getSession: () => JSON.parse(localStorage.getItem('cean_session') || null),
  setSession: (session) => localStorage.setItem('cean_session', JSON.stringify(session)),
  clearSession: () => localStorage.removeItem('cean_session'),
  
  // Progreso
  getProgress: (userId) => JSON.parse(localStorage.getItem(`cean_progress_${userId}`) || '{}'),
  setProgress: (userId, data) => localStorage.setItem(`cean_progress_${userId}`, JSON.stringify(data)),
  
  // Certificados
  getCertificates: (userId) => JSON.parse(localStorage.getItem(`cean_certs_${userId}`) || '[]'),
  addCertificate: (userId, cert) => {
    const certs = Storage.getCertificates(userId);
    certs.push(cert);
    localStorage.setItem(`cean_certs_${userId}`, JSON.stringify(certs));
  },
  
  // Inscripciones
  getEnrollments: (userId) => JSON.parse(localStorage.getItem(`cean_enrollments_${userId}`) || '[]'),
  addEnrollment: (userId, courseId) => {
    const enrollments = Storage.getEnrollments(userId);
    if (!enrollments.includes(courseId)) {
      enrollments.push(courseId);
      localStorage.setItem(`cean_enrollments_${userId}`, JSON.stringify(enrollments));
    }
  }
};

// ═══════════════════════════════════════════════
// BLOQUE 3 — ROUTER SPA
// ═══════════════════════════════════════════════

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('nav-hamburger');
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('nav-hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

function syncMobileMenuAuth() {
  const isLoggedIn = !!state.currentUser;
  const guest = document.getElementById('mobile-menu-auth-guest');
  const user  = document.getElementById('mobile-menu-auth-user');
  if (guest) guest.classList.toggle('hidden', isLoggedIn);
  if (user)  user.classList.toggle('hidden', !isLoggedIn);
}

function showView(name) {
  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  
  // Mostrar la vista seleccionada
  const el = document.getElementById(`view-${name}`);
  if (el) {
    el.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Verificar sesión para vistas protegidas
  if (name === 'dashboard') {
    if (!state.currentUser) { showAuth('login'); return; }
    showDashboard();
  }
  if (name === 'player') {
    if (!state.currentUser) { showAuth('login'); return; }
  }
  if (name === 'exam') {
    if (!state.currentUser) { showAuth('login'); return; }
  }
  if (name === 'certificate') {
    if (!state.currentUser) { showAuth('login'); return; }
  }
}

function scrollToCourses() {
  const section = document.getElementById('courses-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ═══════════════════════════════════════════════
// BLOQUE 4 — AUTH
// ═══════════════════════════════════════════════

function initApp() {
  // Crear usuario demo si no existe
  const users = Storage.getUsers();
  const demoExists = users.find(u => u.email === DEMO_USER.email);

  if (!demoExists) {
    const demoUser = {
      id: uid(),
      name: DEMO_USER.name,
      email: DEMO_USER.email,
      password: DEMO_USER.password,
      role: 'student',
      createdAt: new Date().toISOString()
    };
    users.push(demoUser);
    Storage.setUsers(users);

    // PRE-CARGAR PROGRESO DEMO - Combinar ambos cursos en un solo objeto
    const demoProgress = {
      'ley-safco': {
        enrolledAt: new Date().toISOString(),
        completedLessons: [0, 1, 2], // 3 lecciones completadas de 5
        passed: false,
        score: 0
      },
      'marketing-digital': {
        enrolledAt: new Date().toISOString(),
        completedLessons: [0, 1, 2, 3, 4], // 5 lecciones completadas de 5
        passed: false,
        score: 0
      }
    };
    Storage.setProgress(demoUser.id, demoProgress);
    Storage.addEnrollment(demoUser.id, 'ley-safco');
    Storage.addEnrollment(demoUser.id, 'marketing-digital');
  } else {
    // Si el usuario demo ya existe pero no tiene progreso, agregarselo
    const demoUser = demoExists;
    const existingProgress = Storage.getProgress(demoUser.id);
    if (!existingProgress['ley-safco'] || !existingProgress['marketing-digital']) {
      const demoProgress = {
        ...existingProgress,
        'ley-safco': {
          enrolledAt: new Date().toISOString(),
          completedLessons: [0, 1, 2],
          passed: false,
          score: 0
        },
        'marketing-digital': {
          enrolledAt: new Date().toISOString(),
          completedLessons: [0, 1, 2, 3, 4],
          passed: false,
          score: 0
        }
      };
      Storage.setProgress(demoUser.id, demoProgress);
      Storage.addEnrollment(demoUser.id, 'ley-safco');
      Storage.addEnrollment(demoUser.id, 'marketing-digital');
    }
  }

  // Restaurar sesión
  const session = Storage.getSession();
  if (session) {
    state.currentUser = session;
    updateNavbar();
  }

  // Iniciar en home
  showView('home');
  renderCatalog();
}

function showAuth(tab) {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
    document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('reg-error').classList.add('hidden');
  }
}

function closeAuth() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function switchAuthTab(tab) {
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('form-register').classList.toggle('hidden', tab !== 'register');
}

function register(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value;
  const phone = document.getElementById('reg-phone').value.trim();
  
  const users = Storage.getUsers();
  const errEl = document.getElementById('reg-error');
  
  // Validar email único
  if (users.find(u => u.email === email)) {
    errEl.textContent = 'Este correo ya está registrado.';
    errEl.classList.remove('hidden');
    return;
  }
  
  // Crear usuario
  const newUser = {
    id: uid(),
    name,
    email,
    password,
    phone,
    role: 'student',
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  Storage.setUsers(users);
  
  // Auto-login
  state.currentUser = newUser;
  Storage.setSession(newUser);
  updateNavbar();
  closeAuth();
  
  toast('¡Cuenta creada! Bienvenido, ' + name.split(' ')[0], 'success');
  
  // Redirigir si había curso pendiente
  if (state.pendingCourseId) {
    const id = state.pendingCourseId;
    state.pendingCourseId = null;
    openCourse(id);
  } else {
    showView('dashboard');
  }
}

function login(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  
  const users = Storage.getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  const errEl = document.getElementById('login-error');
  
  if (!user) {
    errEl.textContent = 'Correo o contraseña incorrectos.';
    errEl.classList.remove('hidden');
    return;
  }
  
  state.currentUser = user;
  Storage.setSession(user);
  updateNavbar();
  closeAuth();
  
  toast('¡Bienvenido de vuelta, ' + user.name.split(' ')[0] + '!', 'success');
  
  // Redirigir si había curso pendiente
  if (state.pendingCourseId) {
    const id = state.pendingCourseId;
    state.pendingCourseId = null;
    openCourse(id);
  } else {
    showView('dashboard');
  }
}

function logout() {
  state.currentUser = null;
  Storage.clearSession();
  updateNavbar();
  showView('home');
  toast('Sesión cerrada');
}

function updateNavbar() {
  const isLogged = !!state.currentUser;
  const navGuest = document.getElementById('nav-guest');
  const navUser = document.getElementById('nav-user');
  
  if (navGuest) navGuest.classList.toggle('hidden', isLogged);
  if (navUser) navUser.classList.toggle('hidden', !isLogged);
  
  if (isLogged) {
    const avatar = document.getElementById('nav-avatar');
    const username = document.getElementById('nav-username');
    if (avatar) avatar.textContent = state.currentUser.name.charAt(0).toUpperCase();
    if (username) username.textContent = state.currentUser.name.split(' ')[0];
  }
  syncMobileMenuAuth();
}

// Utilidad: UID único
function uid() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

// ═══════════════════════════════════════════════
// BLOQUE 5 — HOME / CATÁLOGO
// ═══════════════════════════════════════════════

let currentCategoryFilter = 'all';

function renderCatalog() {
  const grid = document.getElementById('home-courses-grid');
  if (!grid) return;
  
  const filtered = currentCategoryFilter === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === currentCategoryFilter);
  
  grid.innerHTML = filtered.map(c => courseCard(c)).join('');
}

function filterCourses(category, btn) {
  currentCategoryFilter = category;

  // Actualizar botones
  document.querySelectorAll('#catalog-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderCatalog();
}

// Buscador en tiempo real - Home
let searchTimeout = null;
function searchCourses(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const searchTerm = query.toLowerCase().trim();
    const grid = document.getElementById('home-courses-grid');
    if (!grid) return;

    const filtered = COURSES.filter(c => {
      const matchCategory = currentCategoryFilter === 'all' || c.category === currentCategoryFilter;
      const matchSearch = !searchTerm || 
        c.title.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm) ||
        (c.law && c.law.toLowerCase().includes(searchTerm));
      return matchCategory && matchSearch;
    });

    grid.innerHTML = filtered.length > 0 
      ? filtered.map(c => courseCard(c)).join('')
      : '<div class="no-results">No se encontraron cursos</div>';
  }, 300);
}

// Buscador en tiempo real - Dashboard
function searchCoursesDashboard(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const searchTerm = query.toLowerCase().trim();
    const grid = document.getElementById('explore-grid');
    if (!grid) return;

    const filtered = COURSES.filter(c => {
      const matchSearch = !searchTerm || 
        c.title.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm) ||
        (c.law && c.law.toLowerCase().includes(searchTerm));
      return matchSearch;
    });

    grid.innerHTML = filtered.length > 0 
      ? filtered.map(c => courseCard(c)).join('')
      : '<div class="no-results">No se encontraron cursos</div>';
  }, 300);
}

function courseCard(c) {
  const enrolled = state.currentUser ? isEnrolled(c.id) : false;
  const progress = enrolled && state.currentUser ? getCourseProgress(c.id) : null;
  const pct = progress ? Math.round((progress.completedLessons / c.lessons.length) * 100) : 0;
  
  const price = c.price || 80;

  // Ícono SVG según categoría
  const categoryIcons = {
    'Leyes y Normativa': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v13M3 7l9-4 9 4M7 10h10M7 14h10"/></svg>',
    'Idiomas': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'Tecnología': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
  };
  const defaultIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';
  const iconSvg = categoryIcons[c.category] || defaultIcon;

  let progressHtml = '';
  if (enrolled && progress) {
    const statusLabel = progress.passed
      ? '<span style="color:#16a34a;font-weight:600;">✓ Certificado obtenido</span>'
      : (progress.completedLessons > 0 ? `${pct}% completado` : 'No iniciado');
    progressHtml = `
      <div style="margin-top:8px">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-label">${statusLabel}</div>
      </div>`;
  }

  const ctaLabel = enrolled ? 'Continuar curso →' : 'Ver curso →';
  const priceDisplay = `<span class="course-price">Bs ${price}</span>`;

  return `
    <div class="course-card" onclick="openCourse('${c.id}')">
      <div class="course-card-image" style="background-image: url('${c.image}')" onclick="openLightbox('${c.image}', '${c.title}')">
        <div class="course-card-overlay"></div>
        <div class="course-card-icon">${iconSvg}</div>
        <span class="course-cat-badge">${c.category}</span>
        ${c.law ? `<span class="course-ley-badge">${c.law}</span>` : ''}
        ${priceDisplay ? `<span class="course-price-tag">${priceDisplay}</span>` : ''}
      </div>
      <div class="course-card-body">
        <div class="course-card-title">${c.title}</div>
        <div class="course-card-desc">${c.description}</div>
        <div class="course-card-meta">
          <span><svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>${c.lessons.length} lecciones</span>
          <span><svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${c.duration}</span>
          <span><svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>${c.level}</span>
        </div>
        ${progressHtml}
      </div>
      <div class="course-card-cta">
        <span class="course-tag">${enrolled ? 'Inscrito' : ''}</span>
        <button class="btn btn-gold btn-sm">${ctaLabel}</button>
      </div>
    </div>
  `;
}

function openCourse(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  
  if (!state.currentUser) {
    state.pendingCourseId = courseId;
    showAuth('login');
    return;
  }
  
  // Inscribir si es la primera vez
  Storage.addEnrollment(state.currentUser.id, courseId);
  
  // Inicializar progreso si no existe
  const progress = Storage.getProgress(state.currentUser.id);
  if (!progress[courseId]) {
    progress[courseId] = {
      enrolledAt: new Date().toISOString(),
      completedLessons: [],
      passed: false,
      score: 0
    };
    Storage.setProgress(state.currentUser.id, progress);
  }
  
  // Ir al player
  openPlayer(courseId);
}

function isEnrolled(courseId) {
  if (!state.currentUser) return false;
  const enrollments = Storage.getEnrollments(state.currentUser.id);
  return enrollments.includes(courseId);
}

function getCourseProgress(courseId) {
  if (!state.currentUser) return null;
  const progress = Storage.getProgress(state.currentUser.id);
  return progress[courseId] || { completedLessons: [], passed: false, score: 0 };
}

// ═══════════════════════════════════════════════
// BLOQUE 6 — DASHBOARD
// ═══════════════════════════════════════════════

function showDashboard() {
  if (!state.currentUser) { showAuth('login'); return; }
  
  // Actualizar perfil
  document.getElementById('dash-avatar').textContent = state.currentUser.name.charAt(0).toUpperCase();
  document.getElementById('dash-name').textContent = state.currentUser.name;
  document.getElementById('dash-email').textContent = state.currentUser.email;
  
  // Mostrar pestaña por defecto
  showDashTab('my-courses');
}

function showDashTab(tab) {
  ['my-courses', 'explore', 'certificates'].forEach(t => {
    const content = document.getElementById(`dash-tab-${t}`);
    const link = document.getElementById(`dlink-${t}`);
    if (content) content.classList.toggle('hidden', t !== tab);
    if (link) link.classList.toggle('active', t === tab);
  });
  
  switch(tab) {
    case 'my-courses': renderMyCoursesTab(); break;
    case 'explore': renderExploreTab(); break;
    case 'certificates': renderCertificatesTab(); break;
  }
}

function renderMyCoursesTab() {
  const list = document.getElementById('enrolled-list');
  if (!list) return;
  
  const enrollments = Storage.getEnrollments(state.currentUser.id);
  const enrolledCourses = COURSES.filter(c => enrollments.includes(c.id));
  
  if (enrolledCourses.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
        <h3>Aún no tienes cursos</h3>
        <p>Explora el catálogo y empieza a aprender</p>
        <br>
        <button class="btn btn-gold" onclick="showDashTab('explore')">Ver cursos →</button>
      </div>
    `;
    return;
  }
  
  // Agregar mensaje demo si es el usuario demo
  let demoMessage = '';
  if (state.currentUser.email === DEMO_USER.email) {
    demoMessage = `
      <div class="demo-info-card">
        <strong>Modo Demo:</strong>
        <p>Estás viendo el progreso precargado del curso <b>Ley SAFCO</b> (3/5 lecciones) y <b>Marketing Digital</b> (5/5 lecciones - listo para examen).</p>
        <p>Completa las lecciones restantes y prueba el examen final.</p>
      </div>
    `;
  }
  
  list.innerHTML = demoMessage + enrolledCourses.map(c => {
    const progress = getCourseProgress(c.id);
    const completedCount = progress.completedLessons ? progress.completedLessons.length : 0;
    const pct = Math.round((completedCount / c.lessons.length) * 100);
    const statusLabel = progress.passed
      ? '<span style="color:#16a34a;font-weight:600">Completado y certificado</span>'
      : `${completedCount} de ${c.lessons.length} lecciones`;

    return `
      <div class="enrolled-card">
        <div class="enrolled-thumb">
          <img src="${c.image}" alt="${c.title}" onerror="this.style.background='#dbeafe'">
        </div>
        <div class="enrolled-info">
          <div class="enrolled-title">${c.title}</div>
          <div class="enrolled-status">${statusLabel}</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="progress-label">${pct}% completado</div>
        </div>
        <div class="enrolled-actions">
          ${progress.passed
            ? `<button class="btn btn-success btn-sm" onclick="showCertificate('${c.id}')">Ver Certificado</button>`
            : `<button class="btn btn-gold btn-sm" onclick="openPlayer('${c.id}')">Continuar</button>`
          }
          ${completedCount >= c.lessons.length && !progress.passed
            ? `<button class="btn btn-outline-cean btn-sm" onclick="showExamIntro('${c.id}')">Ir al Examen Final</button>`
            : ''
          }
        </div>
      </div>
    `;
  }).join('');
}

function renderExploreTab() {
  const grid = document.getElementById('explore-grid');
  if (!grid) return;
  
  grid.innerHTML = COURSES.map(c => courseCard(c)).join('');
}

function renderCertificatesTab() {
  const list = document.getElementById('certs-list');
  if (!list) return;
  
  const certs = Storage.getCertificates(state.currentUser.id);
  
  if (certs.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/></svg></div>
        <h3>Aún no tienes certificados</h3>
        <p>Completa un curso y aprueba el examen para obtener tu certificado</p>
      </div>
    `;
    return;
  }
  
  list.innerHTML = certs.map(cert => {
    const course = COURSES.find(c => c.id === cert.courseId);
    return `
      <div class="cert-card">
        <div class="cert-icon">🏆</div>
        <div class="cert-info">
          <div class="cert-course">${course ? course.title : cert.courseTitle}</div>
          <div class="cert-date">Emitido el ${cert.issuedAt} · ${cert.certNumber}</div>
        </div>
        <button class="btn btn-outline-cean btn-sm" onclick="showCertificateView('${cert.id}')">Ver →</button>
      </div>
    `;
  }).join('');
}

function filterExplore(category, btn) {
  const grid = document.getElementById('explore-grid');
  if (!grid) return;
  
  const filtered = category === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === category);
  
  grid.innerHTML = filtered.map(c => courseCard(c)).join('');
  
  // Actualizar botones
  document.querySelectorAll('.dash-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ═══════════════════════════════════════════════
// BLOQUE 7 — PLAYER DE VIDEO
// ═══════════════════════════════════════════════

function openPlayer(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  
  state.currentCourse = course;
  state.currentLesson = 0;
  
  document.getElementById('player-course-title').textContent = course.title;
  
  renderLessonList();
  updateExamButton();
  selectLesson(0);
  
  showView('player');
}

function renderLessonList() {
  const course = state.currentCourse;
  if (!course) return;
  
  const progress = getCourseProgress(course.id);
  const list = document.getElementById('lessons-list');
  if (!list) return;
  
  list.innerHTML = course.lessons.map((l, i) => {
    const done = progress.completedLessons.includes(i);
    const active = i === state.currentLesson;
    return `
      <div class="lesson-item${done ? ' completed' : ''}${active ? ' active' : ''}" onclick="selectLesson(${i})">
        <div class="lesson-check">${done ? '✓' : (active ? '▶' : (i + 1))}</div>
        <div class="lesson-item-title">${l.title}</div>
        <div class="lesson-item-dur">${l.duration}</div>
      </div>
    `;
  }).join('');

  // Actualizar barra de progreso
  const completedCount = progress.completedLessons.length;
  const pct = Math.round((completedCount / course.lessons.length) * 100);
  const progFill = document.getElementById('player-prog-fill');
  const progPct = document.getElementById('player-prog-pct');
  if (progFill) progFill.style.width = pct + '%';
  if (progPct) progPct.textContent = pct + '%';
}

function selectLesson(index) {
  const course = state.currentCourse;
  if (!course || index < 0 || index >= course.lessons.length) return;

  state.currentLesson = index;
  const lesson = course.lessons[index];

  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-desc').textContent = lesson.desc || '';

  // Cargar video
  const iframe = document.getElementById('video-iframe');
  const placeholder = document.getElementById('video-placeholder');

  if (lesson.videoUrl) {
    iframe.src = lesson.videoUrl;
    iframe.classList.remove('hidden');
    placeholder.classList.add('hidden');
  } else {
    iframe.src = '';
    iframe.classList.add('hidden');
    placeholder.classList.remove('hidden');
  }

  // Botón de completar
  const progress = getCourseProgress(course.id);
  const done = progress.completedLessons.includes(index);
  const markBtn = document.getElementById('mark-btn');

  if (markBtn) {
    markBtn.disabled = done;
    markBtn.textContent = done ? 'Lección completada' : 'Marcar como completada';
    markBtn.classList.toggle('btn-success', done);
  }

  // Botones prev/next
  document.getElementById('prev-btn').disabled = index === 0;
  document.getElementById('next-btn').disabled = index === course.lessons.length - 1;

  renderLessonList();
  updateExamButton();
}

function markComplete() {
  const course = state.currentCourse;
  if (!course) return;

  const userId = state.currentUser.id;
  const lessonIndex = state.currentLesson;
  
  // Obtener TODO el progreso del usuario (todos los cursos)
  const allProgress = Storage.getProgress(userId);
  
  // Asegurar que el curso existe en el progreso
  if (!allProgress[course.id]) {
    allProgress[course.id] = { completedLessons: [], passed: false, score: 0 };
  }
  
  const progress = allProgress[course.id];

  if (!progress.completedLessons.includes(lessonIndex)) {
    progress.completedLessons.push(lessonIndex);
    
    // Guardar TODO el progreso del usuario
    Storage.setProgress(userId, allProgress);
    toast('Lección completada', 'success');

    // Actualizar botón inmediatamente
    const markBtn = document.getElementById('mark-btn');
    if (markBtn) {
      markBtn.disabled = true;
      markBtn.textContent = 'Lección completada';
      markBtn.classList.add('btn-success');
    }
  }

  // Actualizar barra de progreso
  const completedCount = progress.completedLessons.length;
  const pct = Math.round((completedCount / course.lessons.length) * 100);
  const progFill = document.getElementById('player-prog-fill');
  const progPct = document.getElementById('player-prog-pct');
  if (progFill) progFill.style.width = pct + '%';
  if (progPct) progPct.textContent = pct + '%';

  renderLessonList();
  updateExamButton();

  // Auto avanzar
  const next = lessonIndex + 1;
  if (next < course.lessons.length) {
    setTimeout(() => selectLesson(next), 800);
  }
}

function prevLesson() {
  if (state.currentLesson > 0) {
    selectLesson(state.currentLesson - 1);
  }
}

function nextLesson() {
  const course = state.currentCourse;
  if (course && state.currentLesson < course.lessons.length - 1) {
    selectLesson(state.currentLesson + 1);
  }
}

function updateExamButton() {
  const course = state.currentCourse;
  if (!course) return;

  const progress = getCourseProgress(course.id);
  const completedCount = progress.completedLessons.length;
  const totalCount = course.lessons.length;
  const allDone = completedCount >= totalCount;
  const examBtn = document.getElementById('exam-btn');

  if (!examBtn) return;

  if (progress.passed) {
    examBtn.textContent = 'Ver Certificado';
    examBtn.disabled = false;
    examBtn.classList.remove('btn-disabled');
    examBtn.onclick = () => showCertificate(course.id);
  } else if (allDone) {
    examBtn.textContent = 'Ir al Examen Final';
    examBtn.disabled = false;
    examBtn.classList.remove('btn-disabled');
    examBtn.onclick = () => showExamIntro(course.id);
  } else {
    examBtn.textContent = 'Examen (' + completedCount + '/' + totalCount + ' lecciones)';
    examBtn.disabled = true;
    examBtn.classList.add('btn-disabled');
    examBtn.onclick = null;
  }
}

// ═══════════════════════════════════════════════
// BLOQUE 8 — MOTOR DE EXAMEN
// ═══════════════════════════════════════════════

let examState = null;

function goToExam() {
  const course = state.currentCourse;
  if (!course) return;
  
  const progress = getCourseProgress(course.id);
  if (progress.passed) {
    showCertificate(course.id);
    return;
  }
  
  showExamIntro(course.id);
}

function showExamIntro(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  
  state.currentCourse = course;
  
  document.getElementById('exam-course-name').textContent = course.title;
  document.getElementById('exam-intro').classList.remove('hidden');
  document.getElementById('exam-questions').classList.add('hidden');
  document.getElementById('exam-results').classList.add('hidden');
  
  showView('exam');
}

function startExam() {
  const course = state.currentCourse;
  if (!course) return;
  
  // Inicializar estado del examen
  examState = {
    courseId: course.id,
    questions: [...course.exam], // Copia de las preguntas
    answers: new Array(course.exam.length).fill(null),
    current: 0,
    startedAt: new Date()
  };
  
  document.getElementById('exam-intro').classList.add('hidden');
  document.getElementById('exam-questions').classList.remove('hidden');
  document.getElementById('exam-q-course').textContent = course.title;
  
  renderQuestion();
}

function renderQuestion() {
  if (!examState) return;
  
  const course = state.currentCourse;
  const q = course.exam[examState.current];
  const total = course.exam.length;
  const idx = examState.current;
  const letters = ['A', 'B', 'C', 'D'];
  
  document.getElementById('q-number').textContent = `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-counter').textContent = `Pregunta ${idx + 1} de ${total}`;
  document.getElementById('q-nav-label').textContent = `${idx + 1} / ${total}`;
  document.getElementById('exam-prog-fill').style.width = ((idx + 1) / total * 100) + '%';
  
  const selected = examState.answers[idx];
  const optList = document.getElementById('options-list');
  
  optList.innerHTML = q.options.map((opt, i) => {
    let cls = 'option-btn';
    if (selected === i) cls += ' selected';
    
    return `
      <button class="${cls}" onclick="selectAnswer(${i})">
        <span class="option-letter">${letters[i]}</span>
        ${opt}
      </button>
    `;
  }).join('');
  
  // Botones de navegación
  document.getElementById('q-prev').disabled = idx === 0;
  
  const isLast = idx === total - 1;
  document.getElementById('q-next').classList.toggle('hidden', isLast);
  document.getElementById('q-submit').classList.toggle('hidden', !isLast);
}

function selectAnswer(optionIndex) {
  if (!examState) return;
  examState.answers[examState.current] = optionIndex;
  renderQuestion();
}

function qNext() {
  if (examState && examState.current < state.currentCourse.exam.length - 1) {
    examState.current++;
    renderQuestion();
  }
}

function qPrev() {
  if (examState && examState.current > 0) {
    examState.current--;
    renderQuestion();
  }
}

function submitExam() {
  if (!examState || !state.currentCourse) return;
  
  const course = state.currentCourse;
  const progress = getCourseProgress(course.id);
  const userId = state.currentUser.id;
  
  // Calcular puntaje
  let correct = 0;
  course.exam.forEach((q, i) => {
    if (examState.answers[i] === q.correct) correct++;
  });
  
  const score = Math.round((correct / course.exam.length) * 100);
  const passed = score >= 70;
  
  // Guardar resultado
  progress.passed = passed;
  progress.score = score;
  progress.examDate = new Date().toISOString();
  Storage.setProgress(userId, progress);
  
  // Generar certificado si aprobó
  if (passed) {
    const cert = {
      id: uid(),
      courseId: course.id,
      courseTitle: course.title,
      studentName: state.currentUser.name,
      issuedAt: formatDate(new Date()),
      certNumber: generateCertNumber(),
      score
    };
    Storage.addCertificate(userId, cert);
  }
  
  // Mostrar resultados
  showExamResult(passed, score, correct);
}

function showExamResult(passed, score, correct) {
  const total = state.currentCourse.exam.length;
  const wrong = total - correct;

  document.getElementById('exam-questions').classList.add('hidden');
  document.getElementById('exam-results').classList.remove('hidden');

  const resultsCard = document.getElementById('results-card');
  resultsCard.innerHTML = `
    <div class="results-icon">${passed 
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/></svg>' 
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'}</div>
    <div class="results-score ${passed ? 'pass' : 'fail'}">${score}%</div>
    <div class="results-msg">${passed ? '¡Felicitaciones, aprobaste!' : 'No alcanzaste el mínimo'}</div>
    <div class="results-sub">${passed
      ? `Obtuviste ${correct} de ${total} respuestas correctas.`
      : `Necesitas 70% para aprobar. Obtuviste ${correct}/${total} (${score}%). ¡Sigue intentando!`
    }</div>
    <div class="results-breakdown">
      <div class="rb-item"><div class="rb-num c">${correct}</div><div class="rb-label">Correctas</div></div>
      <div class="rb-item"><div class="rb-num w">${wrong}</div><div class="rb-label">Incorrectas</div></div>
      <div class="rb-item"><div class="rb-num">${total}</div><div class="rb-label">Total</div></div>
    </div>
    <div class="results-btns">
      ${passed
        ? `<button class="btn btn-gold btn-lg" onclick="showCertificate('${state.currentCourse.id}')"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/></svg>Ver mi certificado</button>
           <button class="btn btn-outline-cean" onclick="showView('player')">← Volver al curso</button>`
        : `<button class="btn btn-gold" onclick="showExamIntro('${state.currentCourse.id}')"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>Repetir examen</button>
           <button class="btn btn-outline-cean" onclick="showView('player')">← Repasar el curso</button>`
      }
    </div>
  `;
}

function retryExam() {
  showExamIntro(state.currentCourse.id);
}

// ═══════════════════════════════════════════════
// BLOQUE 9 — CERTIFICADOS
// ═══════════════════════════════════════════════

function showCertificate(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course || !state.currentUser) return;
  
  const certs = Storage.getCertificates(state.currentUser.id);
  const cert = certs.find(c => c.courseId === courseId);
  
  if (!cert) {
    toast('No se encontró el certificado', 'error');
    return;
  }
  
  // Guardar certificado actual para vista
  state.currentCertificate = cert;
  state.currentCourse = course;
  
  showCertificateView(cert.id);
}

function showCertificateView(certId) {
  const cert = state.currentCertificate;
  const course = state.currentCourse;
  
  if (!cert || !course) {
    // Buscar en certificados del usuario
    const certs = Storage.getCertificates(state.currentUser.id);
    const foundCert = certs.find(c => c.id === certId);
    if (foundCert) {
      state.currentCertificate = foundCert;
      state.currentCourse = COURSES.find(c => c.id === foundCert.courseId);
    }
  }
  
  const c = state.currentCertificate;
  const courseData = state.currentCourse;
  
  if (!c || !courseData) return;
  
  const wrapper = document.getElementById('cert-wrapper');
  if (!wrapper) return;
  
  wrapper.innerHTML = `
    <div class="certificate">
      <div class="cert-corner tl"></div>
      <div class="cert-corner tr"></div>
      <div class="cert-corner bl"></div>
      <div class="cert-corner br"></div>

      <div class="cert-header">
        <div class="cert-logo">🎓</div>
        <div class="cert-org">CEAN Capacitación — Plataforma Virtual de Aprendizaje</div>
      </div>

      <hr class="cert-divider">

      <div class="cert-text-of">CERTIFICA QUE</div>
      <div class="cert-student-name">${c.studentName}</div>

      <div class="cert-text-completed">ha completado satisfactoriamente el curso de</div>
      <div class="cert-course-name">${courseData.title}</div>
      <div class="cert-law">${courseData.law ? `Basado en: ${courseData.law}` : ''}</div>
      <div class="cert-score">con una calificación de ${c.score}% · ${courseData.duration} de formación</div>

      <div class="cert-footer">
        <div class="cert-signature">
          <div class="cert-sig-line"></div>
          <div class="cert-sig-name">${courseData.instructor}</div>
          <div class="cert-sig-role">Instructor del Curso</div>
        </div>
        <div class="cert-badge">
          <div class="cert-badge-icon">🏆</div>
          <div class="cert-badge-text">Aprobado</div>
        </div>
        <div class="cert-signature">
          <div class="cert-sig-line"></div>
          <div class="cert-sig-name">Director Académico</div>
          <div class="cert-sig-role">CEAN Capacitación</div>
        </div>
      </div>
    </div>
    <div class="cert-meta">
      <p>Fecha de emisión: ${c.issuedAt} · <b>${c.certNumber}</b></p>
    </div>
  `;
  
  showView('certificate');
}

function printCertificate() {
  window.print();
}

function downloadCertificate() {
  window.print(); // El diálogo de impresión permite guardar como PDF
}

function generateCertNumber() {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `CEAN-${year}-${random}`;
}

// ═══════════════════════════════════════════════
// BLOQUE 10 — UTILIDADES
// ═══════════════════════════════════════════════

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
}

function calcProgress(userId, courseId) {
  const progress = Storage.getProgress(userId);
  const course = COURSES.find(c => c.id === courseId);
  if (!course || !progress[courseId]) return 0;
  
  return Math.round((progress[courseId].completedLessons / course.lessons.length) * 100);
}

function getCertNumber(certId) {
  const cert = state.currentCertificate;
  return cert ? cert.certNumber : '';
}

// Toast notifications
let toastTimer;
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  if (!el) return;
  
  el.textContent = msg;
  el.className = 'toast' + (type ? ` ${type}` : '');
  el.classList.remove('hidden');
  
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 3000);
}

// ═══════════════════════════════════════════════
// ESTADO GLOBAL
// ═══════════════════════════════════════════════

let state = {
  currentUser: null,
  currentCourse: null,
  currentLesson: 0,
  currentCertificate: null,
  pendingCourseId: null
};

// ═══════════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// ═══════════════════════════════════════════════
// LIGHTBOX DE IMÁGENES
// ═══════════════════════════════════════════════

function openLightbox(imageSrc, caption) {
  event.stopPropagation();
  const lightbox = document.getElementById('image-lightbox');
  const img = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  
  if (lightbox && img) {
    img.src = imageSrc;
    if (captionEl) captionEl.textContent = caption;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
