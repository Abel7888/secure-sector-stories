
import React from 'react';
import { Shield, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">SecureSector</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Expert insights on cybersecurity and emerging technologies across critical industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground">Healthcare</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Finance</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Real Estate</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Supply Chain</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Content</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground">Blog Posts</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Case Studies</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Insights</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#about" className="hover:text-secondary-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {new Date().getFullYear()} SecureSector. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-secondary-foreground/70">
              Designed with security in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
