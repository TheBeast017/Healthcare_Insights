// Comprehensive disease-symptom mapping with categories
export interface Disease {
  name: string;
  symptoms: string[];
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
  hereditary?: boolean;
}

// Symptom categories for UI organization
export const symptomCategories = {
  physical: 'Observable Physical Symptoms',
  subjective: 'Subjective Feelings & Sensations',
  episodic: 'Episodic or Recurring Symptoms',
  hereditary: 'Common in Hereditary Conditions'
} as const;

export const commonSymptoms = {
  // Observable Physical Symptoms (things others can see)
  physical: [
    // Skin and Body
    'Rash',
    'Pale skin',
    'Swollen face',
    'Swollen joints',
    'Skin discoloration',
    'Yellow skin or eyes',
    'Hair loss',
    'Skin lesions',
    'Visible tremors',
    'Drooping eyelid',
    'Swollen lymph nodes',
    'Excessive sweating',
    'Muscle wasting',
    'Curved spine',
    'Unsteady gait',
    'Facial twitching',
    'Hives',
    'Blisters',
    'Dry, flaky skin',
    'Bruising easily',
    'Enlarged veins',
    'Thickening of skin',
    'Blue-tinged extremities',
    'Loss of hair color',
    'Red or inflamed eyes',
    'Unexplained weight gain',
    // Breathing and Circulation
    'Rapid breathing',
    'Coughing up blood',
    'Bleeding gums',
    'Wheezing',
    'Slow breathing',
    'Cold extremities',
    'Cyanosis',
    'Eye redness'
  ],

  // Subjective Feelings & Sensations (what the patient feels)
  subjective: [
    // Physical Discomfort
    'Nausea',
    'Dizziness',
    'Fatigue',
    'Headache',
    'Body aches',
    'Joint pain',
    'Chest pain',
    'Abdominal pain',
    'Burning sensation',
    'Numbness',
    'Tingling',
    'Weakness',
    'Loss of taste',
    'Loss of smell',
    'Blurred vision',
    'Ringing in ears',
    'Difficulty swallowing',
    'Muscle weakness',
    'Chest tightness',
    'Touch sensitivity',
    'Abdominal fullness',
    'Itchy skin',
    'Burning limbs',
    'Pain when breathing',
    'Unusual body odor',
    'Sharp pains',
    'Throat fullness',
    // Emotional and Cognitive
    'Anxiety',
    'Depression',
    'Brain fog',
    'Excessive thirst',
    'Light sensitivity',
    'Sound sensitivity',
    'Irritability',
    'Temperature sensitivity',
    'Trouble focusing',
    'Mood fluctuations',
    'Reality detachment',
    'Unexplained fears',
    'Poor judgment'
  ],

  // Episodic or Recurring Symptoms (events that come and go)
  episodic: [
    // Neurological and Mental
    'Seizures',
    'Fainting',
    'Panic attacks',
    'Migraines',
    'Night sweats',
    'Sleep paralysis',
    'Muscle spasms',
    'Vertigo episodes',
    'Mood swings',
    'Memory lapses',
    'Loss of coordination',
    'Speech difficulty',
    'Light-headedness',
    'Unexplained shaking',
    'Energy fluctuations',
    'Pins and needles',
    'Abnormal dreams',
    // Respiratory and Cardiovascular
    'Heart palpitations',
    'Asthma attacks',
    'Allergic reactions',
    'Coughing fits',
    'Irregular heartbeat',
    'Hot flashes',
    'Sudden weakness',
    'Vision blackouts',
    'Labored breathing',
    'Mucus coughing',
    'Body flushing',
    'Choking episodes'
  ],

  // Common in Hereditary Conditions
  hereditary: [
    // Genetic and Developmental Indicators
    'Early graying',
    'Family history of cancer',
    'Family history of heart disease',
    'Family history of diabetes',
    'Family history of mental illness',
    'Early vision loss',
    'Blood clotting issues',
    'Frequent fractures',
    'Joint hypermobility',
    'Unusual facial features',
    'Skeletal abnormalities',
    'Growth abnormalities',
    'Developmental delays',
    'Color blindness',
    'Blood disorders',
    'Early hearing loss',
    'Frequent nosebleeds',
    'Low bone density',
    'Abnormal pigmentation',
    'Frequent infections',
    'Medication sensitivity',
    'Delayed development',
    'Abnormal proportions',
    'Involuntary movements',
    'Unusual sleep patterns'
  ]
} as const;

export const diseases: Disease[] = [
  {
    name: 'COVID-19',
    symptoms: ['Loss of taste', 'Loss of smell', 'Fatigue', 'Coughing fits', 'Rapid breathing', 'Fever', 'Body aches'],
    severity: 'severe',
    description: 'A viral respiratory illness caused by the SARS-CoV-2 virus.'
  },
  {
    name: 'Huntington\'s Disease',
    symptoms: ['Muscle spasms', 'Memory lapses', 'Mood swings', 'Unsteady gait', 'Involuntary movements', 'Speech difficulty'],
    severity: 'severe',
    description: 'A progressive brain disorder that causes uncontrolled movements.',
    hereditary: true
  },
  {
    name: 'Hemophilia',
    symptoms: ['Blood clotting issues', 'Bruising easily', 'Bleeding gums', 'Joint pain', 'Frequent nosebleeds'],
    severity: 'severe',
    description: 'A disorder that impairs blood clotting.',
    hereditary: true
  },
  {
    name: 'Marfan Syndrome',
    symptoms: ['Skeletal abnormalities', 'Joint hypermobility', 'Vision problems', 'Heart palpitations', 'Abnormal proportions'],
    severity: 'severe',
    description: 'A genetic disorder affecting connective tissue.',
    hereditary: true
  },
  {
    name: 'Migraine',
    symptoms: ['Headache', 'Light sensitivity', 'Sound sensitivity', 'Vision blackouts', 'Nausea', 'Vertigo episodes'],
    severity: 'moderate',
    description: 'A neurological condition causing severe headaches.'
  },
  {
    name: 'Epilepsy',
    symptoms: ['Seizures', 'Memory lapses', 'Sudden weakness', 'Fainting', 'Speech difficulty', 'Loss of coordination'],
    severity: 'severe',
    description: 'A neurological disorder causing recurring seizures.',
    hereditary: true
  },
  {
    name: 'Lupus',
    symptoms: ['Rash', 'Joint pain', 'Fatigue', 'Light sensitivity', 'Facial rash', 'Chest pain'],
    severity: 'severe',
    description: 'An autoimmune disease affecting multiple body systems.'
  },
  {
    name: 'Multiple Sclerosis',
    symptoms: ['Vision blackouts', 'Numbness', 'Fatigue', 'Muscle weakness', 'Balance problems', 'Speech difficulty'],
    severity: 'severe',
    description: 'A disease affecting the central nervous system.'
  },
  {
    name: 'Panic Disorder',
    symptoms: ['Panic attacks', 'Heart palpitations', 'Chest pain', 'Dizziness', 'Shortness of breath', 'Fear'],
    severity: 'moderate',
    description: 'An anxiety disorder causing recurring panic attacks.'
  },
  {
    name: 'Rheumatoid Arthritis',
    symptoms: ['Joint pain', 'Swollen joints', 'Fatigue', 'Morning stiffness', 'Muscle weakness', 'Fever'],
    severity: 'severe',
    description: 'An autoimmune disorder affecting joints.',
    hereditary: true
  },
  {
    name: 'Sickle Cell Disease',
    symptoms: ['Pain episodes', 'Fatigue', 'Vision problems', 'Frequent infections', 'Yellow skin', 'Delayed growth'],
    severity: 'severe',
    description: 'An inherited blood disorder.',
    hereditary: true
  },
  {
    name: 'Parkinson\'s Disease',
    symptoms: ['Visible tremors', 'Muscle weakness', 'Unsteady gait', 'Memory lapses', 'Speech difficulty', 'Stiffness'],
    severity: 'severe',
    description: 'A progressive nervous system disorder affecting movement.'
  },
  {
    name: 'Celiac Disease',
    symptoms: ['Abdominal pain', 'Diarrhea', 'Fatigue', 'Weight loss', 'Bloating', 'Nausea'],
    severity: 'moderate',
    description: 'An immune reaction to eating gluten.',
    hereditary: true
  },
  {
    name: 'Graves\' Disease',
    symptoms: ['Eye redness', 'Heart palpitations', 'Anxiety', 'Weight loss', 'Heat sensitivity', 'Tremors'],
    severity: 'moderate',
    description: 'An autoimmune disorder affecting the thyroid.',
    hereditary: true
  },
  {
    name: 'Fibromyalgia',
    symptoms: ['Body aches', 'Fatigue', 'Sleep problems', 'Brain fog', 'Touch sensitivity', 'Memory problems'],
    severity: 'moderate',
    description: 'A condition causing widespread musculoskeletal pain.'
  }
];