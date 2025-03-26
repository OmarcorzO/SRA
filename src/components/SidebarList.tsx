const StudentOpt = [
  { name: "Inicio", submenu: [] },
  {
    name: "Perfil del estudiante",
  },
  {
    name: "Gestión de Solicitudes",
    submenu: [
      { name: "Seguimiento de Estado Solicitud" },
      { name: "Solicitudes de Reintegro" },
      { name: "Nueva solicitud de Reintegro" },
    ],
  },
  {
    name: "Cargar documentos",
    submenu: [{ name: "Video tutorial" }],
  },
  { name: "Soporte técnico", submenu: [{ name: "Crear una incidencia" }] },
  { name: "Contacto", submenu: [{ name: "Gestión de Contacto y Mensajería" }] },
  {
    name: "Sugerencias",
    submenu: [{ name: "Valoración de procesos" }],
  },
];

const GestorOpt = [
  { name: "Inicio", submenu: [] },
  {
    name: "Metas y cumplimientos",
    submenu: [
      { name: "Reportes de Reintegros y Matriculados", path: "/instrumento" },
    ],
  },
  {
    name: "Reportes solicitudes",
    submenu: [{ name: "Reportes Solicitudes de Reintegro" }],
  },
  {
    name: "Perfil del estudiante",
  },
  {
    name: "Reportes predictivos",
    submenu: [
      { name: "MacroReporte Modelo Predictivo" },
      { name: "Reportes de Modelo Académico" },
      { name: "Reportes de Modelo Caracterización" },
      { name: "Reportes de Modelo Contacto" },
      { name: "Reportes de Modelo Financieros" },
    ],
  },
  {
    name: "Gestión de Solicitudes",
    submenu: [{ name: "Gestión de Solicitudes de Reintegro" }],
  },
  { nam: "Acerca de SRA", submenu: [{ name: "Vídeo tutorial" }] },
  { name: "Soporte técnico", submenu: [{ name: "Crear una incidencia" }] },
  { name: "Contacto", submenu: [{ name: "Gestión de Contacto y Mensajería" }] },
];

const CoordinatorOpt = [
  { name: "Inicio", submenu: [] },
  {
    name: "Metas y cumplimientos",
    submenu: [
      { name: "Reportes de Reintegros y Matriculados", path: "/instrumento" },
    ],
  },
  {
    name: "Reportes solicitudes",
    submenu: [{ name: "Reportes Solicitudes de Reintegro" }],
  },
  {
    name: "Perfil del estudiante",
  },
  {
    name: "Reportes predictivos",
    submenu: [
      { name: "MacroReporte Modelo Predictivo" },
      { name: "Reportes de Modelo Académico" },
      { name: "Reportes de Modelo Caracterización" },
      { name: "Reportes de Modelo Contacto" },
      { name: "Reportes de Modelo Financieros" },
    ],
  },
  {
    name: "Usuarios",
  },
  { nam: "Acerca de SRA", submenu: [{ name: "Vídeo tutorial" }] },
  {
    name: "Gestión de Solicitudes",
    submenu: [{ name: "Gestión de Solicitudes de Reintegro" }],
  },
  { name: "Soporte técnico", submenu: [{ name: "Crear una incidencia" }] },
  {
    name: "Configuración General",
    submenu: [{ name: "Previsualización de Analíticas y Métricas" }],
  },
];

const AdministratorOpt = [
  { name: "Inicio", submenu: [] },
  {
    name: "Metas y cumplimientos",
    submenu: [
      { name: "Reportes de Reintegros y Matriculados", path: "/instrumento" },
    ],
  },
  {
    name: "Reportes solicitudes",
    submenu: [{ name: "Reportes Solicitudes de Reintegro" }],
  },
  {
    name: "Perfil del estudiante",
  },
  {
    name: "Reportes predictivos",
    submenu: [
      { name: "MacroReporte Modelo Predictivo" },
      { name: "Reportes de Modelo Académico" },
      { name: "Reportes de Modelo Caracterización" },
      { name: "Reportes de Modelo Contacto" },
      { name: "Reportes de Modelo Financieros" },
    ],
  },
  {
    name: "Gestión de Solicitudes",
    submenu: [
      { name: "Gestión de Solicitudes de Reintegro" },
      { name: "Seguimiento de Estado Solicitud" },
      { name: "Solicitudes de Reintegro" },
    ],
  },
  {
    name: "Usuarios",
    submenu: [{ name: "Gestión de Usuarios" }],
  },
  { name: "Acerca de SRA", submenu: [{ name: "Vídeo tutorial" }] },
  {
    name: "Cargar documentos",
    submenu: [{ name: "Video tutorial" }],
  },
  {
    name: "Sugerencias",
    submenu: [{ name: "Valoración de procesos" }],
  },
  { name: "Soporte técnico", submenu: [{ name: "Crear una incidencia" }] },
  { name: "Contacto", submenu: [{ name: "Gestión de Contacto y Mensajería" }] },
  {
    name: "Configuración General",
    submenu: [
      { name: "Previsualización de Analíticas y Métricas" },
      { name: "Configuración de Metas" },
    ],
  },
];

export { AdministratorOpt, CoordinatorOpt, GestorOpt, StudentOpt };
