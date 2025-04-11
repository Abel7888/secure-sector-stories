
export type Sector = 'healthcare' | 'finance' | 'realestate' | 'supplychain';

export type ContentType = 'blog' | 'case-study' | 'insight';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author: {
    name: string;
    avatar?: string;
  };
  featured: boolean;
  imageUrl: string;
  sector: Sector;
  contentType: ContentType;
  readTime: number;
}

// Starting with an empty array instead of pre-written posts
let blogPosts: BlogPost[] = [];

// Function to get all posts
export const getAllPosts = (): BlogPost[] => {
  // Retrieve posts from localStorage if available
  const storedPosts = localStorage.getItem('blogPosts');
  if (storedPosts) {
    blogPosts = JSON.parse(storedPosts);
  }
  return blogPosts;
};

// Function to get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
};

// Function to get posts by sector
export const getPostsBySector = (sector: Sector): BlogPost[] => {
  return getAllPosts().filter(post => post.sector === sector);
};

// Function to get posts by content type
export const getPostsByContentType = (type: ContentType): BlogPost[] => {
  return getAllPosts().filter(post => post.contentType === type);
};

// Function to get a post by ID
export const getPostById = (id: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.id === id);
};

// Function to save a new post
export const savePost = (post: Omit<BlogPost, 'id'>): void => {
  const newPost = {
    ...post,
    id: `${Date.now()}` // Generate a unique ID
  };
  
  // Get current posts from localStorage
  const currentPosts = getAllPosts();
  
  // Add new post to the array
  currentPosts.unshift(newPost); // Add to the beginning to show newest first
  
  // Update blogPosts array
  blogPosts = currentPosts;
  
  // Save updated posts to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
  console.log('Post saved:', newPost);
};
