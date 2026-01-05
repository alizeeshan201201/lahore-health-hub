import { AlertTriangle, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const alerts = [
  {
    id: 1,
    titleEn: 'Dengue Alert: High Risk Areas',
    titleUr: 'ڈینگی الرٹ: زیادہ خطرے والے علاقے',
    severity: 'high',
  },
  {
    id: 2,
    titleEn: 'Smog Advisory: Limit Outdoor Activities',
    titleUr: 'اسموگ ایڈوائزری: باہری سرگرمیاں محدود کریں',
    severity: 'medium',
  },
  {
    id: 3,
    titleEn: 'Flu Season: Get Vaccinated',
    titleUr: 'فلو کا موسم: ویکسین لگوائیں',
    severity: 'low',
  },
];

export function HealthAlerts() {
  const { t, language, isUrdu } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className={cn(
          'text-lg font-bold text-foreground',
          isUrdu && 'font-urdu'
        )}>
          {t('alerts')}
        </h2>
        <button className="text-sm text-primary font-medium flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            variant={alert.severity === 'high' ? 'emergency' : 'default'}
            className="cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-3 flex items-center gap-3">
              <div className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                alert.severity === 'high' && 'bg-emergency/20 text-emergency',
                alert.severity === 'medium' && 'bg-warning/20 text-warning',
                alert.severity === 'low' && 'bg-primary/20 text-primary'
              )}>
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className={cn(
                'text-sm font-medium text-foreground flex-1',
                isUrdu && 'font-urdu text-right'
              )}>
                {language === 'ur' ? alert.titleUr : alert.titleEn}
              </p>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
