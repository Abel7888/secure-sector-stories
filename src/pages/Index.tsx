
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import FeaturedPost from '@/components/FeaturedPost';
import BlogPostContent from '@/components/BlogPostContent';
import SectorFilter from '@/components/SectorFilter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Post, getAllPosts, getFeaturedPosts, Sector } from '@/lib/supabase';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [selectedSector, setSelectedSector] = useState<Sector | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Fetch posts using React Query
  const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts
  });
  
  // Fetch featured posts
  const { data: featuredPosts = [], isLoading: isLoadingFeatured } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: getFeaturedPosts
  });
  
  // Filter posts by sector and search query
  const filteredPosts = posts.filter((post: Post) => {
    const matchesSector = selectedSector === 'all' || post.sector === selectedSector;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSector && matchesSearch;
  });

  const handlePostClick = (post: Post) => {
    navigate(`/post/${post.slug || post.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <>
          {/* Hero Section with Featured Post */}
          {!isLoadingFeatured && featuredPosts.length > 0 && (
            <section>
              <FeaturedPost 
                post={featuredPosts[0]} 
                onClick={() => handlePostClick(featuredPosts[0])} 
              />
            </section>
          )}
          
          {/* Blog Posts Section */}
          <section className="py-16">
            <div className="container px-4 mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 className="text-3xl font-bold">Latest Content</h2>
                
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search posts..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <SectorFilter selectedSector={selectedSector} setSelectedSector={setSelectedSector} />
              </div>
              
              <Tabs defaultValue="all">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="blog">Blogs</TabsTrigger>
                  <TabsTrigger value="case-study">Case Studies</TabsTrigger>
                  <TabsTrigger value="insight">Insights</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  {isLoadingPosts ? (
                    <div className="text-center py-12">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts.map((post: Post) => (
                        <BlogCard 
                          key={post.id} 
                          post={post} 
                          onClick={() => handlePostClick(post)} 
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground">No posts found matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="blog">
                  {isLoadingPosts ? (
                    <div className="text-center py-12">Loading...</div>
                  ) : filteredPosts.filter((post: Post) => post.contentType === 'blog').length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts
                        .filter((post: Post) => post.contentType === 'blog')
                        .map((post: Post) => (
                          <BlogCard 
                            key={post.id} 
                            post={post} 
                            onClick={() => handlePostClick(post)} 
                          />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground">No blog posts found matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="case-study">
                  {isLoadingPosts ? (
                    <div className="text-center py-12">Loading...</div>
                  ) : filteredPosts.filter((post: Post) => post.contentType === 'case-study').length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts
                        .filter((post: Post) => post.contentType === 'case-study')
                        .map((post: Post) => (
                          <BlogCard 
                            key={post.id} 
                            post={post} 
                            onClick={() => handlePostClick(post)} 
                          />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground">No case studies found matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="insight">
                  {isLoadingPosts ? (
                    <div className="text-center py-12">Loading...</div>
                  ) : filteredPosts.filter((post: Post) => post.contentType === 'insight').length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts
                        .filter((post: Post) => post.contentType === 'insight')
                        .map((post: Post) => (
                          <BlogCard 
                            key={post.id} 
                            post={post} 
                            onClick={() => handlePostClick(post)} 
                          />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground">No insights found matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
