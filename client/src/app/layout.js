// pages/layout.js
import localFont from 'next/font/local'
import './globals.css'

// Local font imports
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

// Export metadata for SEO
export const metadata = {
    title: 'Viscan Stress Predictor',
    description: 'A stress predictor model for Viscans',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* You can also manually set the metadata here if needed */}
                <meta name="description" content={metadata.description} />
                <title>{metadata.title}</title>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{ backgroundColor: 'white', color: 'black' }}
            >
                {children}
            </body>
        </html>
    )
}
