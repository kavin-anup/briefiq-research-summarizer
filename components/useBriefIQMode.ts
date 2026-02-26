
'use client';

import { useState, useEffect } from 'react';

export type BriefIQMode = 'general' | 'medical';

export function useBriefIQMode(): BriefIQMode {
  const [mode, setMode] = useState<BriefIQMode>('general');

  useEffect(() => {
    const stored = localStorage.getItem('briefiq_mode');
    if (stored === 'medical' || stored === 'general') {
      setMode(stored);
    }
  }, []);

  return mode;
}
