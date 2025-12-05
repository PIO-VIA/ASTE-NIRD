import { ReactNode } from 'react';

export const metadata = {
  title: 'Jeux NIRD - Village Numérique Résistant',
  description: 'Quiz, défis et énigmes pour apprendre le numérique libre de façon ludique',
};

export default function JeuxLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-nird-night pt-20">
      {children}
    </div>
  );
}

