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
  title: 'Muhammad Umer | AI Automation Engineer',
  description:
    'Muhammad Umer is an AI Automation Engineer specializing in Python, AI-powered workflows, API integrations, business automation, and practical software systems.',
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
      'Python automation, AI-powered workflows, API integrations, and practical software systems.',
    type: 'website',
    url: 'https://muhammad-umer-automation.aiuser716378.chatgpt.site',
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
