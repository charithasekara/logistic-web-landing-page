# 🚚 TransMax Logistics – Next.js Website

A modern, responsive logistics company website built with **Next.js App Router**, **Tailwind CSS**, and **ShadCN UI**.  
It features animated sections, service grids, carousels, testimonials, FAQ accordion, client logos, and a newsletter subscription system.

---

## 📦 Features

- ✅ Fully responsive layout
- ✨ Animated hero and client logo section
- 🧩 Bento-style services grid
- 💬 Testimonials + FAQ accordion
- 📰 News carousel section
- 📧 Weekly newsletter subscription
- ⚡ Optimized performance with `next/image`
- 🎨 Beautiful UI with ShadCN components and Tabler Icons

---

## 🛠️ Tech Stack

| Category         | Technology                             |
|------------------|-----------------------------------------|
| Framework        | [Next.js 15 (App Router)](https://nextjs.org/docs) |
| Styling          | [Tailwind CSS](https://tailwindcss.com) |
| UI Components    | [ShadCN UI](https://ui.shadcn.com)       |
| Icons            | [Tabler Icons](https://tabler.io/icons) |
| Images           | `next/image` (automatic optimization)   |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git@github.com:charithasekara/logistic-web-landing-page.git
cd transmax-logistics
```

### 2. Install Dependencies

Choose your package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📁 Project Structure

```
app/
  └── layout.tsx             # Root layout
  └── page.tsx               # Main homepage

components/
  ├── HeroSection.tsx
  ├── OurServices.tsx
  ├── StatsSection.tsx
  ├── TestimonialsSection.tsx
  ├── ClientLogos.tsx
  ├── NewsCarousel.tsx
  ├── FaqAccordion.tsx
  ├── Footer.tsx
  └── Button.tsx

public/
  └── images/                # Image assets

styles/
  └── globals.css            # Tailwind base styles
```
---

## 🧪 Useful Commands

| Command           | Description                  |
|------------------|------------------------------|
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run start`   | Start production server      |
| `npm run lint`    | Run ESLint                   |

---

## 👤 Author

**Charitha**  
Frontend Developer & UI/UX Engineer  
📫 [charithmadhushansekara@gmail.com]

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.
