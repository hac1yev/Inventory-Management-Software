import type { Metadata } from "next";
import '../styles/main.scss';
import "@uploadthing/react/styles.css";
import ToasterComponent from "@/components/ToasterComponent";

export const metadata: Metadata = {
  title: "Inventory System",
  description: "Inventory Management Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToasterComponent />
        {children}
      </body>
    </html>
  );
}
