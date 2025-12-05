'use client';

import { QuizQuestion, QuizOption } from '@/lib/quiz/types';
import { useState } from 'react';
import { Check, X, Circle, AlertCircle, Tag } from 'lucide-react';

interface QuestionProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionId: string) => void;
  selectedOptionId?: string;
  isAnswered: boolean;
  showCorrect: boolean;
}

export default function Question({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedOptionId,
  isAnswered,
  showCorrect,
}: QuestionProps) {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  
  const maxPoints = Math.max(...question.options.map((opt) => opt.points));
  
  const getOptionClassName = (option: QuizOption) => {
    const isSelected = selectedOptionId === option.id;
    const isCorrect = option.points === maxPoints;
    const isHovered = hoveredOption === option.id;
    
    let baseClass = 'relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left';
    
    if (isAnswered && showCorrect) {
      if (isSelected && isCorrect) {
        return `${baseClass} bg-green-500/20 border-green-500 text-green-100`;
      } else if (isSelected && !isCorrect) {
        return `${baseClass} bg-red-500/20 border-red-500 text-red-100`;
      } else if (isCorrect) {
        return `${baseClass} bg-green-500/10 border-green-500/50 text-gray-300`;
      } else {
        return `${baseClass} bg-gray-800 border-gray-700 text-gray-400 opacity-60`;
      }
    } else if (isSelected) {
      return `${baseClass} bg-blue-500/20 border-blue-500 text-blue-100 scale-[1.02]`;
    } else if (isHovered) {
      return `${baseClass} bg-gray-700 border-gray-600 text-gray-200 scale-[1.01]`;
    } else {
      return `${baseClass} bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600`;
    }
  };
  
  const getOptionIcon = (option: QuizOption) => {
    if (!isAnswered || !showCorrect) {
      return selectedOptionId === option.id ? (
        <Check size={20} />
      ) : (
        <Circle size={20} />
      );
    }
    
    const isSelected = selectedOptionId === option.id;
    const isCorrect = option.points === maxPoints;
    
    if (isSelected && isCorrect) return <Check className="text-green-400" size={20} />;
    if (isSelected && !isCorrect) return <X className="text-red-400" size={20} />;
    if (isCorrect) return <Check className="text-green-400" size={20} />;
    return <Circle className="text-gray-400" size={20} />;
  };
  
  return (
    <div className="space-y-6">
      {/* En-tête de la question */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="px-2 py-1 bg-gray-800 rounded-md">
            Question {questionNumber}/{totalQuestions}
          </span>
          {question.difficulty && (
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md capitalize flex items-center gap-1">
              <AlertCircle size={12} />
              {question.difficulty}
            </span>
          )}
          {question.tags && question.tags.length > 0 && (
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs flex items-center gap-1">
              <Tag size={10} />
              #{question.tags[0]}
            </span>
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-100 leading-tight">
          {question.question}
        </h2>
        
        {question.subtitle && (
          <p className="text-gray-400 text-base">{question.subtitle}</p>
        )}
      </div>
      
      {/* Image optionnelle */}
      {question.imageUrl && (
        <div className="rounded-xl overflow-hidden border border-gray-700">
          <img
            src={question.imageUrl}
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
      )}
      
      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !isAnswered && onAnswer(option.id)}
            onMouseEnter={() => !isAnswered && setHoveredOption(option.id)}
            onMouseLeave={() => setHoveredOption(null)}
            disabled={isAnswered}
            className={getOptionClassName(option)}
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5">
                {getOptionIcon(option)}
              </span>
              <span className="flex-1 text-base">{option.text}</span>
              {isAnswered && showCorrect && option.points === maxPoints && (
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                  +{option.points} pts
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}