import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PROJECT NOVA - Web3 Mining Super-App',
  description:
    'The First Luxury Web3 Mining Super-App on Telegram. Join the next global phenomenon.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
