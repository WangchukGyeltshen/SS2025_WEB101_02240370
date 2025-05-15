import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '../components/Layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TikTok Clone',
  description: 'A TikTok clone built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}