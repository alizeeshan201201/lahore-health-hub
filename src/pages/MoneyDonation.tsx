import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { 
  Wallet, 
  ChevronLeft,
  ChevronRight,
  Receipt,
  Heart,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const recentCases = [
  {
    id: 1,
    patientName: 'Muhammad Usman',
    condition: 'Kidney Dialysis',
    conditionUr: 'گردے کا ڈائیلسز',
    hospital: 'Services Hospital',
    amountNeeded: 150000,
    amountRaised: 98000,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    patientName: 'Ayesha Bibi',
    condition: 'Heart Surgery',
    conditionUr: 'دل کی سرجری',
    hospital: 'Punjab Institute of Cardiology',
    amountNeeded: 500000,
    amountRaised: 320000,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=100&h=100&fit=crop',
  },
];

const MoneyDonation = () => {
  const { t, language, isUrdu } = useLanguage();
  const { toast } = useToast();
  const [amount, setAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState('');

  const handlePresetAmount = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    const num = parseInt(value) || 0;
    setCustomAmount(value);
    setAmount(num);
  };

  const handleDonate = () => {
    if (amount < 100) {
      toast({
        title: isUrdu ? 'کم از کم رقم' : 'Minimum Amount',
        description: isUrdu 
          ? 'براہ کرم کم از کم 100 روپے عطیہ کریں' 
          : 'Please donate at least PKR 100',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: isUrdu ? 'شکریہ!' : 'Thank you!',
      description: isUrdu 
        ? `آپ کا PKR ${amount.toLocaleString()} کا عطیہ موصول ہوگیا` 
        : `Your donation of PKR ${amount.toLocaleString()} has been received`,
    });
  };

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <Link to="/donate">
            <Button variant="ghost" size="icon-sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className={cn(
            'text-xl font-bold text-foreground',
            isUrdu && 'font-urdu'
          )}>
            {t('moneyDonation')}
          </h1>
        </div>

        {/* Transparency Banner */}
        <Card variant="money" className="bg-money/5">
          <CardContent className="p-4 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-money flex-shrink-0" />
            <div>
              <p className={cn(
                'font-semibold text-foreground text-sm',
                isUrdu && 'font-urdu'
              )}>
                {isUrdu ? '100% شفاف' : '100% Transparent'}
              </p>
              <p className={cn(
                'text-xs text-muted-foreground',
                isUrdu && 'font-urdu'
              )}>
                {isUrdu 
                  ? 'ہر عطیہ کی رسید اور استعمال کی تفصیلات دستیاب ہیں' 
                  : 'Every donation receipt and usage details are available'
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Amount Selection */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base',
              isUrdu && 'font-urdu'
            )}>
              {isUrdu ? 'رقم منتخب کریں' : 'Select Amount'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handlePresetAmount(value)}
                  className={cn(
                    'p-3 rounded-xl text-sm font-bold transition-all duration-200',
                    amount === value && !customAmount
                      ? 'gradient-money text-money-foreground scale-105'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  )}
                >
                  PKR {value.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                PKR
              </span>
              <input
                type="number"
                placeholder={isUrdu ? 'دوسری رقم' : 'Custom amount'}
                value={customAmount}
                onChange={(e) => handleCustomAmount(e.target.value)}
                className={cn(
                  'w-full h-12 pl-12 pr-4 rounded-xl bg-secondary border-0 text-foreground text-lg font-bold placeholder:text-muted-foreground placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-money',
                  isUrdu && 'font-urdu text-right pr-12 pl-4'
                )}
              />
            </div>

            <Button 
              variant="money" 
              size="lg"
              className="w-full"
              onClick={handleDonate}
              disabled={amount < 100}
            >
              <Wallet className="w-5 h-5" />
              <span className={isUrdu ? 'font-urdu' : ''}>
                {amount > 0 
                  ? `${t('donateNow')} - PKR ${amount.toLocaleString()}`
                  : t('donateNow')
                }
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Active Cases */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className={cn(
              'text-lg font-bold text-foreground',
              isUrdu && 'font-urdu'
            )}>
              {isUrdu ? 'فعال کیسز' : 'Active Cases'}
            </h2>
            <button className="text-sm text-primary font-medium flex items-center gap-1">
              {isUrdu ? 'سب دیکھیں' : 'View All'} <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {recentCases.map((caseItem) => {
              const progress = (caseItem.amountRaised / caseItem.amountNeeded) * 100;
              return (
                <Card key={caseItem.id} variant="glass">
                  <CardContent className="p-4">
                    <div className="flex gap-3 mb-3">
                      <div 
                        className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${caseItem.image})` }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{caseItem.patientName}</h3>
                        <p className={cn(
                          'text-sm text-muted-foreground',
                          isUrdu && 'font-urdu'
                        )}>
                          {language === 'ur' ? caseItem.conditionUr : caseItem.condition}
                        </p>
                        <p className="text-xs text-muted-foreground">{caseItem.hospital}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {isUrdu ? 'جمع:' : 'Raised:'} PKR {caseItem.amountRaised.toLocaleString()}
                        </span>
                        <span className="font-semibold text-foreground">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-money rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-right">
                        {isUrdu ? 'ہدف:' : 'Goal:'} PKR {caseItem.amountNeeded.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <Button variant="money" size="sm" className="flex-1">
                        <Heart className="w-4 h-4" />
                        <span className={isUrdu ? 'font-urdu' : ''}>{t('donateNow')}</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* View Receipts */}
        <Button variant="outline" className="w-full">
          <Receipt className="w-5 h-5" />
          <span className={isUrdu ? 'font-urdu' : ''}>{t('viewReceipts')}</span>
        </Button>
      </div>
    </AppLayout>
  );
};

export default MoneyDonation;
