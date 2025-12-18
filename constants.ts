import { NavItem, Feature, Activity } from './types';

export const NAV_ITEMS: NavItem[] = [
    { label: "Ana Sayfa", href: "#" },
    { label: "5. Sınıf", href: "#" },
    { label: "6. Sınıf", href: "#" },
    { label: "Oyunlar", href: "#" },
    { label: "Sınavlar", href: "#" }
];

export const FEATURES: Feature[] = [
    {
        icon: "psychology",
        title: "Bilişsel Keşif",
        description: "Öğrencinin kendi hızında ilerleyebileceği, kavramları derinlemesine anlamasını sağlayan etkileşimli modüller.",
        colorClass: "text-maarif-accent",
        iconBgClass: "bg-blue-50 group-hover:bg-maarif-accent",
        borderColorClass: "hover:border-maarif-accent/50"
    },
    {
        icon: "sports_esports",
        title: "Oyunlaştırılmış Testler",
        description: "Sıkıcı sınavlar yerine, rozetler ve puanlarla desteklenen eğlenceli değerlendirme süreçleri.",
        colorClass: "text-maarif-secondary",
        iconBgClass: "bg-green-50 group-hover:bg-maarif-secondary",
        borderColorClass: "hover:border-maarif-secondary/50"
    },
    {
        icon: "emoji_objects",
        title: "Gerçek Hayat Problemleri",
        description: "Matematiğin günlük hayatta nasıl kullanıldığını gösteren senaryo tabanlı problemler.",
        colorClass: "text-orange-500",
        iconBgClass: "bg-orange-50 group-hover:bg-orange-500",
        borderColorClass: "hover:border-orange-400/50"
    }
];

export const ACTIVITIES: Activity[] = [
    {
        id: 1,
        title: "Geometrik Cisimler",
        description: "Prizmalar, küpler ve silindirlerin dünyasını keşfet.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSRimn7pNR8oRtqMSPdF9BiaoC0-Zil_4ntgcOpkja1PXyyFbIduRiGi_XS9Rjirx6Acflq8vUDhROdhGtotZyJg7JX_PHlVUEJnfLWbcBp7pMGyXJCxYJhteFD8cqYJI9t6kXnzXTdniLlTKbRNc8HTumwg9BkHWnVbcn4VXrqHQvjWuOHQ5wRgMpUH8GGMftl5I401J1cMMnAFrKlab_1sYgWHMeW7jS7yE0G3I9DncDsh-uFH4NcYtoCgxav2OcEYISbHcsMQ",
        views: "12.5k",
        grade: "5. Sınıf",
        category: "Geometri",
        categoryIcon: "shapes",
        categoryColorClass: "text-maarif-secondary"
    },
    {
        id: 2,
        title: "Kesirlerle Yolculuk",
        description: "Basit ve bileşik kesirleri eğlenceli bir oyunla öğren.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATNGmC6wW5nyE3rJqEJJoISHPO9KcJyFKBgtQsJulhXbHMKKxlzYKQci4P67qjTqHkxOw5czh6qjRI-N0Wg8DYF09kQFnO49KybjjfqareM5Yw6vCy2XXEqb9hnKL39slZD4TSmFl-DMKfLKSe4lniH-3KF1ppvY-aoemeU_EJCd2E6sz20AyQXi7ikJsX5jAdB2YiYbud16OoMXGA0xprHHDpowluWN6RBg4u5N0ZHVnjDW9KbGRLThWpacGVBVEUhT5GcMF7IQ",
        views: "8.2k",
        grade: "6. Sınıf",
        category: "Sayılar",
        categoryIcon: "pie_chart",
        categoryColorClass: "text-maarif-accent"
    },
    {
        id: 3,
        title: "Veri Analizi Dedektifi",
        description: "Grafikleri okuyarak gizemli olayları çöz.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjEacJDZt2FWKm8jOOo69iD2A8i3y9Wft2GX-rpjMnd0EHGNozvpgiCTNvWq9-bxnhuSSg1B6Z4Mz0eLXZ9gDBmr9jdHfh-K1ur-WF8WQT4igY39RChl6EErqNtNNgkAVnhs_weOTxccLbCSgsuCF80L25UgPQBT_twXhgdE9UBu-R5r8BVLncTayWuOo3B_e6be1OX7C6a8uk2_mO0gOBDbGdWmV9hQpqAGcnxMOeaFsIXGZwO0jeWe6UFSGc-T6ceAFQ2llsqw",
        views: "5.4k",
        grade: "6. Sınıf",
        category: "Veri İşleme",
        categoryIcon: "bar_chart",
        categoryColorClass: "text-orange-500"
    },
    {
        id: 4,
        title: "Sayı Avı Oyunu",
        description: "Gizlenmiş sayıları bul ve örüntüleri tamamla.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDntsOX1He-0MZyfWqfo4DHqkO3dRq6RBvBpqw4APIcP-m9TCoXNWC6lDboTvUwahiqibWgDbiHCLLQsBOycob-e_yabJW-Zw6-R85AhNghtEoEsj_OEcy6Zg3dEhIWbqLm-ztJs6tbNyhKNIdDfIIEURS0dfJbVJHhw8PUA8wrZHbeOYCCB3e5bpQB_xnsTpDmCzjB5ZAyTgipUY-_7rEooJPtEzOxe31aNp4XvPUKVCL875oDhQBcA9tHfVGjLuuswWVyXvYrA",
        views: "10.1k",
        grade: "Herkes İçin",
        category: "Mantık",
        categoryIcon: "extension",
        categoryColorClass: "text-red-500"
    }
];