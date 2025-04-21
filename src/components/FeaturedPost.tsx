
import React from 'react';
import { Post } from '@/lib/supabase';
import CategoryBadge from './CategoryBadge';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedPostProps {
  post: Post;
  onClick: () => void;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, onClick }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryBadge 
                type="sector" 
                value={post.sector} 
                className="bg-white/20 text-white border-white/30"
              />
              <CategoryBadge 
                type="contentType" 
                value={post.contentType} 
                className="bg-white/20 text-white border-white/30"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-xl text-gray-100">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-white/20">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-300">{post.publishedDate}</p>
                </div>
              </div>
              <div className="ml-auto flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={onClick}
              >
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
