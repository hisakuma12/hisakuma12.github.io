import {
	Activity,
	BarChart3,
	Bot,
	Boxes,
	Braces,
	BriefcaseBusiness,
	CircuitBoard,
	Code2,
	Database,
	FileCheck2,
	GitBranch,
	Globe2,
	Layers3,
	Network,
	ReceiptText,
	ServerCog,
	ShieldCheck,
	ShoppingCart,
	Sparkles,
	Zap,
} from "lucide-vue-next";

export const navItems = [
	{ label: "Sobre mi", href: "#sobre-mi" },
	{ label: "Stack", href: "#tecnologias" },
	{ label: "Proyectos", href: "#proyectos" },
	{ label: "Servicios", href: "#servicios" },
	{ label: "Contacto", href: "#contacto" },
];

export const stats = [
	{ value: "+5años", label: "experiencia profesional" },
	{ value: "IDEV", label: "frontend y sistemas web" },
	{ value: "3", label: "idiomas: ES, JP, EN" },
];

export const technologies = [
	{
		name: "Laravel",
		icon: ServerCog,
		detail: "APIs, backend y sistemas web",
		tone: "from-red-400 to-pink-400",
	},
	{
		name: "Vue.js",
		icon: Braces,
		detail: "SPA, interfaces y componentes",
		tone: "from-emerald-300 to-cyan-300",
	},
	{
		name: "React",
		icon: Code2,
		detail: "interfaces modernas y dinamicas",
		tone: "from-cyan-300 to-blue-400",
	},
	{
		name: "MySQL",
		icon: Database,
		detail: "bases relacionales y consultas",
		tone: "from-blue-300 to-cyan-300",
	},
	{
		name: "Docker",
		icon: Boxes,
		detail: "entornos reproducibles",
		tone: "from-sky-300 to-blue-500",
	},
	{
		name: "WebSockets",
		icon: Network,
		detail: "tiempo real y eventos",
		tone: "from-violet-300 to-cyan-300",
	},
	{
		name: "APIs REST",
		icon: GitBranch,
		detail: "integraciones y servicios",
		tone: "from-fuchsia-300 to-violet-400",
	},
];

export const projects = [
	{
		title: "Sistema POS para Restaurantes",
		category: "Operaciones en tiempo real",
		image: "/projects/pos-realtime.svg",
		description:
			"Sistema para gestion de pedidos y cocina en tiempo real, con integracion de WebSockets para sincronizar la operacion del restaurante.",
		stack: ["Laravel", "Vue.js", "Vuetify", "MySQL", "WebSockets"],
		metrics: ["Pedidos en vivo", "Cocina sincronizada", "UX operativa"],
	},
	{
		title: "Facturacion Electronica",
		category: "Integracion y cumplimiento",
		image: "/projects/billing-platform.svg",
		description:
			"Sistema orientado al cumplimiento de normativas, generacion de PDFs personalizados e integracion con procesos de facturacion electronica.",
		stack: ["Laravel", "APIs REST", "MySQL", "PDF", "Vue.js"],
		metrics: ["Normativas", "PDFs personalizados", "Integracion fiscal"],
	},
	{
		title: "Dashboard Administrativo",
		category: "Aplicaciones web modernas",
		image: "/projects/admin-dashboard.svg",
		description:
			"Interfaces administrativas modernas enfocadas en UX/UI, consumo de APIs REST y experiencia clara para usuarios internos.",
		stack: ["Vue.js", "Vuetify", "Laravel API", "Inertia.js", "Vite"],
		metrics: ["UI/UX moderna", "APIs REST", "Componentes reutilizables"],
	},
];

export const services = [
	{
		title: "Software a medida",
		icon: BriefcaseBusiness,
		text: "Aplicaciones web disenadas alrededor del proceso real del negocio, con codigo mantenible y foco en resultados.",
	},
	{
		title: "Sistemas empresariales",
		icon: Layers3,
		text: "POS, facturacion electronica, paneles administrativos y flujos internos con interfaces claras y eficientes.",
	},
	{
		title: "Integracion de APIs",
		icon: Globe2,
		text: "Implementacion e integracion de APIs REST, pagos, facturacion electronica y servicios externos.",
	},
	{
		title: "Automatizacion",
		icon: Bot,
		text: "Automatizacion de procesos repetitivos con integraciones, eventos en tiempo real y flujos web eficientes.",
	},
];

export const approach = [
	{
		title: "Arquitectura clara",
		icon: CircuitBoard,
		text: "Codigo modular, contratos estables y decisiones tecnicas documentadas.",
	},
	{
		title: "Producto usable",
		icon: Sparkles,
		text: "Interfaces rapidas, legibles y pensadas para trabajo diario.",
	},
	{
		title: "Escala operativa",
		icon: Zap,
		text: "Performance, observabilidad y despliegues preparados para crecer.",
	},
	{
		title: "Confianza",
		icon: ShieldCheck,
		text: "Seguridad, permisos, backups, validaciones y auditoria donde importan.",
	},
];

export const capabilities = [
	{ icon: ShoppingCart, label: "POS" },
	{ icon: ReceiptText, label: "Facturacion" },
	{ icon: BarChart3, label: "Dashboards" },
	{ icon: Activity, label: "Realtime" },
	{ icon: FileCheck2, label: "Compliance" },
	{ icon: Boxes, label: "Inventario" },
	{ icon: Code2, label: "SaaS" },
];
