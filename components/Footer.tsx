import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="bg-maarif-primary text-white p-1.5 rounded-md">
                                <span className="material-symbols-outlined text-xl">calculate</span>
                            </div>
                            <span className="font-heading font-bold text-xl text-maarif-primary">
                                Maarif<span className="text-maarif-secondary">Mat</span>
                            </span>
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Matematiği sevdiren, öğreten ve geliştiren yeni nesil dijital kütüphane.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-maarif-primary transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-maarif-primary transition-colors">
                                <span className="material-symbols-outlined">mail</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-maarif-primary mb-6">Kurumsal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Vizyon & Misyon</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Kullanım Şartları</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Gizlilik Politikası</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-maarif-primary mb-6">İçerikler</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Müfredat</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">5. Sınıf Konuları</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">6. Sınıf Konuları</a></li>
                            <li><a href="#" className="hover:text-maarif-secondary transition-colors">Örnek Sınavlar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-maarif-primary mb-6">İletişim</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-maarif-secondary text-lg">call</span>
                                <span>+90553 370 4686</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">© 2024 MaarifMat. Tüm hakları saklıdır.</p>
                    <p className="text-xs text-gray-400">Türkiye Yüzyılı Maarif Modeli ile uyumludur.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;