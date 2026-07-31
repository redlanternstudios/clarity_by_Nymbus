import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clarity by Nymbus',
  description: 'Loan servicing intelligence platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#1c2027', color: '#f3f6f7' }}>
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{children}</body>
    </html>
  );
}
