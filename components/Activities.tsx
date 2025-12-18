import React from 'react';
import { ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="font-heading font-bold text-3xl text-maarif-primary mb-2">Popüler Etkinlikler</h2>
                    <p className="text-gray-500">Öğrencilerin en çok sevdiği içerikleri keşfedin.</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-1 text-maarif-secondary font-semibold hover:gap-2 transition-all">
                    Tümünü Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ACTIVITIES.map((activity) => (
                    <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <div className="relative aspect-video overflow-hidden">
                            <img 
                                src={activity.image} 
                                alt={activity.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-maarif-primary shadow-sm">
                                {activity.grade}
                            </div>
                        </div>
                        <div className="p-5">
                            <div className={`flex items-center gap-2 mb-2 text-xs ${activity.categoryColorClass} font-bold uppercase tracking-wider`}>
                                <span className="material-symbols-outlined text-sm">{activity.categoryIcon}</span>
                                {activity.category}
                            </div>
                            <h3 className="font-heading font-bold text-lg text-maarif-primary mb-2 group-hover:text-maarif-accent transition-colors">
                                {activity.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{activity.description}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <span className="material-symbols-outlined text-sm">visibility</span> {activity.views}
                                </div>
                                <button className="bg-gray-100 hover:bg-maarif-secondary hover:text-white p-2 rounded-full transition-colors">
                                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <button className="bg-white text-maarif-primary border border-gray-300 font-medium py-3 px-6 rounded-lg w-full">
                    Tüm Etkinlikleri Gör
                </button>
            </div>
        </section>
    );
};

export default Activities;