"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }}
      className="light scroll-smooth"
    >
      <head>
        <title>Keshav's Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Keshav's Portfolio built using Next.js, React.js, TailwindCss."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider enableSystem="true" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
