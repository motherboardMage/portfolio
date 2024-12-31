import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'Nishchay Mishra - Portfolio',
  description: 'Women developer, Locked tf in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}

