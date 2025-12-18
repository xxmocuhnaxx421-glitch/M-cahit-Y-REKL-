import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-maarif-secondary text-white p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                        <span className="material-symbols-outlined text-2xl">calculate</span>
                    </div>
                    <span className="font-heading font-bold text-2xl tracking-tight text-maarif-primary">
                        Maarif<span className="text-maarif-secondary">Mat</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
                    {NAV_ITEMS.map((item) => (
                        <a 
                            key={item.label}
                            href={item.href} 
                            className="hover:text-maarif-secondary transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maarif-secondary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-maarif-primary font-semibold hover:text-maarif-secondary transition-colors">
                        Giriş Yap
                    </button>
                    <button className="bg-maarif-secondary hover:bg-opacity-90 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5">
                        Kayıt Ol
                    </button>
                    <button 
                        className="lg:hidden text-maarif-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        {NAV_ITEMS.map((item) => (
                            <a 
                                key={item.label}
                                href={item.href} 
                                className="font-medium text-gray-600 hover:text-maarif-secondary"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="h-px bg-gray-100 my-2"></div>
                        <button className="text-left font-semibold text-maarif-primary hover:text-maarif-secondary">
                            Giriş Yap
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;