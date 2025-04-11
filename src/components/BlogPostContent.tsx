
import React from 'react';
import { BlogPost } from '@/lib/blogData';
import CategoryBadge from './CategoryBadge';
import { Clock, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostContentProps {
  post: BlogPost;
  onBack: () => void;
}

const renderContent = (content: string) => {
  const lines = content.split('\n');

  return lines.map((line, index) => {
    const trimmed = line.trim();

    // Headings
    if (trimmed.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-semibold mt-6 mb-2">{trimmed.replace('### ', '')}</h3>;
    } else if (trimmed.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
    } else if (trimmed.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mt-10 mb-6">{trimmed.replace('# ', '')}</h1>;
    }

    // Bullet Points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      return (
        <ul key={index} className="list-disc list-inside mb-2">
          <li>{trimmed.slice(2)}</li>
        </ul>
      );
    }

    // Empty line = spacing
    if (trimmed === '') {
      return <div key={index} className="my-4" />;
    }

    // Default paragraph
    return <p key={index} className="mb-4">{trimmed}</p>;
  });
};

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
        {renderContent(post.content)}
      </div>
    </div>
  );
};

export default BlogPostContent;

