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
  { name: "Inicio", href: "", pos: 0, icon: <IconHome />, submenu: [] },
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
    submenu: [
      { name: "Gestión de Solicitudes de Reintegro" },
      { name: "Seguimiento de Estado Solicitud" },
      { name: "Solicitudes de Reintegro" },
    ],
  },
  {
    name: "Usuarios",
    icon: <IconUsuarios />,
    submenu: [{ name: "Gestión de Usuarios" }],
  },
  {
    name: "Acerca de SRA",
    icon: <IconAboutSRA />,
    submenu: [{ name: "Vídeo tutorial" }],
  },
  {
    name: "Cargar documentos",
    icon: <IconUpload />,
    submenu: [],
  },
  {
    name: "Sugerencias",
    icon: <IconSugerencias />,
    submenu: [{ name: "Valoración de procesos" }],
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
  {
    name: "Configuración General",
    icon: <IconSettings />,
    submenu: [
      { name: "Previsualización de Analíticas y Métricas" },
      { name: "Configuración de Metas" },
    ],
  },
];

export { AdministratorOpt, CoordinatorOpt, GestorOpt, StudentOpt };
