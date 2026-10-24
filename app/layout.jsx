import { Big_Shoulders_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Welcome ItzFizz",
  description: "Scroll-driven hero section animation built with Next.js and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-concrete font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
