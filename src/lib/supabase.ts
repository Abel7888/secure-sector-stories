
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper for admin authentication
export const isAdmin = async (email: string) => {
  const { data, error } = await supabase
    .from('admins')
    .select('email')
    .eq('email', email)
    .single();

  if (error) {
    console.error('Error checking admin status:', error);
    return false;
  }

  return !!data;
};

// Post type definition
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  sector: string;
  contentType: string;
  readTime: number;
  imageUrl: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
  };
  created_at?: string;
}

// Create a new post
export const createPost = async (post: Omit<Post, 'id' | 'slug' | 'created_at'>) => {
  // Generate a slug from the title
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const { data, error } = await supabase
    .from('posts')
    .insert([{ ...post, slug }])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    throw error;
  }

  return data;
};

// Get all posts
export const getAllPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
};

// Get featured posts
export const getFeaturedPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }

  return data || [];
};

// Get posts by sector
export const getPostsBySector = async (sector: string): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('sector', sector)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by sector:', error);
    return [];
  }

  return data || [];
};

// Get posts by content type
export const getPostsByContentType = async (contentType: string): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('contentType', contentType)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by content type:', error);
    return [];
  }

  return data || [];
};

// Get a post by ID or slug
export const getPostByIdentifier = async (identifier: string): Promise<Post | null> => {
  // Check if this is an ID or a slug
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .or(`id.eq.${identifier},slug.eq.${identifier}`)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
};

// Delete a post
export const deletePost = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    return false;
  }

  return true;
};
