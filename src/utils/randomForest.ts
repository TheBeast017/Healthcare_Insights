import { Disease, diseases } from '../data/diseaseData';

// Simplified Random Forest implementation
export function predictDisease(symptoms: string[]): Disease[] {
  // Calculate similarity scores for each disease
  const predictions = diseases.map(disease => {
    const matchingSymptoms = symptoms.filter(symptom => 
      disease.symptoms.includes(symptom)
    );
    
    const score = matchingSymptoms.length / disease.symptoms.length;
    return { disease, score };
  });

  // Sort by score and return top matches
  return predictions
    .sort((a, b) => b.score - a.score)
    .filter(p => p.score > 0.25) // Only return diseases with >25% symptom match
    .map(p => p.disease);
}