'use client';

import { QuizResult } from '@/lib/quiz/types';
import {
  generateShareMessage,
  generateTwitterShareUrl,
  generateLinkedInShareUrl,
  copyToClipboard,
} from '@/lib/quiz/utils';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { Twitter, Linkedin, Copy, Check } from 'lucide-react';

interface ShareButtonProps {
  result: QuizResult;
  platform: 'twitter' | 'linkedin' | 'clipboard';
}

export default function ShareButton({ result, platform }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const handleShare = async () => {
    if (platform === 'clipboard') {
      const message = generateShareMessage(result);
      const success = await copyToClipboard(message);
      
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else if (platform === 'twitter') {
      window.open(generateTwitterShareUrl(result), '_blank');
    } else if (platform === 'linkedin') {
      window.open(generateLinkedInShareUrl(), '_blank');
    }
  };
  
  const icons = {
    twitter: <Twitter size={18} />,
    linkedin: <Linkedin size={18} />,
    clipboard: copied ? <Check size={18} /> : <Copy size={18} />,
  };
  
  const labels = {
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    clipboard: copied ? 'Copié !' : 'Copier',
  };
  
  return (
    <Button
      variant={copied ? 'success' : 'secondary'}
      size="md"
      onClick={handleShare}
      className="min-w-[120px]"
    >
      <span className="mr-2">{icons[platform]}</span>
      {labels[platform]}
    </Button>
  );
}