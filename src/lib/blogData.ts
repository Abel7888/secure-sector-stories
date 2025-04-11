
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

// Sample blog data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Zero Trust Architecture in Healthcare: Protecting Patient Data',
    excerpt: 'How implementing zero trust architecture can safeguard sensitive patient information in modern healthcare environments.',
    content: 'In today\'s healthcare landscape, protecting sensitive patient data has become more challenging than ever. With the increasing number of connected devices and the shift to cloud-based solutions, traditional security perimeters are no longer sufficient. Zero Trust Architecture (ZTA) offers a modern approach to security by operating on the principle of "never trust, always verify." This means that no device, user, or application is trusted by default, regardless of whether it\'s located inside or outside the organization\'s network perimeter. In healthcare settings, ZTA can be particularly effective in securing electronic health records (EHR) systems, medical IoT devices, and telehealth platforms. By implementing continuous verification mechanisms, micro-segmentation, and least privilege access, healthcare organizations can significantly reduce their attack surface and mitigate the risk of data breaches.',
    publishedDate: '2025-04-01',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '/placeholder.svg'
    },
    featured: true,
    imageUrl: '/placeholder.svg',
    sector: 'healthcare',
    contentType: 'blog',
    readTime: 8
  },
  {
    id: '2',
    title: 'Blockchain for Supply Chain Transparency: Beyond the Hype',
    excerpt: 'Real-world applications of blockchain technology that are transforming supply chain security and traceability.',
    content: 'Blockchain technology has been heralded as a revolutionary solution for supply chain management, promising enhanced transparency, security, and efficiency. Beyond the hype, practical implementations are now demonstrating tangible benefits across various industries. By creating an immutable ledger of transactions and events, blockchain enables all supply chain participants to access a single source of truth. This has profound implications for traceability, especially in sectors like pharmaceuticals, food, and luxury goods, where counterfeiting and authenticity verification pose significant challenges. Smart contracts—self-executing contracts with the terms directly written into code—further enhance efficiency by automating verification processes and payments when predefined conditions are met. While challenges such as scalability and standardization remain, forward-thinking organizations are already leveraging blockchain to gain competitive advantages through enhanced supply chain visibility and security.',
    publishedDate: '2025-03-28',
    author: {
      name: 'Marcus Johnson',
      avatar: '/placeholder.svg'
    },
    featured: false,
    imageUrl: '/placeholder.svg',
    sector: 'supplychain',
    contentType: 'insight',
    readTime: 10
  },
  {
    id: '3',
    title: 'Securing Smart Buildings: Cybersecurity Challenges in Commercial Real Estate',
    excerpt: 'As buildings become smarter, the attack surface expands. Learn how to protect interconnected building systems.',
    content: 'The rise of smart buildings represents one of the most significant technological transformations in commercial real estate. Modern buildings now incorporate sophisticated Building Management Systems (BMS) that control everything from HVAC and lighting to access control and surveillance. While these interconnected systems offer unprecedented efficiency and convenience, they also introduce complex cybersecurity challenges. Each connected device potentially represents an entry point for malicious actors, creating an expanded attack surface that requires robust protection. Recent incidents have demonstrated that breaches in building systems can have serious consequences, from operational disruptions to physical security compromises. A comprehensive security strategy for smart buildings must include regular vulnerability assessments, network segmentation, firmware updates, and a clear incident response plan. By adopting a security-by-design approach and implementing proper governance frameworks, commercial real estate owners and operators can harness the benefits of smart building technology while effectively managing the associated cybersecurity risks.',
    publishedDate: '2025-03-25',
    author: {
      name: 'Alisha Patel',
      avatar: '/placeholder.svg'
    },
    featured: false,
    imageUrl: '/placeholder.svg',
    sector: 'realestate',
    contentType: 'blog',
    readTime: 7
  },
  {
    id: '4',
    title: 'AI-Powered Fraud Detection in Financial Services: A Case Study',
    excerpt: 'How a leading financial institution leveraged machine learning to reduce fraud by 87% while improving customer experience.',
    content: 'In an environment where financial fraud techniques are constantly evolving, traditional rule-based detection systems are increasingly insufficient. This case study examines how a leading global bank implemented an AI-powered fraud detection system to address these challenges. The bank was experiencing a significant increase in sophisticated fraud attempts that were bypassing their existing detection mechanisms, resulting in financial losses and eroded customer trust. By implementing a machine learning solution that could analyze thousands of transaction attributes in real-time and continuously learn from new patterns, the bank achieved remarkable results. The new system reduced fraud losses by 87% within the first six months, while simultaneously decreasing false positive rates by 63%, which significantly improved the customer experience. The implementation journey involved careful data preparation, model selection and training, integration with existing systems, and establishing appropriate governance mechanisms to ensure ethical use of AI. This case demonstrates that when properly implemented, AI-powered fraud detection can deliver compelling ROI while enhancing the overall security posture of financial institutions.',
    publishedDate: '2025-03-20',
    author: {
      name: 'Robert Zhang',
      avatar: '/placeholder.svg'
    },
    featured: true,
    imageUrl: '/placeholder.svg',
    sector: 'finance',
    contentType: 'case-study',
    readTime: 12
  },
  {
    id: '5',
    title: 'Medical Device Security: Addressing Vulnerabilities in Connected Healthcare',
    excerpt: 'Critical security considerations for the growing ecosystem of connected medical devices.',
    content: 'The proliferation of connected medical devices has transformed patient care, enabling remote monitoring, streamlined workflows, and improved treatment outcomes. However, this connectivity also introduces significant security risks that could compromise patient safety and privacy. Many medical devices were designed with functionality as the primary concern, often lacking robust security features. Legacy devices may run outdated operating systems with known vulnerabilities, while newer devices may have inadequate encryption or authentication mechanisms. The consequences of a security breach in this context can be severe, potentially allowing attackers to manipulate device functionality or access sensitive patient data. Healthcare organizations must adopt a comprehensive approach to medical device security, including conducting thorough security assessments before procurement, implementing network segmentation to isolate devices, establishing continuous monitoring systems, and developing incident response plans specific to medical device compromises. Manufacturers also have a responsibility to incorporate security by design, provide regular updates, and transparently disclose vulnerabilities. As regulatory frameworks evolve to address these challenges, collaboration between healthcare providers, device manufacturers, and security experts will be essential for creating a safer ecosystem of connected medical devices.',
    publishedDate: '2025-03-15',
    author: {
      name: 'Dr. James Wilson',
      avatar: '/placeholder.svg'
    },
    featured: false,
    imageUrl: '/placeholder.svg',
    sector: 'healthcare',
    contentType: 'insight',
    readTime: 9
  },
];

// Function to get all posts
export const getAllPosts = (): BlogPost[] => {
  return blogPosts;
};

// Function to get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Function to get posts by sector
export const getPostsBySector = (sector: Sector): BlogPost[] => {
  return blogPosts.filter(post => post.sector === sector);
};

// Function to get posts by content type
export const getPostsByContentType = (type: ContentType): BlogPost[] => {
  return blogPosts.filter(post => post.contentType === type);
};

// Function to get a post by ID
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// In a real application, this would be an API call to save a new post
export const savePost = (post: Omit<BlogPost, 'id'>): void => {
  console.log('Saving post:', post);
  // In a real app, this would make an API call to save the post
};
