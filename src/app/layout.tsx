import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navbar } from "@/components/sections/navbar/navbar.section";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/utils/material-ui-theme";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleani",
  description: "La startup mexicana, innovando la industria de la limpieza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
