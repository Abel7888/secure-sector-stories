
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import FeaturedPost from '@/components/FeaturedPost';
import SectorFilter from '@/components/SectorFilter';
import AboutSection from '@/components/AboutSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllPosts, getFeaturedPosts, getPostsBySector, getPostsByContentType, Sector, ContentType } from '@/lib/blogData';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [selectedSector, setSelectedSector] = useState<Sector | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  
  // Filter posts by sector and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesSector = selectedSector === 'all' || post.sector === selectedSector;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSector && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Featured Post */}
        {featuredPosts.length > 0 && (
          <section>
            <FeaturedPost post={featuredPosts[0]} />
          </section>
        )}
        
        {/* About Section */}
        <AboutSection />
        
        {/* Blog Posts Section */}
        <section className="py-16" id="blog">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="blog">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts
                    .filter(post => post.contentType === 'blog')
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="case-study">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts
                    .filter(post => post.contentType === 'case-study')
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="insight">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts
                    .filter(post => post.contentType === 'insight')
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
