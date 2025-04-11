
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BlogPost, Sector, ContentType, savePost } from '@/lib/blogData';
import { toast } from 'sonner';
import { Save, Image, Clock } from 'lucide-react';

const AdminPostEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [sector, setSector] = useState<Sector>('healthcare');
  const [contentType, setContentType] = useState<ContentType>('blog');
  const [readTime, setReadTime] = useState(5);
  const [featured, setFeatured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validations
    if (title.trim() === '') {
      toast.error('Please enter a title for your post');
      setIsSubmitting(false);
      return;
    }
    
    if (excerpt.trim() === '') {
      toast.error('Please enter an excerpt for your post');
      setIsSubmitting(false);
      return;
    }
    
    if (content.trim() === '') {
      toast.error('Please enter content for your post');
      setIsSubmitting(false);
      return;
    }
    
    const newPost = {
      title,
      excerpt,
      content,
      sector,
      contentType,
      readTime,
      featured,
      publishedDate: new Date().toISOString().split('T')[0],
      author: {
        name: 'Admin User',
        avatar: '/placeholder.svg'
      },
      imageUrl: '/placeholder.svg'
    };
    
    // Save the post
    try {
      savePost(newPost);
      toast.success('Post created successfully!');
      
      // Reset form
      setTitle('');
      setExcerpt('');
      setContent('');
      setSector('healthcare');
      setContentType('blog');
      setReadTime(5);
      setFeatured(false);
    } catch (error) {
      toast.error('Failed to save post. Please try again.');
      console.error('Error saving post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Post</CardTitle>
          <CardDescription>Add a new blog post, case study, or insight</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter post title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea 
                id="excerpt" 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                placeholder="Brief summary of the post"
                required
                className="resize-none"
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Full content of the post"
                required
                className="resize-none"
                rows={10}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="sector">Sector</Label>
                <Select 
                  value={sector} 
                  onValueChange={(value) => setSector(value as Sector)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="supplychain">Supply Chain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select 
                  value={contentType} 
                  onValueChange={(value) => setContentType(value as ContentType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog</SelectItem>
                    <SelectItem value="case-study">Case Study</SelectItem>
                    <SelectItem value="insight">Insight</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="readTime" className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Read Time (minutes)
                </Label>
                <Input 
                  id="readTime" 
                  type="number" 
                  min="1"
                  max="60"
                  value={readTime} 
                  onChange={(e) => setReadTime(parseInt(e.target.value))} 
                />
              </div>
              
              <div className="space-y-2 flex items-end">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="featured">Featured Post</Label>
                </div>
              </div>
            </div>
            
            <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Image className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                <span className="flex items-center">
                  <Save className="mr-2 h-4 w-4" /> Save Post
                </span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminPostEditor;
