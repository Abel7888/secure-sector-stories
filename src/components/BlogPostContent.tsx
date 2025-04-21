
import React from 'react';
import { Post } from '@/lib/supabase';
import CategoryBadge from './CategoryBadge';
import { Clock, ChevronLeft, Share, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';

interface BlogPostContentProps {
  post: Post;
  onBack?: () => void;
  standalone?: boolean;
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

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post, onBack, standalone = false }) => {
  const navigate = useNavigate();
  
  // Handle sharing functionality
  const handleShare = async () => {
    const postUrl = `${window.location.origin}/post/${post.slug || post.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: postUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        copyToClipboard(postUrl);
      }
    } else {
      copyToClipboard(postUrl);
    }
  };
  
  // Fallback copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success('Link copied to clipboard!'))
      .catch((err) => {
        console.error('Could not copy text: ', err);
        toast.error('Failed to copy link');
      });
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={handleBackClick}
        className="mb-6 flex items-center"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Button>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <CategoryBadge type="sector" value={post.sector} />
        <CategoryBadge type="contentType" value={post.contentType} />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex-1">
          {post.title}
        </h1>
        
        <Button
          variant="outline"
          size="icon"
          className="ml-4"
          onClick={handleShare}
          title="Share this post"
        >
          <Share className="h-4 w-4" />
        </Button>
      </div>
      
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
      
      {/* Shareable permalink section at the bottom */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center">
          <div className="text-sm text-muted-foreground mr-2">Permalink:</div>
          <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {`${window.location.origin}/post/${post.slug || post.id}`}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => copyToClipboard(`${window.location.origin}/post/${post.slug || post.id}`)}
          >
            <Link className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
