// app/SwapPanel.tsx
'use client';

type SwapPanelProps = {
  theme: 'light' | 'dark';
};

export default function SwapPanel({ theme }: SwapPanelProps) {
  return (
    <div className="swap-panel-root">
      <div className="swap-panel-placeholder">
        swap coming soon
      </div>
    </div>
  );
}
