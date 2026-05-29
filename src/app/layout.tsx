import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PROJECT NOVA - Luxury Web3 Mining',
  description: 'The First Luxury Web3 Mining Super-App on Telegram',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-nova-dark text-white">
        {children}
      </body>
    </html>
  );
}
