import React from 'react';
import HookCard from './HookCard';
import { Hook } from '@/lib/types';
import { Sparkles } from 'lucide-react';

interface FeaturedHooksProps {
  hooks: Hook[];
}

export default function FeaturedHooks({ hooks }: FeaturedHooksProps) {
  return (
    <section className="w-full mb-12">
      <div className="flex items-center mb-6">
        <Sparkles className="w-6 h-6 mr-2 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gray-900">Featured Hooks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hooks.map((hook) => (
          <div key={hook.id} className="relative">
            <div className="absolute -top-2 -right-2 z-10">
              <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <HookCard hook={hook} />
          </div>
        ))}
      </div>
    </section>
  );
}