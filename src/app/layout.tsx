import { Header } from '@/Components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryClientCustomProvider } from '@/Contexts/QueryClientContext/QueryClientContext';
import { ThemeCustomProvider } from '@/Contexts/ThemeContext/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Initial project',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeCustomProvider>
          <QueryClientCustomProvider>
            <Header />
            <main className='m-8'>{children}</main>
          </QueryClientCustomProvider>
        </ThemeCustomProvider>
      </body>
    </html>
  )
}
