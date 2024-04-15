import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Royan Dugu - Full Stack Web Application Developer | Crafting Seamless Digital Solutions',
  description: "Elevate your digital presence with Royan Dugu, a seasoned full stack web application developer. Expertise in frontend and backend technologies to create dynamic, user-centric web solutions. Let's collaborate to bring your vision to life!",
  keywords:"Royan Dugu, Full Stack Developer, Web Application Developer, Frontend Development, Backend Development, User-Centric Solutions, Digital Solutions, Web Development Expertise"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        
        {children}
        
        <Footer/>
      </body>
    </html>
  )
}
