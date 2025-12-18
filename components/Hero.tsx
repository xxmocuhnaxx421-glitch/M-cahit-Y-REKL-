import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-maarif-primary text-white overflow-hidden py-24 lg:py-32">
            {/* Background Blurs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-maarif-accent opacity-20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-maarif-secondary opacity-20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-6 backdrop-blur-sm text-maarif-secondary">
                    🚀 Geleceğin Eğitimi Burada
                </span>
                <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                    Matematiği <span className="text-transparent bg-clip-text bg-gradient-to-r from-maarif-secondary to-maarif-accent">Keşfederek</span> Öğrenin
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Türkiye Yüzyılı Maarif Modeli ile uyumlu, hayatın içinden etkileşimli içerikler ile matematiği sevin, anlayın ve uygulayın.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-maarif-secondary hover:bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-glow transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">explore</span>
                        Kütüphaneyi Keşfet
                    </button>
                    <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">play_circle</span>
                        Nasıl Çalışır?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;