export type SectionId = 
  | 'twenty-five-points' 
  | 'childhood-self' 
  | 'leadership-culture' 
  | 'maturity-matrix' 
  | 'practical-kit';

export interface TenetPoint {
  id: number;
  title: string;
  category: 'Diri & Emosi' | 'Hubungan & Cinta' | 'Filsafat & Krisis' | 'Karier & Makna';
  essence: string;
  detailedReflection: string;
  practicalAction: string;
  keyQuote: string;
  references: string[];
}

export interface ChildhoodElement {
  number: number;
  name: string;
  originalTerm: string;
  description: string;
  adultManifestation: string;
  dysfunctionIfMissing: string;
}

export interface CptsdSymptom {
  id: number;
  title: string;
  originalTerm: string;
  corporateBehavior: string;
  hiddenFear: string;
  healthyIntervention: string;
}

export interface MaturityIndicator {
  id: number;
  domain: 'A' | 'B' | 'C';
  domainName: string;
  title: string;
  originalTerm: string;
  operationalManifestation: string;
  immaturityRisk: string;
  rubric: {
    unsatisfactory: string;
    developing: string;
    proficient: string;
    exemplary: string;
  };
}

export interface StructuralPolicy {
  id: string;
  title: string;
  englishTerm: string;
  mechanism: string;
  purpose: string;
  metricOrRule: string;
}

export interface UserNeurosisManual {
  name: string;
  role: string;
  coreStressReaction: string;
  stressTriggers: string[];
  irrationalThoughtsUnderPressure: string;
  howToCommunicateWithMe: string;
  whatIAppreciateWhenPanicking: string;
  myDefinitionOfGoodEnough: string;
}
