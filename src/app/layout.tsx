import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hello World Server',
  description: 'Minimal Next.js + Tailwind app with an API route',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
