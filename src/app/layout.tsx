import "../styles/globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-28 mt-12 sm:mt-8 md:mt-16 lg:mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}