
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminLoginForm from '@/components/AdminLoginForm';
import AdminPostEditor from '@/components/AdminPostEditor';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {isLoggedIn ? (
          <AdminPostEditor />
        ) : (
          <AdminLoginForm onLogin={() => setIsLoggedIn(true)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
