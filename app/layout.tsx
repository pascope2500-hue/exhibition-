import type { Metadata } from 'next'
import './globals.css'
import { Oswald } from 'next/font/google'
import Header from '@/components/header'
import WhatsappFixed from '@/components/whatsappFixed'
import Footer from '@/components/footer'
import BackToTop from '@/components/backToTop'

export const metadata: Metadata = {
  title: 'Exhibitions',
  description: 'Showcasing the best exhibitions in East Africa',
}



const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  variable: '--font-oswald',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable}`}>
      <head />
      <body className='font-sans'>
          <Header />
          <WhatsappFixed/>
        {children}
        <BackToTop/>
        <Footer />
        </body>

        
    </html>
  )
}
