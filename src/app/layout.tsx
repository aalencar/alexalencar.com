import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Alencar - Software Developer",
  description:
    "Hi, I'm Alex, a creative software developer based in Prague CZ.",
};

const links = [
  { name: "about", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "articles", href: "/articles" },
  { name: "timeline", href: "/timeline" },
  { name: "reading", href: "/reading" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col gap-8 bg-slate-900 p-4 text-white`}
      >
        <header className="flex flex-col items-center justify-between gap-2">
          <h1 className="text-3xl font-bold">Alex Alencar</h1>
          <nav className="flex gap-4">
            {links.map((l) => (
              <Link key={l.name} href={l.href}>
                {l.name}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
