'use client';

import { useState } from 'react';
import { VideoCard } from './VideoCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List } from 'lucide-react';

// Mock denim apparel data
const mockVideos = [
  {
    id: 1,
    title: 'Classic Denim Shirt',
    description: 'Premium organic cotton denim shirt in classic dark wash',
    thumbnail: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=450&fit=crop',
    duration: '$89',
    category: 'sci-fi',
    likes: 1234,
    views: 15678,
  },
  {
    id: 2,
    title: 'Denim Jacket Medium Wash',
    description: 'Comfortable denim jacket with medium wash finish',
    thumbnail: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=450&fit=crop',
    duration: '$129',
    category: 'nature',
    likes: 987,
    views: 12345,
  },
  {
    id: 3,
    title: 'Relaxed Fit Light Wash',
    description: 'Relaxed fit jeans perfect for casual everyday wear',
    thumbnail: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&h=450&fit=crop',
    duration: '$85',
    category: 'art',
    likes: 2156,
    views: 23456,
  },
  {
    id: 4,
    title: 'Bootcut Black Jeans',
    description: 'Classic bootcut jeans in versatile black color',
    thumbnail: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=450&fit=crop',
    duration: '$95',
    category: 'business',
    likes: 543,
    views: 8765,
  },
  {
    id: 5,
    title: 'Denim Trench Coat',
    description: 'Classic denim trench coat in premium raw denim',
    thumbnail: 'https://images.unsplash.com/photo-1542272454315-7ad9f8f0f1bd?w=800&h=450&fit=crop',
    duration: '$199',
    category: 'education',
    likes: 1876,
    views: 34567,
  },
  {
    id: 6,
    title: 'Denim Workwear Jacket',
    description: 'Trendy denim workwear jacket with distressed vintage finish',
    thumbnail: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=450&fit=crop',
    duration: '$149',
    category: 'music',
    likes: 3245,
    views: 45678,
  },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'sci-fi', label: 'Slim Fit' },
  { value: 'nature', label: 'Regular Fit' },
  { value: 'art', label: 'Relaxed Fit' },
  { value: 'business', label: 'Bootcut' },
  { value: 'education', label: 'Straight Leg' },
  { value: 'music', label: 'Skinny Fit' },
];

export function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = mockVideos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            className={`cursor-pointer transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0'
                : 'hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300'
            }`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </Badge>
        ))}
      </div>

      {/* Video Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'grid-cols-1'
      }`}>
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnail={video.thumbnail}
            duration={video.duration}
            category={video.category}
            likes={video.likes}
            views={video.views}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <Search className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No videos found</h3>
            <p className="text-sm">Try adjusting your search criteria or selecting other categories</p>
          </div>
        </div>
      )}

      {/* Load More Button */}
      {filteredVideos.length > 0 && (
        <div className="text-center pt-6">
          <Button variant="outline" size="lg" className="px-8">
            Load more videos
          </Button>
        </div>
      )}
    </div>
  );
}
