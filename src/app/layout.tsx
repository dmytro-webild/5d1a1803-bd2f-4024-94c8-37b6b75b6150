import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Hotel Moon Palace Kolwezi | Prestige & Luxe',
  description: 'Séjournez au Hotel Moon Palace Kolwezi, l\'excellence et le prestige au cœur de la ville. Services 5 étoiles pour vos voyages d\'affaires et moments de détente.',
  openGraph: {
    "title": "Hotel Moon Palace Kolwezi",
    "description": "L'excellence au cœur de Kolwezi.",
    "siteName": "Hotel Moon Palace"
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
