import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import './globals.css'
import Navbar from './components/navbar/page'
import Navbar2 from './dashboards/navbars'

const inter = Inter({ subsets: ['latin'] })

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Nzi Market',
  description: 'Facilité vous la vie.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="fr">
      <body  className={cn( "min-h-screen bg-background font-sans antialiased",
          fontSans.variable )}
      >
        <div className=' bg-gray-200 text-black pb-6'>
          <Navbar />
          {children}
          <Navbar2 />
        </div>
      </body>
    </html>
  )
}
