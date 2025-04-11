
import React from 'react';
import { Shield, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#57dcb3] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold"> Data Shield Blogs</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Expert insights on cybersecurity and emerging technologies across critical industries
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Healthcare</a></li>
              <li><a href="#" className="hover:text-white">Finance</a></li>
              <li><a href="#" className="hover:text-white">Real Estate</a></li>
              <li><a href="#" className="hover:text-white">Supply Chain</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Content</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Blog Posts</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Insights</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} SecureSector. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-white/70">
              Designed with security in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
