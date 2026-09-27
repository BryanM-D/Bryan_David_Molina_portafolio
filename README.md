# Portafolio Personal - Proyecto Evaluativo 1

Proyecto de hoja de vida y portafolio profesional desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**, preparado para despliegue en **Vercel**.

## 👨‍💻 Autor

**Bryan David Molina Domínguez**

- GitHub: [BryanM-D](https://github.com/BryanM-D)
- Correo: bryan.molina@udea.edu.co
- Ciudad: La Estrella, Colombia

---

# Objetivo Académico

Este proyecto cumple con los requisitos establecidos para el **Proyecto Evaluativo 1 de Ingeniería Web**.

### Funcionalidades implementadas

✅ Menú lateral izquierdo con información personal.

✅ Información de contacto.

✅ Idiomas y niveles de dominio.

✅ Lenguajes de programación.

✅ Habilidades complementarias.

✅ Contenido principal con desplazamiento vertical.

✅ Perfil profesional con ventana modal informativa.

✅ Sección de conocimientos mediante componentes reutilizables.

✅ Sección de educación mediante componentes reutilizables.

✅ Portafolio de proyectos con scroll horizontal.

✅ Modal para visualizar información detallada de cada proyecto.

✅ Pie de página personalizado.

✅ Barra lateral de redes sociales.

✅ Diseño responsive para dispositivos móviles, tabletas y escritorio.

✅ Implementación con Tailwind CSS.

✅ Arquitectura basada en Atomic Design.

✅ Más de 6 componentes reutilizables.

---

# 🛠 Tecnologías Utilizadas

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Git y GitHub
- Vercel

---

# 🏗 Arquitectura del Proyecto

```text
src/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── atoms/
│   │   ├── IconButton.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Tag.tsx
│   │
│   ├── molecules/
│   │   ├── EducationCard.tsx
│   │   ├── KnowledgeCard.tsx
│   │   ├── Modal.tsx
│   │   └── ProjectCard.tsx
│   │
│   └── organisms/
│       ├── EducationSection.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── KnowledgeSection.tsx
│       ├── PortfolioSection.tsx
│       ├── Sidebar.tsx
│       └── SocialRail.tsx
│
├── data/
│   └── portfolio.ts
│
└── types/
    └── portfolio.ts
```

---

# ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/BryanM-D/Bryan_David_Molina_portafolio.git
```

Ingresa al proyecto:

```bash
cd Bryan_David_Molina_portafolio/portafolio-nextjs
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

---

# ✅ Validación del Proyecto

Antes de entregar o desplegar el proyecto, ejecutar:

```bash
npm run lint
```

```bash
npm run build
```

El proyecto no debe presentar errores en ninguno de estos comandos.

---

# 🌿 Flujo de Trabajo con Git

Inicialización del repositorio:

```bash
git init
git add .
git commit -m "feat: initial portfolio implementation"

git branch -M main

git remote add origin https://github.com/BryanM-D/Bryan_David_Molina_portafolio.git

git push -u origin main
```

Se recomienda realizar commits frecuentes durante el desarrollo.

---

# 🚀 Despliegue en Vercel

1. Iniciar sesión en Vercel utilizando GitHub.
2. Importar el repositorio.
3. Vercel detectará automáticamente la configuración de Next.js.
4. Ejecutar el despliegue.
5. Configurar el dominio del proyecto.

Ejemplo:

```text

```

---

# 📋 Lista de Verificación de Entrega

- [ ] Datos personales actualizados.
- [ ] Fotografía profesional.
- [ ] Cuenta de GitHub actualizada.
- [ ] Perfil de LinkedIn actualizado.
- [ ] Formación académica actualizada.
- [ ] Mínimo tres proyectos propios o académicos.
- [ ] Validación ortográfica completa.
- [ ] Pruebas en móvil.
- [ ] Pruebas en tableta.
- [ ] Pruebas en escritorio.
- [ ] Ejecutar `npm run lint`.
- [ ] Ejecutar `npm run build`.
- [ ] Repositorio nombrado correctamente.
- [ ] Profesor agregado como colaborador (si aplica).
- [ ] Despliegue en Vercel funcionando.
- [ ] URL del despliegue incluida en el repositorio.
- [ ] Último commit realizado antes de la fecha de entrega.

---

# ✨ Funcionalidades de Creatividad

### Implementadas

- Microinteracciones visuales.
- Modal accesible.
- Cierre mediante tecla ESC.
- Scroll horizontal con scroll-snap.
- Diseño responsive.
- Jerarquía visual personalizada.

### Mejoras Futuras

- Modo oscuro.
- Filtro dinámico de proyectos.
- Animaciones al entrar en pantalla.
- Descarga de CV en PDF.
- Formulario de contacto.
- Integración con backend.
- Blog personal.

---

# 📄 Licencia

Proyecto desarrollado con fines académicos para la asignatura de Ingeniería Web.

© 2026 Bryan David Molina Domínguez.
