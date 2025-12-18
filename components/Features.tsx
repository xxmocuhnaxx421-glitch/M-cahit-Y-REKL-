import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
    return (
        <section className="relative z-20 -mt-16 container mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => (
                    <div 
                        key={index}
                        className={`bg-white rounded-2xl p-8 shadow-soft border border-gray-100 ${feature.borderColorClass} transition-all duration-300 hover:-translate-y-2 group`}
                    >
                        <div className={`w-14 h-14 ${feature.iconBgClass} rounded-xl flex items-center justify-center ${feature.colorClass} group-hover:text-white mb-6 transition-colors`}>
                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-maarif-primary mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;