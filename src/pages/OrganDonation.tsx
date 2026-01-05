import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { 
  Heart, 
  ChevronLeft,
  Check,
  Info,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const livingOrgans = [
  { id: 'kidney', nameEn: 'One Kidney', nameUr: 'ایک گردہ', icon: '🫘' },
  { id: 'liver_partial', nameEn: 'Partial Liver', nameUr: 'جزوی جگر', icon: '🫀' },
  { id: 'bone_marrow', nameEn: 'Bone Marrow', nameUr: 'بون میرو', icon: '🦴' },
];

const afterDeathOrgans = [
  { id: 'heart', nameEn: 'Heart', nameUr: 'دل', icon: '❤️' },
  { id: 'both_kidneys', nameEn: 'Both Kidneys', nameUr: 'دونوں گردے', icon: '🫘' },
  { id: 'lungs', nameEn: 'Lungs', nameUr: 'پھیپھڑے', icon: '🫁' },
  { id: 'corneas', nameEn: 'Corneas', nameUr: 'کارنیا', icon: '👁️' },
  { id: 'liver', nameEn: 'Liver', nameUr: 'جگر', icon: '🫀' },
  { id: 'pancreas', nameEn: 'Pancreas', nameUr: 'لبلبہ', icon: '🩺' },
];

const OrganDonation = () => {
  const { t, language, isUrdu } = useLanguage();
  const { toast } = useToast();
  const [livingPledges, setLivingPledges] = useState<string[]>([]);
  const [afterDeathPledges, setAfterDeathPledges] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleLivingPledge = (id: string) => {
    setLivingPledges((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleAfterDeathPledge = (id: string) => {
    setAfterDeathPledges((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmitPledge = () => {
    if (livingPledges.length === 0 && afterDeathPledges.length === 0) {
      toast({
        title: isUrdu ? 'کوئی عہد منتخب نہیں' : 'No pledge selected',
        description: isUrdu 
          ? 'براہ کرم کم از کم ایک عضو منتخب کریں' 
          : 'Please select at least one organ to pledge',
        variant: 'destructive',
      });
      return;
    }
    setShowSuccess(true);
    toast({
      title: isUrdu ? 'شکریہ!' : 'Thank you!',
      description: t('pledgeSuccess'),
    });
  };

  if (showSuccess) {
    return (
      <AppLayout>
        <div className="px-4 py-8 flex flex-col items-center justify-center min-h-[60vh] text-center animate-scale-in">
          <div className="w-24 h-24 rounded-full gradient-organ flex items-center justify-center mb-6 shadow-glow">
            <Sparkles className="w-12 h-12 text-organ-foreground" />
          </div>
          <h1 className={cn(
            'text-2xl font-bold text-foreground mb-3',
            isUrdu && 'font-urdu'
          )}>
            {isUrdu ? 'آپ ہیرو ہیں!' : "You're a Hero!"}
          </h1>
          <p className={cn(
            'text-muted-foreground mb-6 max-w-xs',
            isUrdu && 'font-urdu'
          )}>
            {t('pledgeSuccess')}
          </p>
          <div className="space-y-2 mb-6">
            {livingPledges.length > 0 && (
              <p className={cn('text-sm text-foreground', isUrdu && 'font-urdu')}>
                <span className="font-semibold">{t('livingDonation')}:</span>{' '}
                {livingPledges.map((id) => {
                  const organ = livingOrgans.find((o) => o.id === id);
                  return language === 'ur' ? organ?.nameUr : organ?.nameEn;
                }).join(', ')}
              </p>
            )}
            {afterDeathPledges.length > 0 && (
              <p className={cn('text-sm text-foreground', isUrdu && 'font-urdu')}>
                <span className="font-semibold">{t('afterDeathDonation')}:</span>{' '}
                {afterDeathPledges.map((id) => {
                  const organ = afterDeathOrgans.find((o) => o.id === id);
                  return language === 'ur' ? organ?.nameUr : organ?.nameEn;
                }).join(', ')}
              </p>
            )}
          </div>
          <Link to="/">
            <Button variant="hero" size="lg">
              <span className={isUrdu ? 'font-urdu' : ''}>{t('home')}</span>
            </Button>
          </Link>
        </div>
      </AppLayout>
    );
  }

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
            {t('organDonation')}
          </h1>
        </div>

        {/* Info Card */}
        <Card variant="organ" className="bg-organ/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-organ flex-shrink-0 mt-0.5" />
            <p className={cn(
              'text-sm text-foreground',
              isUrdu && 'font-urdu text-right'
            )}>
              {isUrdu 
                ? 'آپ کا عہد زندگیاں بچا سکتا ہے۔ آپ اپنے عہد کو کسی بھی وقت منسوخ یا تبدیل کر سکتے ہیں۔' 
                : 'Your pledge can save lives. You can cancel or modify your pledge at any time.'
              }
            </p>
          </CardContent>
        </Card>

        {/* Living Donation */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base flex items-center gap-2',
              isUrdu && 'font-urdu'
            )}>
              <Heart className="w-5 h-5 text-organ" />
              {t('livingDonation')}
            </CardTitle>
            <p className={cn(
              'text-xs text-muted-foreground',
              isUrdu && 'font-urdu'
            )}>
              {isUrdu 
                ? 'یہ اعضاء زندگی میں عطیہ کیے جا سکتے ہیں' 
                : 'These organs can be donated while alive'
              }
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {livingOrgans.map((organ) => {
                const isSelected = livingPledges.includes(organ.id);
                return (
                  <button
                    key={organ.id}
                    onClick={() => toggleLivingPledge(organ.id)}
                    className={cn(
                      'w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200',
                      isSelected 
                        ? 'gradient-organ text-organ-foreground' 
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{organ.icon}</span>
                      <span className={cn('font-medium', isUrdu && 'font-urdu')}>
                        {language === 'ur' ? organ.nameUr : organ.nameEn}
                      </span>
                    </span>
                    {isSelected && <Check className="w-5 h-5" />}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* After Death Donation */}
        <Card variant="glass">
          <CardHeader className="pb-2">
            <CardTitle className={cn(
              'text-base flex items-center gap-2',
              isUrdu && 'font-urdu'
            )}>
              <Heart className="w-5 h-5 text-organ" />
              {t('afterDeathDonation')}
            </CardTitle>
            <p className={cn(
              'text-xs text-muted-foreground',
              isUrdu && 'font-urdu'
            )}>
              {isUrdu 
                ? 'یہ اعضاء وفات کے بعد عطیہ کیے جا سکتے ہیں' 
                : 'These organs can be donated after death'
              }
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-2">
              {afterDeathOrgans.map((organ) => {
                const isSelected = afterDeathPledges.includes(organ.id);
                return (
                  <button
                    key={organ.id}
                    onClick={() => toggleAfterDeathPledge(organ.id)}
                    className={cn(
                      'flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200',
                      isSelected 
                        ? 'gradient-organ text-organ-foreground' 
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    )}
                  >
                    <span className="text-2xl">{organ.icon}</span>
                    <span className={cn('text-xs font-medium text-center', isUrdu && 'font-urdu')}>
                      {language === 'ur' ? organ.nameUr : organ.nameEn}
                    </span>
                    {isSelected && <Check className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        {(livingPledges.length > 0 || afterDeathPledges.length > 0) && (
          <div className="fixed bottom-20 left-4 right-4 z-30">
            <Button
              variant="organ"
              size="xl"
              className="w-full shadow-lg"
              onClick={handleSubmitPledge}
            >
              <Heart className="w-5 h-5" />
              <span className={isUrdu ? 'font-urdu' : ''}>
                {isUrdu 
                  ? `عہد کریں (${livingPledges.length + afterDeathPledges.length} اعضاء)` 
                  : `Pledge (${livingPledges.length + afterDeathPledges.length} organs)`
                }
              </span>
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default OrganDonation;
