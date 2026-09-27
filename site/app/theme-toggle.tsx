'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === 'dark';

  return <Button
    type="button"
    variant="ghost"
    className="theme-toggle"
    disabled={!mounted}
    aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    onClick={() => setTheme(dark ? 'light' : 'dark')}
  >
    {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    <span>{dark ? 'Light' : 'Dark'}</span>
  </Button>;
}
