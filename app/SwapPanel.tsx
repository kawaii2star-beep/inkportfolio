// app/SwapPanel.tsx
'use client';

import dynamic from 'next/dynamic';
import type { WidgetConfig } from '@lifi/widget';

type SwapPanelProps = {
  theme: 'light' | 'dark';
  onConnectWallet?: () => void;
};

// load LiFi widget only on the client
const LiFiWidget = dynamic(
  () => import('@lifi/widget').then((mod) => mod.LiFiWidget),
  {
    ssr: false,
    loading: () => (
      <div className="swap-widget-skeleton">
        loading swap widget...
      </div>
    ),
  }
);

export default function SwapPanel({ theme, onConnectWallet }: SwapPanelProps) {
  const config: Partial<WidgetConfig> =
    theme === 'dark'
      ? {
          appearance: 'dark',
          theme: {
            palette: {
              background: {
                default: '#020617',
                paper: '#020617',
              },
              primary: {
                main: '#a855f7',
              },
              secondary: {
                main: '#6366f1',
              },
              text: {
                primary: '#e5e7eb',
                secondary: '#9ca3af',
              },
            },
            typography: {
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
            },
            container: {
              borderRadius: 24,
              border: '1px solid rgba(148,163,184,0.35)',
              boxShadow: '0px 24px 60px rgba(15,23,42,0.9)',
            },
          },
          walletConfig: {
            onConnect: onConnectWallet ?? (() => {}),
          },
        }
      : {
          appearance: 'light',
          theme: {
            palette: {
              background: {
                default: '#f3f4f6',
                paper: '#ffffff',
              },
              primary: {
                main: '#6366f1',
              },
              secondary: {
                main: '#a855f7',
              },
              text: {
                primary: '#0f172a',
                secondary: '#6b7280',
              },
            },
            typography: {
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
            },
            container: {
              borderRadius: 24,
              border: '1px solid rgba(148,163,184,0.2)',
              boxShadow: '0px 18px 40px rgba(15,23,42,0.45)',
            },
          },
          walletConfig: {
            onConnect: onConnectWallet ?? (() => {}),
          },
        };

  return (
    <div className="swap-panel-root">
      <LiFiWidget config={config} integrator="ink-dashboard" />
    </div>
  );
}
