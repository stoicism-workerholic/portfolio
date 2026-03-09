import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Balaadithya Pilla | Portfolio',
    description: 'Software Engineer | Full-Stack & ML Specialist. Architecting resilient pipelines and beautifully secure digital experiences.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
