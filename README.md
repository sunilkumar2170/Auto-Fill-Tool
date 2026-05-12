# OpenResume

<div align="center">

```
 ██████╗ ██████╗ ███████╗███╗   ██╗    ██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
╚██████╔╝██║     ███████╗██║ ╚████║    ██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
```

**The open-source resume builder & parser — free, modern, private.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-open--resume.com-4F46E5?style=for-the-badge)](https://open-resume.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript)
[![Next.js](https://img.shields.io/badge/Next.js_13-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://github.com/vercel/next.js)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://github.com/facebook/react)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/tailwindlabs/tailwindcss)

---

*Give everyone free access to a modern professional resume — and the confidence to land their dream job.*

</div>

---

## ⚒️ Resume Builder

OpenResume's resume builder makes creating a polished, professional resume effortless.

![Resume Builder Demo](https://i.ibb.co/jzcrrt8/resume-builder-demo-optimize.gif)

### ✨ 5 Core Features

| # | Feature | What It Does |
|:-:|---------|-------------|
| 🔄 | **Real-Time UI Update** | The resume PDF updates live as you type — what you see is what you get, instantly. |
| 🎨 | **Modern Professional Design** | ATS-friendly layout adhering to U.S. best practices. Auto-formats fonts, sizes, margins, and bullets. Works great with top platforms like Greenhouse and Lever. |
| 🔒 | **Privacy First** | Runs 100% in your browser — no sign-up, no data leaves your machine. Works offline too! |
| 📄 | **Import Existing PDF** | Already have a resume? Import it and upgrade the design to a modern layout in seconds. |
| 🏆 | **Proven Track Record** | OpenResume users have landed interviews and offers at **Dropbox**, **Google**, **Meta**, and more. |

---

## 🔍 Resume Parser

Test your existing resume's ATS (Applicant Tracking System) readability with our powerful parser.

![Resume Parser Demo](https://i.ibb.co/JvSVwNk/resume-parser-demo-optimize.gif)

> 📖 Deep-dive into how it works: [Resume Parser Algorithm Deep Dive](https://open-resume.com/resume-parser)

---

## 📚 Tech Stack

> A carefully chosen, modern stack for performance, scalability, and developer experience.

| Category | Technology | Why We Chose It |
|----------|-----------|-----------------|
| 🟦 **Language** | [TypeScript](https://github.com/microsoft/TypeScript) | Static type checking catches bugs before runtime — safer, more maintainable code. |
| ⚛️ **UI Library** | [React](https://github.com/facebook/react) | Declarative, component-based architecture for building reactive and reusable UI. |
| 🗃️ **State Management** | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | Reduces Redux boilerplate while elegantly managing complex resume state. |
| 🎨 **CSS Framework** | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | Utility-first CSS for rapid, consistent styling without context-switching. |
| 🌐 **Web Framework** | [NextJS 13](https://github.com/vercel/next.js) | Static site generation + SEO-optimized React pages. |
| 📑 **PDF Reader** | [PDF.js](https://github.com/mozilla/pdf.js) | Reads and extracts content from PDF files for the resume parser. |
| 🖨️ **PDF Renderer** | [React-pdf](https://github.com/diegomura/react-pdf) | Creates downloadable PDF files from the resume builder output. |

---

## 📁 Project Structure

Built with **Next.js 13**, following its file-based routing structure. Source code lives in `src/app`.

```
src/app/
├── page.tsx                    ← 🏠 Home (hero, testimonials, logo cloud)
├── resume-import/
│   └── page.tsx                ← 📥 Import resume PDF
├── resume-builder/
│   └── page.tsx                ← 📝 Build & download resume
└── resume-parser/
    └── page.tsx                ← 🔍 Test ATS readability
```

| Route | Code Path | Description |
|-------|-----------|-------------|
| `/` | `/page.tsx` | Home page — hero section, auto-typing resume, steps, testimonials, logo cloud |
| `/resume-import` | `/resume-import/page.tsx` | Import from existing PDF via `ResumeDropzone` component |
| `/resume-builder` | `/resume-builder/page.tsx` | Build & download resume using `ResumeForm` + `Resume` components |
| `/resume-parser` | `/resume-parser/page.tsx` | Parse & test ATS readability via `parseResumeFromPdf` library |

---

## 💻 Local Development

Get up and running in minutes — choose your preferred method:

### 🚀 Method 1 — npm (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/xitanggg/open-resume.git

# 2. Navigate into the project
cd open-resume

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎉

---

### 🐳 Method 2 — Docker

```bash
# 1. Clone the repository
git clone https://github.com/xitanggg/open-resume.git

# 2. Navigate into the project
cd open-resume

# 3. Build the Docker image
docker build -t open-resume .

# 4. Start the container
docker run -p 3000:3000 open-resume
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser. 🎉

---

## 🌟 Why OpenResume?

```
╔══════════════════════════════════════════════════════╗
║  Free forever  ·  No sign-up  ·  Fully open-source  ║
║      Privacy-first  ·  ATS-optimized  ·  Modern      ║
╚══════════════════════════════════════════════════════╝
```

**OpenResume exists because everyone deserves a great resume — regardless of budget.**

---

<div align="center">

Made with ❤️ by the open-source community · [open-resume.com](https://open-resume.com)

</div>
