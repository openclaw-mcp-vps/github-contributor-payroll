import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Contributor Payroll — Calculate & Pay Contributors Fairly',
  description: 'Analyze GitHub repos to calculate fair payment distribution based on commits, lines changed, and issue resolutions. Generate PDF invoices automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43bbeee6-31d1-443d-970a-4892a3e4bf25"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
