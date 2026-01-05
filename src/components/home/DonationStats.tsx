import { Droplets, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const stats = [
  { 
    icon: Droplets, 
    valueEn: '1,247', 
    valueUr: '۱,۲۴۷',
    labelEn: 'Blood Units',
    labelUr: 'خون کی یونٹس',
    color: 'blood',
    gradient: 'gradient-blood'
  },
  { 
    icon: Heart, 
    valueEn: '89', 
    valueUr: '۸۹',
    labelEn: 'Lives Saved',
    labelUr: 'زندگیاں بچائیں',
    color: 'organ',
    gradient: 'gradient-organ'
  },
  { 
    icon: Users, 
    valueEn: '5,432', 
    valueUr: '۵,۴۳۲',
    labelEn: 'Active Donors',
    labelUr: 'فعال عطیہ دہندگان',
    color: 'money',
    gradient: 'gradient-money'
  },
];

export function DonationStats() {
  const { language, isUrdu } = useLanguage();

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} variant="glass" className="text-center">
            <CardContent className="p-3">
              <div className={cn(
                'w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center',
                stat.gradient
              )}>
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className={cn(
                'text-lg font-bold text-foreground',
                isUrdu && 'font-urdu'
              )}>
                {language === 'ur' ? stat.valueUr : stat.valueEn}
              </p>
              <p className={cn(
                'text-[10px] text-muted-foreground',
                isUrdu && 'font-urdu'
              )}>
                {language === 'ur' ? stat.labelUr : stat.labelEn}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
