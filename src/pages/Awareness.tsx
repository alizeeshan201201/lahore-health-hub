import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ChevronRight, Clock, BookOpen, Heart, Leaf, Brain, Baby } from 'lucide-react';

const categories = [
  { id: 'all', labelEn: 'All', labelUr: 'سب', icon: BookOpen },
  { id: 'heart', labelEn: 'Heart', labelUr: 'دل', icon: Heart },
  { id: 'nutrition', labelEn: 'Nutrition', labelUr: 'غذائیت', icon: Leaf },
  { id: 'mental', labelEn: 'Mental', labelUr: 'ذہنی', icon: Brain },
  { id: 'maternal', labelEn: 'Maternal', labelUr: 'زچگی', icon: Baby },
];

const articles = [
  {
    id: 1,
    titleEn: 'Dengue Prevention: Essential Tips for Lahore Residents',
    titleUr: 'ڈینگی سے بچاؤ: لاہور کے رہائشیوں کے لیے ضروری مشورے',
    summaryEn: 'Learn how to protect yourself and your family from dengue fever during the monsoon season.',
    summaryUr: 'مانسون کے موسم میں اپنے آپ کو اور اپنے خاندان کو ڈینگی بخار سے بچانے کا طریقہ سیکھیں۔',
    category: 'all',
    readTime: '5 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    titleEn: 'Heart Health: Daily Habits That Save Lives',
    titleUr: 'دل کی صحت: روزمرہ عادات جو زندگیاں بچائیں',
    summaryEn: 'Simple lifestyle changes to keep your heart healthy and reduce the risk of heart disease.',
    summaryUr: 'اپنے دل کو صحت مند رکھنے کے لیے آسان طرز زندگی میں تبدیلیاں۔',
    category: 'heart',
    readTime: '4 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=200&fit=crop',
  },
  {
    id: 3,
    titleEn: 'Managing Stress in a Fast-Paced World',
    titleUr: 'تیز رفتار دنیا میں تناؤ کا انتظام',
    summaryEn: 'Practical techniques for managing stress and improving mental well-being.',
    summaryUr: 'تناؤ کے انتظام اور ذہنی بہبود کو بہتر بنانے کے عملی طریقے۔',
    category: 'mental',
    readTime: '6 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop',
  },
  {
    id: 4,
    titleEn: 'Balanced Diet: A Guide for Pakistani Families',
    titleUr: 'متوازن غذا: پاکستانی خاندانوں کے لیے رہنما',
    summaryEn: 'How to maintain a balanced diet using local foods and traditional recipes.',
    summaryUr: 'مقامی کھانوں اور روایتی ترکیبوں کا استعمال کرتے ہوئے متوازن غذا کیسے رکھیں۔',
    category: 'nutrition',
    readTime: '7 min',
    featured: true,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=200&fit=crop',
  },
  {
    id: 5,
    titleEn: 'Prenatal Care: What Every Expecting Mother Should Know',
    titleUr: 'قبل از پیدائش کی دیکھ بھال: ہر حاملہ ماں کو کیا جاننا چاہیے',
    summaryEn: 'Essential prenatal care tips for a healthy pregnancy and safe delivery.',
    summaryUr: 'صحت مند حمل اور محفوظ ڈیلیوری کے لیے ضروری قبل از پیدائش کی دیکھ بھال۔',
    category: 'maternal',
    readTime: '8 min',
    featured: false,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
  },
];

const Awareness = () => {
  const { t, language, isUrdu } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter((a) => a.category === activeCategory);

  return (
    <AppLayout>
      <div className="px-4 py-4 space-y-4">
        <div className={cn('text-center', isUrdu && 'font-urdu')}>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            {t('awareness')}
          </h1>
          <p className="text-muted-foreground text-sm">
            {t('healthTips')}
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200',
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80',
                  isUrdu && 'font-urdu'
                )}
              >
                <Icon className="w-4 h-4" />
                {language === 'ur' ? cat.labelUr : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Featured Article */}
        {filteredArticles.filter((a) => a.featured)[0] && (
          <Card variant="glass" className="overflow-hidden">
            <div 
              className="h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${filteredArticles.filter((a) => a.featured)[0].image})` }}
            />
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Featured
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {filteredArticles.filter((a) => a.featured)[0].readTime}
                </span>
              </div>
              <h2 className={cn(
                'font-bold text-lg text-foreground mb-2',
                isUrdu && 'font-urdu text-right'
              )}>
                {language === 'ur' 
                  ? filteredArticles.filter((a) => a.featured)[0].titleUr 
                  : filteredArticles.filter((a) => a.featured)[0].titleEn
                }
              </h2>
              <p className={cn(
                'text-sm text-muted-foreground mb-3',
                isUrdu && 'font-urdu text-right'
              )}>
                {language === 'ur' 
                  ? filteredArticles.filter((a) => a.featured)[0].summaryUr 
                  : filteredArticles.filter((a) => a.featured)[0].summaryEn
                }
              </p>
              <Button variant="default" size="sm" className="w-full group">
                <span className={isUrdu ? 'font-urdu' : ''}>{t('readMore')}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Article List */}
        <div className="space-y-3">
          <h2 className={cn(
            'text-lg font-bold text-foreground',
            isUrdu && 'font-urdu text-right'
          )}>
            {t('latestArticles')}
          </h2>
          {filteredArticles.filter((a) => !a.featured).map((article) => (
            <Card key={article.id} variant="glass" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div 
                    className="w-24 h-24 bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="flex-1 p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className={cn(
                      'font-semibold text-sm text-foreground line-clamp-2',
                      isUrdu && 'font-urdu text-right'
                    )}>
                      {language === 'ur' ? article.titleUr : article.titleEn}
                    </h3>
                  </div>
                  <div className="flex items-center px-2">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Awareness;
