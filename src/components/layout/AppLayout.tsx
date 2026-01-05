import { ReactNode } from 'react';
import { Header } from './Header';
import { MobileNav } from './MobileNav';
import { EmergencyFAB } from '@/components/emergency/EmergencyFAB';

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideHeader?: boolean;
}

export function AppLayout({ children, hideNav, hideHeader }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!hideHeader && <Header />}
      <main className="flex-1 pb-24">
        {children}
      </main>
      {!hideNav && <MobileNav />}
      <EmergencyFAB />
    </div>
  );
}
