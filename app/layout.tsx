import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad-umer-portfolio-kappa.vercel.app'),
  title: 'Muhammad Umer | AI Automation Engineer',
  description:
    'Muhammad Umer builds practical automation with Python, AI, APIs, and business tools.',
  keywords: [
    'Muhammad Umer',
    'AI Automation Engineer',
    'Python Developer',
    'AI Automation',
    'API Integrations',
    'Workflow Automation',
  ],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Muhammad Umer | AI Automation Engineer',
    description:
      'Practical automation built with Python, AI, APIs, and business tools.',
    type: 'website',
    url: 'https://muhammad-umer-portfolio-kappa.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
