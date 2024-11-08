import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/themeToggle";
import { NavigationMenuDemo } from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen min-h-screen w-screen max-w-screen flex flex-col relative">
            <div className="flex-grow w-screen overflow-x-hidden">
              <ModeToggle />
              <NavigationMenuDemo />
              {children}
            </div>
            hello
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
