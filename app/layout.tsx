import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Dispute Predictor',
  description: 'Predict which invoices will be disputed before they happen. AI-powered risk scoring for SaaS and e-commerce businesses.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d18ce7b-6b62-48be-9b7b-db543bfac51a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
