export interface Question {
  id: number;
  sentence: string;
  options: string[];
  correct: string[];
  blanks: number;
}
