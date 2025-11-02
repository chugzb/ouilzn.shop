'use client';

import { useState } from 'react';
import { Play, Pause, Download, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  likes: number;
  views: number;
  videoUrl?: string;
}

export function VideoCard({
  title,
  description,
  thumbnail,
  duration,
  category,
  likes,
  views,
  videoUrl,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="group overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        {/* 视频缩略图区域 */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* 播放按钮覆盖层 */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="lg"
              className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-slate-900 shadow-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
          </div>

          {/* 时长标签 */}
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>

          {/* 分类标签 */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </div>
        </div>

        {/* 视频信息 */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
            {description}
          </p>

          {/* 统计信息和操作按钮 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{likes.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Play className="w-4 h-4" />
                <span>{views.toLocaleString()}</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-500"
                onClick={handleLike}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-500"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-500"
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
