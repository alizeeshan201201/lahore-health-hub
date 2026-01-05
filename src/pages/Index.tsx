import { AppLayout } from '@/components/layout/AppLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickActions } from '@/components/home/QuickActions';
import { DonationStats } from '@/components/home/DonationStats';
import { HealthAlerts } from '@/components/home/HealthAlerts';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Index = () => {
  const { t, isUrdu } = useLanguage();

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-6">
        <HeroSection />
        
        <section>
          <h2 className={cn(
            'text-lg font-bold text-foreground mb-3',
            isUrdu && 'font-urdu text-right'
          )}>
            {isUrdu ? 'فوری کاروائیاں' : 'Quick Actions'}
          </h2>
          <QuickActions />
        </section>

        <section>
          <h2 className={cn(
            'text-lg font-bold text-foreground mb-3',
            isUrdu && 'font-urdu text-right'
          )}>
            {isUrdu ? 'کمیونٹی کا اثر' : 'Community Impact'}
          </h2>
          <DonationStats />
        </section>

        <HealthAlerts />
      </div>
    </AppLayout>
  );
};

export default Index;
