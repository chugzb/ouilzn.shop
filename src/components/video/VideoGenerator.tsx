'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function VideoGenerator() {
  const t = useTranslations('HomePage');

  const features = [
    {
      icon: Sparkles,
      title: t('videoGenerator.styleOptions.realistic'),
      description: '深色水洗牛仔布，经典耐看',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Zap,
      title: t('videoGenerator.styleOptions.animated'),
      description: '中度水洗，休闲百搭',
      gradient: 'from-purple-500 to-fuchsia-500',
    },
    {
      icon: Palette,
      title: t('videoGenerator.styleOptions.minimalist'),
      description: '浅色水洗，清新自然',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
  ];

  const categories = [
    {
      label: t('videoGenerator.categoryOptions.promotional'),
      description: '修身版型，展现身材',
      emoji: '👔',
    },
    {
      label: t('videoGenerator.categoryOptions.educational'),
      description: '标准版型，舒适自在',
      emoji: '👖',
    },
    {
      label: t('videoGenerator.categoryOptions.entertainment'),
      description: '宽松版型，自由随性',
      emoji: '🎨',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl">
        <CardContent className="p-8 md:p-12">
          {/* 标题区域 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              {t('videoGenerator.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('videoGenerator.description')}
            </p>
          </div>

          {/* 水洗风格展示 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white text-center">
              {t('videoGenerator.style')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* 版型类型展示 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white text-center">
              {t('videoGenerator.category')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="text-4xl mb-4">{category.emoji}</div>
                  <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {category.label}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/5 group-hover:to-fuchsia-600/5 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* 底部提示 */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-violet-200 dark:border-violet-800">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-medium text-violet-700 dark:text-violet-300">
                多种风格和版型，总有一款适合您
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
