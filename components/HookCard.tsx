import React from 'react';
import { Hook, categoryColors, languageIcons } from '@/lib/types';
import { Star, GitBranch, ExternalLink } from 'lucide-react';

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col h-full border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[hook.category]}`}>
          {hook.category.charAt(0).toUpperCase() + hook.category.slice(1)}
        </span>
        {hook.stars && (
          <div className="flex items-center text-gray-600">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{hook.stars}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
        {hook.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
        {hook.description}
      </p>

      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <span className="mr-2 text-lg">{languageIcons[hook.language]}</span>
          <span>{hook.language.charAt(0).toUpperCase() + hook.language.slice(1)}</span>
        </div>
        <div className="flex items-center">
          <GitBranch className="w-4 h-4 mr-1" />
          <span>{hook.author}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {hook.hookTypes.slice(0, 3).map((type) => (
          <span
            key={type}
            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
            title={type}
          >
            {type.split('_').map(word => 
              word.charAt(0) + word.slice(1).toLowerCase()
            ).join('')}
          </span>
        ))}
        {hook.hookTypes.length > 3 && (
          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
            +{hook.hookTypes.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
          View Details
        </button>
        <a
          href={hook.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium flex items-center"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}