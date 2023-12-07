import Link from '@/node_modules/next/link'
import type { Metadata } from 'next'
import { Inter, Urbanist, Unlock } from 'next/font/google'
import './globals.css'

//Fonts and their settings
const inter = Inter({ subsets: ['latin'], variable: "--font-inter"});
const urbanist = Urbanist({ subsets: ['latin'], variable: "--font-urbanist" });
const unlock = Unlock({weight: "400", subsets: ["latin"] , variable: "--font-unlock"});

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
    <html lang="en">
      <body className={urbanist.className}>
      <nav className='flex flex-col items-center justify-center p-14'>
        <ul className="flex text-lg gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/findourshops">Find our shops</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/user_profile">User Profile</Link>
          </li>
          <li>
            <Link href="/car_repair_topics">Car Repair Topics</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact Us</Link>
          </li>
          <li>
            <Link href="/disclaimers">Disclaimers and privacy policy</Link>
          </li>
        </ul>
      </nav>
        {children}
        </body>
    </html>
  )
}
