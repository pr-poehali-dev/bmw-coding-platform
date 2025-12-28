import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'strong';
  hover?: boolean;
}

export default function GlassCard({ children, className, variant = 'default', hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-8',
        variant === 'strong' ? 'glass-strong' : 'glass',
        hover && 'transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  );
}
