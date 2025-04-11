
import React from 'react';
import { Shield, Lock, Server, HelpingHand } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted" id="about">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Secure Sector Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing expert insights on cybersecurity and emerging technologies across critical industries.
            Our mission is to help organizations navigate the complex digital transformation landscape securely.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Cybersecurity Expertise",
              description: "In-depth analysis of security trends, vulnerabilities, and best practices from industry professionals."
            },
            {
              icon: <Server className="h-10 w-10 text-primary" />,
              title: "Emerging Technologies",
              description: "Exploration of AI, blockchain, IoT and other transformative technologies reshaping industries."
            },
            {
              icon: <HelpingHand className="h-10 w-10 text-primary" />,
              title: "Industry Insights",
              description: "Specialized knowledge across healthcare, finance, real estate, and supply chain sectors."
            },
            {
              icon: <Lock className="h-10 w-10 text-primary" />,
              title: "Security Solutions",
              description: "Practical approaches to implementing robust security in diverse organizational contexts."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
