// app/SwapPanel.tsx
'use client';

import type { WidgetConfig } from '@lifi/widget';
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget';
import { ClientOnly } from './ClientOnly';

type SwapPanelProps = {
  theme: 'light' | 'dark';
};

export default function SwapPanel({ theme }: SwapPanelProps) {
  const config = {
    appearance: theme === 'dark' ? 'dark' : 'light',
    theme: {
      container: {
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.38)',
        borderRadius: 24,
        border: '1px solid rgba(148,163,184,0.35)',
      },
    },
  } as Partial<WidgetConfig>;

  return (
    <div className='swap-panel-root'>
      <ClientOnly fallback={<WidgetSkeleton config={config} />}>
        <LiFiWidget config={config} integrator='ink-dashboard' />
      </ClientOnly>
    </div>
  );
}
