import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo list App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Menu de navigation */}
          <nav className="bg-gray-600 text-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <Link href="/">
                    <span className="text-xl font-semibold hover:text-gray-200">MyApp</span>
                  </Link>
                  <Link href="/">
                    <span className="hover:text-gray-200">Todo</span>
                  </Link>
                  <Link href="/about">
                    <span className="hover:text-gray-200">About</span>
                  </Link>
                  <Link href="/dashboard">
                    <span className="hover:text-gray-200">Dashboard</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Contenu principal */}
          <ReactQueryProvider>
            <main className="flex-grow bg-gray-100">
              {children}
            </main>
          </ReactQueryProvider>

          {/* Pied de page */}
          <footer className="bg-gray-800 text-white text-center py-4">
            © 2024 MyApp. Tous droits réservés.
          </footer>
        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
