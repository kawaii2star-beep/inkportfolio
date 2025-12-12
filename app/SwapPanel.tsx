'use client'

import dynamic from 'next/dynamic'
import type { WidgetConfig } from '@lifi/widget'

const LiFiWidget = dynamic(
  () => import('@lifi/widget').then((mod) => mod.LiFiWidget),
  {
    ssr: false,
    loading: () => <div style={{ padding: 16 }}>loading swap...</div>,
  }
)

type Props = {
  theme: 'light' | 'dark'
}

export default function SwapPanel({ theme }: Props) {
  const config: Partial<WidgetConfig> = {
    appearance: theme,
    theme: {
      container: {
        borderRadius: '24px',
        border: '1px solid rgba(148,163,184,0.35)',
        boxShadow: '0px 10px 40px rgba(0,0,0,0.18)',
      },
    },
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginTop: 12 }}>
        <LiFiWidget integrator='ink-dashboard' config={config} />
      </div>
    </div>
  )
}
