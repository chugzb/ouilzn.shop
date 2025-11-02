'use client';

import { Play, Users, Star, Zap } from 'lucide-react';

const stats = [
  {
    icon: Play,
    value: '50,000+',
    label: 'Jeans Sold',
    description: 'Premium quality jeans',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Happy Customers',
    description: 'Global denim community',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Customer Rating',
    description: 'Based on customer reviews',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Zap,
    value: '100%',
    label: 'Satisfaction Rate',
    description: 'Quality guarantee',
    color: 'from-green-500 to-emerald-500',
  },
];

export function VideoStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
          >
            {/* 背景渐变 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* 图标 */}
            <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* 数值 */}
            <div className="relative">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {stat.description}
              </div>
            </div>

            {/* 装饰性元素 */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
        );
      })}
    </div>
  );
}
