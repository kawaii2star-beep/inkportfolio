import './globals.css'
import type { ReactNode } from 'react'
import { InkWagmiProvider } from './ink-wagmi-provider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <InkWagmiProvider>
          {children}
        </InkWagmiProvider>
      </body>
    </html>
  )
}
