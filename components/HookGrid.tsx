import React from 'react';
import HookCard from './HookCard';
import { Hook } from '@/lib/types';

interface HookGridProps {
  hooks: Hook[];
  title?: string;
}

export default function HookGrid({ hooks, title }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hooks found in this category.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hooks.map((hook) => (
          <HookCard key={hook.id} hook={hook} />
        ))}
      </div>
    </section>
  );
}