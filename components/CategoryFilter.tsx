'use client';

import React from 'react';
import { HookCategory, categoryColors } from '@/lib/types';

interface CategoryFilterProps {
  selectedCategory: HookCategory | 'all';
  onCategoryChange: (category: HookCategory | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = [
    { value: 'all', label: 'All Categories', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { value: HookCategory.SECURITY, label: 'Security', color: categoryColors[HookCategory.SECURITY] },
    { value: HookCategory.PRODUCTIVITY, label: 'Productivity', color: categoryColors[HookCategory.PRODUCTIVITY] },
    { value: HookCategory.MONITORING, label: 'Monitoring', color: categoryColors[HookCategory.MONITORING] },
    { value: HookCategory.INTEGRATION, label: 'Integration', color: categoryColors[HookCategory.INTEGRATION] },
    { value: HookCategory.DEVELOPMENT, label: 'Development', color: categoryColors[HookCategory.DEVELOPMENT] },
    { value: HookCategory.NOTIFICATION, label: 'Notification', color: categoryColors[HookCategory.NOTIFICATION] },
    { value: HookCategory.UTILITY, label: 'Utility', color: categoryColors[HookCategory.UTILITY] },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value as HookCategory | 'all')}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
              ${selectedCategory === category.value 
                ? `${category.color} shadow-md scale-105` 
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}