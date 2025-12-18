import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Activities from './components/Activities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Activities />
        <section className="bg-gradient-to-br from-maarif-primary to-gray-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <span className="material-symbols-outlined text-5xl text-maarif-secondary mb-4">rocket_launch</span>
            <h2 className="font-heading font-bold text-3xl mb-4">Öğrenme Yolculuğuna Başla</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Ücretsiz hesap oluşturarak binlerce interaktif içeriğe anında erişebilirsin.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-maarif-secondary hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                Hemen Kaydol
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;