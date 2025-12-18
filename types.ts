export interface NavItem {
    label: string;
    href: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
    colorClass: string;
    iconBgClass: string;
    borderColorClass: string;
}

export interface Activity {
    id: number;
    title: string;
    description: string;
    image: string;
    views: string;
    grade: string;
    category: string;
    categoryIcon: string;
    categoryColorClass: string;
}