export type QuestionType =
  | 'short'
  | 'paragraph'
  | 'radio'
  | 'checkbox'
  | 'dropdown'
  | 'linear_scale'
  | 'date'
  | 'time';

export interface QuestionOption {
  id: string;
  label: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options: QuestionOption[];
  scaleMin: number;
  scaleMax: number;
  scaleMinLabel: string;
  scaleMaxLabel: string;
}

export interface FormModel {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: number;
  updatedAt: number;
}

export type AnswerValue = string | string[];

export interface FormResponse {
  id: string;
  formId: string;
  answers: Record<string, AnswerValue>;
  submittedAt: number;
}

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  short: 'Respuesta corta',
  paragraph: 'Párrafo',
  radio: 'Opción múltiple',
  checkbox: 'Casillas',
  dropdown: 'Lista desplegable',
  linear_scale: 'Escala lineal',
  date: 'Fecha',
  time: 'Hora',
};

export const CHOICE_TYPES: QuestionType[] = ['radio', 'checkbox', 'dropdown'];
export const SCALE_TYPES: QuestionType[] = ['linear_scale'];
