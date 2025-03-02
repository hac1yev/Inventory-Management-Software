import type { Metadata } from "next";
import '../styles/main.scss';
import "@uploadthing/react/styles.css";

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
        {children}
      </body>
    </html>
  );
}
