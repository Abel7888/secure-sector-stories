
import React from 'react';
import { BlogPost } from '@/lib/blogData';
import CategoryBadge from './CategoryBadge';
import { Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostContentProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post, onBack }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-6 flex items-center"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Button>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <CategoryBadge type="sector" value={post.sector} />
        <CategoryBadge type="contentType" value={post.contentType} />
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {post.title}
      </h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.publishedDate}</p>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
      </div>
      
      {post.imageUrl && (
        <div className="w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-lg max-w-none">
        {/* Render content in paragraphs for better readability */}
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogPostContent;
