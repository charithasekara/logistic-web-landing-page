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
| Framework        | [Next.js 14+ (App Router)](https://nextjs.org/docs) |
| Styling          | [Tailwind CSS](https://tailwindcss.com) |
| UI Components    | [ShadCN UI](https://ui.shadcn.com)       |
| Icons            | [Tabler Icons](https://tabler.io/icons) |
| Images           | `next/image` (automatic optimization)   |
| Deployment       | [Vercel](https://vercel.com)            |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/transmax-logistics.git
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

## 🌐 Environment Variables

If you're using APIs or external services, create a `.env.local` file like:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📤 Deployment

This app is ready to deploy on [Vercel](https://vercel.com):

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🧪 Useful Commands

| Command           | Description                  |
|------------------|------------------------------|
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run start`   | Start production server      |
| `npm run lint`    | Run ESLint                   |

---

## 🤝 Contributing

Pull requests are welcome!

### To Contribute:

```bash
git checkout -b feature/your-feature
npm run dev
# Make your changes
git commit -m "Add your feature"
git push origin feature/your-feature
```

Please open an issue first for major feature requests or changes.

---

## 👤 Author

**Charitha**  
Frontend Developer & UI/UX Engineer  
📫 [YourEmail@example.com](mailto:youremail@example.com)  
🌐 [GitHub Profile](https://github.com/your-username)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.
