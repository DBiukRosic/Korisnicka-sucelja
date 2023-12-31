import Link from '@/node_modules/next/link';
import type { Metadata } from 'next';
import { Inter, Urbanist, Unlock, Sarpanch } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

//Fonts and their settings
const inter = Inter({ subsets: ['latin'], variable: "--font-inter"});
const urbanist = Urbanist({ subsets: ['latin'], variable: "--font-urbanist" });
const unlock = Unlock({weight: "400", subsets: ["latin"] , variable: "--font-unlock"});
const sarpanch = Sarpanch({weight: "400", subsets: ["latin"] , variable: "--font-sarpanch"});

//Tab name and description
export const metadata: Metadata = {
  title: 'CAR(E)',
  description: 'CAR(E) webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(unlock.variable, inter.variable, urbanist.variable, sarpanch.variable)}>
      <body className={urbanist.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
