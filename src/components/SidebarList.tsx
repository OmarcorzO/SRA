import React from "react";

import IconMetas from "./icons/iconMetas.tsx";
import IconAboutSRA from "./icons/iconAboutSRA.tsx";
import IconContacto from "./icons/iconContacto.tsx";
import IconHome from "./icons/iconHome.tsx";
import IconProfile from "./icons/iconProfile.tsx";
import IconReportePredi from "./icons/iconReportePredi.tsx";
import IconReporteSoli from "./icons/iconReporteSoli.tsx";
import IconSettings from "./icons/iconSettings.tsx";
import IconSolicitud from "./icons/iconSolicitud.tsx";
import IconSoporte from "./icons/iconSoporte.tsx";
import IconSugerencias from "./icons/iconSugerencias.tsx";
import IconUpload from "./icons/iconUpload.tsx";
import IconUsuarios from "./icons/iconUsuarios.tsx";

const StudentOpt = [
  {
    name: "Inicio",
    href: "/dashboard",
    pos: 0,
    icon: <IconHome />,
    submenu: [],
  },
  {
    name: "Perfil del estudiante",
    pos: 1,
    href: "",
    icon: <IconProfile />,
    submenu: [],
  },
  {
    name: "Gestión de Solicitudes",
    pos: 2,
    href: "",
    icon: <IconSolicitud />,
    submenu: [
      { name: "Seguimiento de Estado Solicitud", href: "#", pos: 0 },
      { name: "Solicitudes de Reintegro", href: "#", pos: 1 },
      { name: "Nueva solicitud de Reintegro", href: "/instrumento", pos: 2 },
    ],
  },
  {
    name: "Cargar documentos",
    pos: 3,
    href: "",
    icon: <IconUpload />,
    submenu: [],
  },
  {
    name: "Soporte técnico",
    pos: 4,
    href: "",
    icon: <IconSoporte />,
    submenu: [{ name: "Crear una incidencia", href: "#", pos: 0 }],
  },
  {
    name: "Contacto",
    pos: 5,
    href: "",
    icon: <IconContacto />,
    submenu: [{ name: "Gestión de Contacto y Mensajería", href: "#", pos: 0 }],
  },
  {
    name: "Sugerencias",
    pos: 6,
    href: "",
    icon: <IconSugerencias />,
    submenu: [{ name: "Valoración de procesos", href: "#", pos: 0 }],
  },
];

const GestorOpt = [
  { name: "Inicio", icon: <IconHome />, submenu: [] },
  {
    name: "Metas y cumplimientos",
    icon: <IconMetas />,
    submenu: [
      { name: "Reportes de Reintegros y Matriculados", path: "/instrumento" },
    ],
  },
  {
    name: "Reportes solicitudes",
    icon: <IconReporteSoli />,
    submenu: [{ name: "Reportes Solicitudes de Reintegro" }],
  },
  {
    name: "Perfil del estudiante",
    icon: <IconProfile />,
  },
  {
    name: "Reportes predictivos",
    icon: <IconReportePredi />,
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
    icon: <IconSolicitud />,
    submenu: [{ name: "Gestión de Solicitudes de Reintegro" }],
  },
  {
    name: "Acerca de SRA",
    icon: <IconAboutSRA />,
    submenu: [{ name: "Vídeo tutorial" }],
  },
  {
    name: "Soporte técnico",
    icon: <IconSoporte />,
    submenu: [{ name: "Crear una incidencia" }],
  },
  {
    name: "Contacto",
    icon: <IconContacto />,
    submenu: [{ name: "Gestión de Contacto y Mensajería" }],
  },
];

const CoordinatorOpt = [
  { name: "Inicio", icon: <IconHome />, submenu: [] },
  {
    name: "Metas y cumplimientos",
    icon: <IconMetas />,
    submenu: [
      { name: "Reportes de Reintegros y Matriculados", path: "/instrumento" },
    ],
  },
  {
    name: "Reportes solicitudes",
    icon: <IconReporteSoli />,
    submenu: [{ name: "Reportes Solicitudes de Reintegro" }],
  },
  {
    name: "Perfil del estudiante",
    icon: <IconProfile />,
  },
  {
    name: "Reportes predictivos",
    icon: <IconReportePredi />,
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
    icon: <IconUsuarios />,
  },
  {
    name: "Acerca de SRA",
    icon: <IconAboutSRA />,
    submenu: [{ name: "Vídeo tutorial" }],
  },
  {
    name: "Gestión de Solicitudes",
    icon: <IconSolicitud />,
    submenu: [{ name: "Gestión de Solicitudes de Reintegro" }],
  },
  {
    name: "Soporte técnico",
    icon: <IconSoporte />,
    submenu: [{ name: "Crear una incidencia" }],
  },
  {
    name: "Configuración General",
    icon: <IconSettings />,
    submenu: [{ name: "Previsualización de Analíticas y Métricas" }],
  },
];

const AdministratorOpt = [
  { name: "Inicio", href: "/dashboard", pos: 0, icon: <IconHome />, submenu: [] },
  {
    name: "Metas y cumplimientos",
    href: "",
    pos: 1,
    icon: <IconMetas />,
    submenu: [
      {
        name: "Reportes de Reintegros y Matriculados",
        path: "/instrumento",
        href: "",
        pos: 0,
      },
    ],
  },
  {
    name: "Reportes solicitudes",
    href: "",
    pos: 2,
    icon: <IconReporteSoli />,
    submenu: [{ name: "Reportes Solicitudes de Reintegro", href: "", pos: 0 }],
  },
  {
    name: "Perfil del estudiante",
    href: "",
    pos: 3,
    icon: <IconProfile />,
    submenu: [],
  },
  {
    name: "Reportes predictivos",
    href: "",
    pos: 4,
    icon: <IconReportePredi />,
    submenu: [
      { name: "MacroReporte Modelo Predictivo", href: "", pos: 0 },
      { name: "Reportes de Modelo Académico", href: "", pos: 1 },
      { name: "Reportes de Modelo Caracterización", href: "", pos: 2 },
      { name: "Reportes de Modelo Contacto", href: "", pos: 3 },
      { name: "Reportes de Modelo Financieros", href: "", pos: 4 },
    ],
  },
  {
    name: "Gestión de Solicitudes",
    href: "",
    pos: 5,
    icon: <IconSolicitud />,
    submenu: [
      { name: "Gestión de Solicitudes de Reintegro", href: "", pos: 0 },
      { name: "Seguimiento de Estado Solicitud", href: "", pos: 1 },
      { name: "Solicitudes de Reintegro", href: "/instrumento", pos: 2 },
    ],
  },
  {
    name: "Usuarios",
    href: "",
    pos: 6,
    icon: <IconUsuarios />,
    submenu: [{ name: "Gestión de Usuarios", href: "", pos: 0 }],
  },
  {
    name: "Acerca de SRA",
    href: "",
    pos: 7,
    icon: <IconAboutSRA />,
    submenu: [{ name: "Vídeo tutorial", href: "", pos: 0 }],
  },
  {
    name: "Cargar documentos",
    href: "",
    pos: 8,
    icon: <IconUpload />,
    submenu: [],
  },
  {
    name: "Sugerencias",
    href: "",
    pos: 9,
    icon: <IconSugerencias />,
    submenu: [{ name: "Valoración de procesos", href: "", pos: 0 }],
  },
  {
    name: "Soporte técnico",
    href: "",
    pos: 10,
    icon: <IconSoporte />,
    submenu: [{ name: "Crear una incidencia", href: "", pos: 0 }],
  },
  {
    name: "Contacto",
    href: "",
    pos: 11,
    icon: <IconContacto />,
    submenu: [{ name: "Gestión de Contacto y Mensajería", href: "", pos: 0 }],
  },
  {
    name: "Configuración General",
    href: "",
    pos: 12,
    icon: <IconSettings />,
    submenu: [
      { name: "Previsualización de Analíticas y Métricas", href: "", pos: 0 },
      { name: "Configuración de Metas", href: "", pos: 1 },
    ],
  },
];

export { AdministratorOpt, CoordinatorOpt, GestorOpt, StudentOpt };
