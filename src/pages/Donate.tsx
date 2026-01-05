import { Link } from 'react-router-dom';
import { Droplets, Heart, Wallet, ChevronRight, TrendingUp } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const donationTypes = [
  {
    id: 'blood',
    icon: Droplets,
    labelKey: 'bloodDonation' as const,
    descEn: 'Save lives by donating blood. Check your eligibility and find donation centers.',
    descUr: 'خون عطیہ کر کے زندگیاں بچائیں۔ اپنی اہلیت چیک کریں اور عطیہ مراکز تلاش کریں۔',
    variant: 'blood' as const,
    gradient: 'gradient-blood',
    stats: { donors: 342, units: 1247 },
  },
  {
    id: 'organ',
    icon: Heart,
    labelKey: 'organDonation' as const,
    descEn: 'Pledge to donate organs and give the gift of life to those in need.',
    descUr: 'اعضاء کا عطیہ دینے کا عہد کریں اور ضرورت مندوں کو زندگی کا تحفہ دیں۔',
    variant: 'organ' as const,
    gradient: 'gradient-organ',
    stats: { pledges: 89, matches: 23 },
  },
  {
    id: 'money',
    icon: Wallet,
    labelKey: 'moneyDonation' as const,
    descEn: 'Help patients with medical bills. 100% transparent with receipts.',
    descUr: 'مریضوں کے طبی بلوں میں مدد کریں۔ رسیدوں کے ساتھ 100% شفاف۔',
    variant: 'money' as const,
    gradient: 'gradient-money',
    stats: { raised: 'PKR 2.5M', cases: 156 },
  },
];

const Donate = () => {
  const { t, language, isUrdu } = useLanguage();

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-6">
        <div className={cn('text-center mb-6', isUrdu && 'font-urdu')}>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {t('donate')}
          </h1>
          <p className="text-muted-foreground text-sm">
            {isUrdu 
              ? 'آپ کا عطیہ زندگیاں بچا سکتا ہے'
              : 'Your donation can save lives'
            }
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {donationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.id} variant={type.variant} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center',
                      type.gradient
                    )}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-1 text-success text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>+12%</span>
                    </div>
                  </div>
                  <CardTitle className={cn(
                    'text-xl mt-3',
                    isUrdu && 'font-urdu text-right'
                  )}>
                    {t(type.labelKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className={cn(
                    'text-sm text-muted-foreground',
                    isUrdu && 'font-urdu text-right'
                  )}>
                    {language === 'ur' ? type.descUr : type.descEn}
                  </p>

                  <div className="flex items-center gap-4 text-sm">
                    {type.id === 'blood' && (
                      <>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.donors}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'عطیہ دہندگان' : 'donors'}
                          </span>
                        </div>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.units}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'یونٹس' : 'units'}
                          </span>
                        </div>
                      </>
                    )}
                    {type.id === 'organ' && (
                      <>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.pledges}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'عہد' : 'pledges'}
                          </span>
                        </div>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.matches}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'مماثلت' : 'matches'}
                          </span>
                        </div>
                      </>
                    )}
                    {type.id === 'money' && (
                      <>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.raised}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'جمع' : 'raised'}
                          </span>
                        </div>
                        <div className={isUrdu ? 'font-urdu' : ''}>
                          <span className="font-bold text-foreground">{type.stats.cases}</span>
                          <span className="text-muted-foreground ml-1">
                            {isUrdu ? 'کیسز' : 'cases'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <Link to={`/donate/${type.id}`}>
                    <Button 
                      variant={type.id === 'blood' ? 'blood' : type.id === 'organ' ? 'organ' : 'money'} 
                      className="w-full group"
                    >
                      <span className={isUrdu ? 'font-urdu' : ''}>
                        {type.id === 'money' ? t('donateNow') : t('continue')}
                      </span>
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Donate;
