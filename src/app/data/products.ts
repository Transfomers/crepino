export interface Product {
    id: number;
    name: {
        fr: string;
        en: string;
        ar: string;
    };
    price: number;
    image: string;
    description: {
        fr: string;
        en: string;
        ar: string;
    };
    category: string;
    popular?: boolean;
    available?: boolean;
}

export const categories = [
    'Tous',
    'Crêpes Sucrées',
    'Crêpes Salées',
    'Gaufres',
    'Milkshakes',
    'Boissons Chaudes',
    'Boissons Froides'
];

export const products: Product[] = [
    // Crêpes Sucrées
    {
        id: 1,
        name: {
            fr: 'Crêpe Sucre',
            en: 'Sugar Crepe',
            ar: 'كريب بالسكر'
        },
        price: 1500,
        image: 'https://images.unsplash.com/photo-1519676867240-f031ea443c0d?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Classique au sucre glace et beurre.',
            en: 'Classic with icing sugar and butter.',
            ar: 'كلاسيكية مع سكر ناعم وزبدة.'
        },
        category: 'Crêpes Sucrées',
        popular: true
    },
    {
        id: 2,
        name: {
            fr: 'Crêpe Nutella',
            en: 'Nutella Crepe',
            ar: 'كريب نوتيلا'
        },
        price: 2500,
        image: 'https://images.unsplash.com/photo-1519676867240-f031ea443c0d?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Généreusement garnie de Nutella fondant.',
            en: 'Generously filled with melted Nutella.',
            ar: 'محشوة بسخاء بالنوتيلا الذائبة.'
        },
        category: 'Crêpes Sucrées',
        popular: true
    },
    {
        id: 3,
        name: {
            fr: 'Crêpe Caramel Beurre Salé',
            en: 'Salted Caramel Crepe',
            ar: 'كريب كراميل مملح'
        },
        price: 2000,
        image: 'https://images.unsplash.com/photo-1519676867240-f031ea443c0d?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Caramel maison au beurre salé.',
            en: 'Homemade salted butter caramel.',
            ar: 'كراميل منزلي بالزبدة المملحة.'
        },
        category: 'Crêpes Sucrées'
    },

    // Crêpes Salées
    {
        id: 10,
        name: {
            fr: 'Crêpe Complète',
            en: 'Complete Crepe',
            ar: 'كريب كاملة'
        },
        price: 3500,
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Œuf, jambon, fromage emmental.',
            en: 'Egg, ham, Emmental cheese.',
            ar: 'بيض، لحم مقدد، جبن إيمنتال.'
        },
        category: 'Crêpes Salées',
        popular: true
    },
    {
        id: 11,
        name: {
            fr: 'Crêpe Poulet Champignons',
            en: 'Chicken Mushroom Crepe',
            ar: 'كريب دجاج وفطر'
        },
        price: 4000,
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Émincé de poulet, crème et champignons.',
            en: 'Sliced chicken, cream, and mushrooms.',
            ar: 'قطع دجاج، كريمة وفطر.'
        },
        category: 'Crêpes Salées'
    },

    // Gaufres
    {
        id: 20,
        name: {
            fr: 'Gaufre de Bruxelles',
            en: 'Brussels Waffle',
            ar: 'وافل بروكسل'
        },
        price: 2500,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Légère et croustillante.',
            en: 'Light and crispy.',
            ar: 'خفيفة ومقرمشة.'
        },
        category: 'Gaufres',
        popular: true
    },
    {
        id: 21,
        name: {
            fr: 'Gaufre Liégeoise',
            en: 'Liege Waffle',
            ar: 'وافل لييج'
        },
        price: 3000,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Aux perles de sucre caramélisées.',
            en: 'With caramelized sugar pearls.',
            ar: 'مع حبيبات السكر المكرمل.'
        },
        category: 'Gaufres'
    },

    // Milkshakes
    {
        id: 40,
        name: {
            fr: 'Milkshake Vanille Royale',
            en: 'Royal Vanilla Milkshake',
            ar: 'ميلك شيك فانيليا ملكية'
        },
        price: 3500,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Vanille de Madagascar et crème fouettée.',
            en: 'Madagascar vanilla and whipped cream.',
            ar: 'فانيليا مدغشقر وكريمة مخفوقة.'
        },
        category: 'Milkshakes',
        popular: true
    },
    {
        id: 41,
        name: {
            fr: 'Milkshake Choco-Oreo',
            en: 'Choco-Oreo Milkshake',
            ar: 'ميلك شيك شوكو-أوريو'
        },
        price: 4000,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Éclats d\'Oreo et chocolat fondant.',
            en: 'Oreo chunks and melted chocolate.',
            ar: 'قطع أوريو وشوكولاتة ذائبة.'
        },
        category: 'Milkshakes'
    },

    // Boissons Chaudes
    {
        id: 30,
        name: {
            fr: 'Cappuccino Artisanal',
            en: 'Artisanal Cappuccino',
            ar: 'كابوتشينو حرفي'
        },
        price: 2500,
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Espresso avec mousse de lait onctueuse.',
            en: 'Espresso with creamy milk foam.',
            ar: 'إسبريسو مع رغوة حليب كريمية.'
        },
        category: 'Boissons Chaudes',
        popular: true
    },
    {
        id: 31,
        name: {
            fr: 'Chocolat Chaud Gourmand',
            en: 'Gourmet Hot Chocolate',
            ar: 'شوكولاتة ساخنة فاخرة'
        },
        price: 3000,
        image: 'https://images.unsplash.com/photo-1544787210-2213d2429511?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Chocolat chaud avec crème chantilly.',
            en: 'Hot chocolate with whipped cream.',
            ar: 'شوكولاتة ساخنة مع كريمة مخفوقة.'
        },
        category: 'Boissons Chaudes'
    },

    // Boissons Froides
    {
        id: 50,
        name: {
            fr: 'Thé Glacé Maison',
            en: 'Homemade Iced Tea',
            ar: 'شاي مثلج منزلي'
        },
        price: 2000,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Infusion froide aux agrumes et menthe.',
            en: 'Cold brew with citrus and mint.',
            ar: 'منقوع بارد بالحمضيات والنعناع.'
        },
        category: 'Boissons Froides'
    },
    {
        id: 51,
        name: {
            fr: 'Mojito Passion (Sans Alcool)',
            en: 'Passion Mojito (Alcohol-Free)',
            ar: 'موهيتو باشن (بدون كحول)'
        },
        price: 3500,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        description: {
            fr: 'Fruit de la passion, menthe fraîche et citron.',
            en: 'Passion fruit, fresh mint, and lemon.',
            ar: 'فاكهة العاطفة، نعناع طازج وليمون.'
        },
        category: 'Boissons Froides',
        popular: true
    }
];
