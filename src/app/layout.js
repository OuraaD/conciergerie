import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google"; // Import des polices valides

const inter = Inter({
  variable: "--font-inter",  // Définir la variable CSS
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",  // Définir la variable CSS
  subsets: ["latin"],
});

export const metadata = {
  title: "Conciergerie Immobilière",
  description: "Services de conciergerie immobilière de qualité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
