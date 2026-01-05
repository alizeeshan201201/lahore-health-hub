import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { AlertTriangle, ChevronRight, Search, Check, Stethoscope, Building2 } from 'lucide-react';

const symptomCategories = [
  {
    nameEn: 'Head & Neck',
    nameUr: 'سر اور گردن',
    symptoms: [
      { id: 'headache', en: 'Headache', ur: 'سر درد' },
      { id: 'dizziness', en: 'Dizziness', ur: 'چکر آنا' },
      { id: 'sore_throat', en: 'Sore Throat', ur: 'گلے میں درد' },
      { id: 'neck_pain', en: 'Neck Pain', ur: 'گردن میں درد' },
    ],
  },
  {
    nameEn: 'Chest & Breathing',
    nameUr: 'سینہ اور سانس',
    symptoms: [
      { id: 'chest_pain', en: 'Chest Pain', ur: 'سینے میں درد' },
      { id: 'shortness_breath', en: 'Shortness of Breath', ur: 'سانس کی تکلیف' },
      { id: 'cough', en: 'Cough', ur: 'کھانسی' },
      { id: 'wheezing', en: 'Wheezing', ur: 'سانس میں آواز' },
    ],
  },
  {
    nameEn: 'Stomach & Digestion',
    nameUr: 'پیٹ اور ہاضمہ',
    symptoms: [
      { id: 'stomach_pain', en: 'Stomach Pain', ur: 'پیٹ میں درد' },
      { id: 'nausea', en: 'Nausea', ur: 'متلی' },
      { id: 'vomiting', en: 'Vomiting', ur: 'قے' },
      { id: 'diarrhea', en: 'Diarrhea', ur: 'دست' },
    ],
  },
  {
    nameEn: 'General',
    nameUr: 'عام',
    symptoms: [
      { id: 'fever', en: 'Fever', ur: 'بخار' },
      { id: 'fatigue', en: 'Fatigue', ur: 'تھکاوٹ' },
      { id: 'body_aches', en: 'Body Aches', ur: 'جسم میں درد' },
      { id: 'weakness', en: 'Weakness', ur: 'کمزوری' },
    ],
  },
];

const possibleConditions = [
  {
    nameEn: 'Common Cold',
    nameUr: 'عام نزلہ زکام',
    probability: 78,
    specialty: 'General Medicine',
  },
  {
    nameEn: 'Viral Fever',
    nameUr: 'وائرل بخار',
    probability: 65,
    specialty: 'General Medicine',
  },
  {
    nameEn: 'Dengue Fever',
    nameUr: 'ڈینگی بخار',
    probability: 23,
    specialty: 'Infectious Disease',
  },
];

const Symptoms = () => {
  const { t, language, isUrdu } = useLanguage();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleAnalyze = () => {
    if (selectedSymptoms.length > 0) {
      setShowResults(true);
    }
  };

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-6">
        <div className={cn('text-center', isUrdu && 'font-urdu')}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
            <Stethoscope className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {t('checkSymptoms')}
          </h1>
          <p className="text-muted-foreground text-sm">
            {t('selectSymptoms')}
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={isUrdu ? 'علامات تلاش کریں...' : 'Search symptoms...'}
                className={cn(
                  'w-full h-12 pl-10 pr-4 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
                  isUrdu && 'font-urdu text-right pr-10 pl-4'
                )}
              />
            </div>

            <div className="space-y-4">
              {symptomCategories.map((category, catIndex) => (
                <Card key={catIndex} variant="glass">
                  <CardHeader className="pb-2">
                    <CardTitle className={cn(
                      'text-base',
                      isUrdu && 'font-urdu text-right'
                    )}>
                      {language === 'ur' ? category.nameUr : category.nameEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.symptoms.map((symptom) => {
                        const isSelected = selectedSymptoms.includes(symptom.id);
                        return (
                          <button
                            key={symptom.id}
                            onClick={() => toggleSymptom(symptom.id)}
                            className={cn(
                              'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                              isSelected
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary text-foreground hover:bg-secondary/80',
                              isUrdu && 'font-urdu'
                            )}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 inline mr-1" />}
                            {language === 'ur' ? symptom.ur : symptom.en}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedSymptoms.length > 0 && (
              <div className="fixed bottom-20 left-4 right-4 z-30">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full shadow-lg"
                  onClick={handleAnalyze}
                >
                  <span className={isUrdu ? 'font-urdu' : ''}>
                    {isUrdu 
                      ? `تجزیہ کریں (${selectedSymptoms.length} علامات)` 
                      : `Analyze (${selectedSymptoms.length} symptoms)`
                    }
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <Card variant="emergency" className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-emergency flex-shrink-0 mt-0.5" />
                <p className={cn(
                  'text-sm text-foreground',
                  isUrdu && 'font-urdu text-right'
                )}>
                  {t('medicalDisclaimer')}
                </p>
              </div>
            </Card>

            <div>
              <h2 className={cn(
                'text-lg font-bold text-foreground mb-3',
                isUrdu && 'font-urdu text-right'
              )}>
                {t('possibleConditions')}
              </h2>
              <div className="space-y-3">
                {possibleConditions.map((condition, index) => (
                  <Card key={index} variant="glass">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={cn(
                          'font-semibold text-foreground',
                          isUrdu && 'font-urdu'
                        )}>
                          {language === 'ur' ? condition.nameUr : condition.nameEn}
                        </h3>
                        <span className={cn(
                          'text-sm font-bold',
                          condition.probability > 70 ? 'text-warning' : 
                          condition.probability > 40 ? 'text-primary' : 'text-muted-foreground'
                        )}>
                          {condition.probability}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            'h-full rounded-full transition-all duration-500',
                            condition.probability > 70 ? 'bg-warning' : 
                            condition.probability > 40 ? 'bg-primary' : 'bg-muted'
                          )}
                          style={{ width: `${condition.probability}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Specialty: {condition.specialty}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className={cn(
                'text-lg font-bold text-foreground mb-3',
                isUrdu && 'font-urdu text-right'
              )}>
                {t('suggestedHospitals')}
              </h2>
              <Button variant="default" className="w-full" asChild>
                <a href="/hospitals">
                  <Building2 className="w-5 h-5 mr-2" />
                  <span className={isUrdu ? 'font-urdu' : ''}>{t('nearbyHospitals')}</span>
                </a>
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setShowResults(false);
                setSelectedSymptoms([]);
              }}
            >
              <span className={isUrdu ? 'font-urdu' : ''}>
                {isUrdu ? 'نئی تلاش شروع کریں' : 'Start New Search'}
              </span>
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Symptoms;
