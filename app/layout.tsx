import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../components/Layout'
import { ThemeProvider } from '../components/ThemeProvider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta data-charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
                <title>Don Prasetiyo</title>
            </head>
            <Script src='https://kit.fontawesome.com/84d2741daf.js' crossOrigin='anonymous' strategy='afterInteractive'></Script>
            <Script src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js' strategy='afterInteractive'></Script>
            <Script src='https://www.google.com/recaptcha/api.js' strategy='afterInteractive'></Script>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Layout>{children}</Layout></ThemeProvider></body>
        </html>
    )
}