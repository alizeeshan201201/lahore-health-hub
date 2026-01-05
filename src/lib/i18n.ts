export type Language = 'en' | 'ur';

export const translations = {
  en: {
    // App
    appName: 'LHRSEHAT',
    tagline: 'Your Health, Our Priority',
    lahore: 'Lahore',
    
    // Navigation
    home: 'Home',
    donate: 'Donate',
    symptoms: 'Symptoms',
    hospitals: 'Hospitals',
    awareness: 'Awareness',
    emergency: 'Emergency',
    profile: 'Profile',
    settings: 'Settings',
    
    // Auth
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    
    // Donation Types
    bloodDonation: 'Blood Donation',
    organDonation: 'Organ Donation',
    moneyDonation: 'Money Donation',
    
    // Blood Donation
    bloodGroup: 'Blood Group',
    lastDonation: 'Last Donation',
    nextEligible: 'Next Eligible Date',
    donationHistory: 'Donation History',
    reliabilityScore: 'Reliability Score',
    eligibleToDonate: 'Eligible to Donate',
    notEligible: 'Not Eligible Yet',
    registerAsDonor: 'Register as Donor',
    findDonors: 'Find Donors',
    
    // Organ Donation
    livingDonation: 'Living Donation',
    afterDeathDonation: 'After-Death Donation',
    pledgeOrgan: 'Pledge Organ',
    myPledges: 'My Pledges',
    oneKidney: 'One Kidney',
    partialLiver: 'Partial Liver',
    boneMarrow: 'Bone Marrow',
    heart: 'Heart',
    bothKidneys: 'Both Kidneys',
    lungs: 'Lungs',
    corneas: 'Corneas',
    liver: 'Liver',
    pancreas: 'Pancreas',
    pledgeSuccess: 'Thank you! Your pledge can save lives.',
    
    // Money Donation
    donateNow: 'Donate Now',
    totalDonated: 'Total Donated',
    casesSupported: 'Cases Supported',
    viewReceipts: 'View Receipts',
    transparencyReport: 'Transparency Report',
    
    // Symptom Checker
    checkSymptoms: 'Check Symptoms',
    selectSymptoms: 'Select Your Symptoms',
    possibleConditions: 'Possible Conditions',
    probability: 'Probability',
    suggestedHospitals: 'Suggested Hospitals',
    medicalDisclaimer: 'This is not a substitute for professional medical advice.',
    
    // Hospitals
    nearbyHospitals: 'Nearby Hospitals',
    distance: 'Distance',
    travelTime: 'Travel Time',
    specialties: 'Specialties',
    getDirections: 'Get Directions',
    callHospital: 'Call Hospital',
    
    // Emergency
    emergencyButton: 'EMERGENCY',
    shareLocation: 'Share Location',
    emergencyContacts: 'Emergency Contacts',
    nearestHospital: 'Nearest Hospital',
    preCareInstructions: 'Pre-Care Instructions',
    
    // Awareness
    healthTips: 'Health Tips',
    latestArticles: 'Latest Articles',
    alerts: 'Health Alerts',
    categories: 'Categories',
    readMore: 'Read More',
    
    // Common
    continue: 'Continue',
    cancel: 'Cancel',
    save: 'Save',
    submit: 'Submit',
    back: 'Back',
    next: 'Next',
    loading: 'Loading...',
    error: 'Something went wrong',
    success: 'Success',
    noResults: 'No results found',
    search: 'Search',
    filter: 'Filter',
  },
  ur: {
    // App
    appName: 'لاہور صحت',
    tagline: 'آپ کی صحت، ہماری ترجیح',
    lahore: 'لاہور',
    
    // Navigation
    home: 'ہوم',
    donate: 'عطیہ',
    symptoms: 'علامات',
    hospitals: 'ہسپتال',
    awareness: 'آگاہی',
    emergency: 'ایمرجنسی',
    profile: 'پروفائل',
    settings: 'سیٹنگز',
    
    // Auth
    login: 'لاگ ان',
    signup: 'سائن اپ',
    logout: 'لاگ آؤٹ',
    email: 'ای میل',
    password: 'پاس ورڈ',
    confirmPassword: 'پاس ورڈ کی تصدیق',
    forgotPassword: 'پاس ورڈ بھول گئے؟',
    createAccount: 'اکاؤنٹ بنائیں',
    alreadyHaveAccount: 'پہلے سے اکاؤنٹ ہے؟',
    dontHaveAccount: 'اکاؤنٹ نہیں ہے؟',
    
    // Donation Types
    bloodDonation: 'خون کا عطیہ',
    organDonation: 'عضو کا عطیہ',
    moneyDonation: 'رقم کا عطیہ',
    
    // Blood Donation
    bloodGroup: 'بلڈ گروپ',
    lastDonation: 'آخری عطیہ',
    nextEligible: 'اگلی اہلیت کی تاریخ',
    donationHistory: 'عطیات کی تاریخ',
    reliabilityScore: 'قابل اعتماد سکور',
    eligibleToDonate: 'عطیہ کرنے کے اہل',
    notEligible: 'ابھی اہل نہیں',
    registerAsDonor: 'عطیہ دہندہ کے طور پر رجسٹر کریں',
    findDonors: 'عطیہ دہندگان تلاش کریں',
    
    // Organ Donation
    livingDonation: 'زندگی میں عطیہ',
    afterDeathDonation: 'وفات کے بعد عطیہ',
    pledgeOrgan: 'عضو کا عہد',
    myPledges: 'میرے عہد',
    oneKidney: 'ایک گردہ',
    partialLiver: 'جزوی جگر',
    boneMarrow: 'بون میرو',
    heart: 'دل',
    bothKidneys: 'دونوں گردے',
    lungs: 'پھیپھڑے',
    corneas: 'کارنیا',
    liver: 'جگر',
    pancreas: 'لبلبہ',
    pledgeSuccess: 'شکریہ! آپ کا عہد زندگیاں بچا سکتا ہے۔',
    
    // Money Donation
    donateNow: 'ابھی عطیہ کریں',
    totalDonated: 'کل عطیہ',
    casesSupported: 'معاون کیسز',
    viewReceipts: 'رسیدیں دیکھیں',
    transparencyReport: 'شفافیت رپورٹ',
    
    // Symptom Checker
    checkSymptoms: 'علامات چیک کریں',
    selectSymptoms: 'اپنی علامات منتخب کریں',
    possibleConditions: 'ممکنہ حالات',
    probability: 'امکان',
    suggestedHospitals: 'تجویز کردہ ہسپتال',
    medicalDisclaimer: 'یہ پیشہ ورانہ طبی مشورے کا متبادل نہیں ہے۔',
    
    // Hospitals
    nearbyHospitals: 'قریبی ہسپتال',
    distance: 'فاصلہ',
    travelTime: 'سفر کا وقت',
    specialties: 'تخصصات',
    getDirections: 'راستہ حاصل کریں',
    callHospital: 'ہسپتال کو کال کریں',
    
    // Emergency
    emergencyButton: 'ایمرجنسی',
    shareLocation: 'مقام شیئر کریں',
    emergencyContacts: 'ایمرجنسی رابطے',
    nearestHospital: 'قریب ترین ہسپتال',
    preCareInstructions: 'ابتدائی ہدایات',
    
    // Awareness
    healthTips: 'صحت کی تجاویز',
    latestArticles: 'تازہ ترین مضامین',
    alerts: 'صحت کی وارننگز',
    categories: 'زمرہ جات',
    readMore: 'مزید پڑھیں',
    
    // Common
    continue: 'جاری رکھیں',
    cancel: 'منسوخ',
    save: 'محفوظ کریں',
    submit: 'جمع کرائیں',
    back: 'واپس',
    next: 'اگلا',
    loading: 'لوڈ ہو رہا ہے...',
    error: 'کچھ غلط ہو گیا',
    success: 'کامیابی',
    noResults: 'کوئی نتیجہ نہیں ملا',
    search: 'تلاش',
    filter: 'فلٹر',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(key: TranslationKey, lang: Language = 'en'): string {
  return translations[lang][key] || translations.en[key] || key;
}
