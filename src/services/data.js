const data = {
    hamburgueres: [
        {
            id: 0,
            name: 'Pop Smash',
            thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/12/5f/9b/07/bravo-burger-thebravoburger.jpg',
            price: 12,
            comboPrice: 18,
            ingredients: [ 'Pão de Leite', 'Blend Smash (90g Carne)', 'Queijo', 'Molho Caseiro'],
            promotion: false,
            combo: false,
        },
        {
            id: 1,
            name: 'Indian Chef Chiken',
            thumbnail: 'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg',
            price: 15,
            comboPrice: 22,
            ingredients: [ 'Pão de Gergelim', 'Blend da Casa (150g Frango)', 'Bacon', 'Queijo', 'Tomate', 'Alface Americana', 'Molho Barbecue Caseiro' ],
            promotion: false,
            combo: false
        },
        {
            id: 2,
            name: 'Bobber Burger',
            thumbnail: 'https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg',
            price: 15,
            comboPrice: 22,
            ingredients: [ 'Pão de Gergelim', 'Blend da Casa (150g Carne)', 'Queijo', 'Tomate', 'Alface Americana', 'Molho Barbecue Caseiro'],
            promotion: false,
            combo: false
        },
        {
            id: 3,
            name: 'Brat Style',
            thumbnail: 'thumbnail',
            price: 18,
            comboPrice: 25,
            ingredients: [ 'Pão Australiano', 'Blend da Casa (150g Carne)', 'Bacon', 'Queijo', 'Cebola Caramelizada', 'Molho Barbecue Caseiro'],
            promotion: false,
            combo: false
        },
        {
            id: 4,
            name: 'Chopper Burger',
            thumbnail: 'https://nishkitchen.com/wp-content/uploads/2012/02/Beef-Burger-Patty-2-Ways-1B.jpg',
            price: 20,
            comboPrice: 25,
            ingredients: [ 'Pão de Gergelim', 'Blend da Casa (150g Carne)', 'Bacon', 'Queijo', 'Tomate', 'Picles de Cebola Roxa', 'Alface Americana', 'Molho Especial'],
            promotion: false,
            combo: false
        },
        {
            id: 5,
            name: 'Rat Biker',
            thumbnail: 'https://images.rappi.com.br/products/2101641212-1605106983001.jpg?d=128x90',
            price: 24,
            comboPrice: 28,
            ingredients: [ 'Pão de Gergelim', 'Blend da Casa (150g Carne)', 'Blend da Casa (150g Frango)', 'Duplo Queijo', 'Tomate', 'Alface Americana', 'Molho Especial'],
            promotion: false,
            combo: false
        },
        {
            id: 6,
            name: 'Brutal Burger',
            thumbnail: 'https://s2.glbimg.com/yVvDp-zKU-RQyCmcOiru_uRjNb0=/620x430/e.glbimg.com/og/ed/f/original/2019/10/24/rebel_whopper.jpg',
            price: 24,
            comboPrice: 30,
            ingredients: [ 'Pão de Gergelim', 'Blend da Casa (150g Carne)', 'Blend da Casa (150g Carne)' , 'Cebola Caramelizada', 'Duplo Bacon', 'Duplo Queijo', 'Molho Barbecue Caseiro'],
            promotion: true,
            combo: false
        },
        {
            id: 7,
            name: 'Tracker Burger',
            thumbnail: 'https://speisekarte.menu/storage/media/company_images/1483539/20150702-sous-vide-hamburger-anova-primary-1500x1125-1543694014.jpg',
            price: 24,
            comboPrice: 30,
            ingredients: [ 'Pão Australiano', 'Blend da Casa (150g Carne)', 'Queijo', 'Tomate Confitado', 'Rúcula', 'Molho Gorgonzola'],
            promotion: true,
            combo: false
        },
        {
            id: 8,
            name: 'Woodstock',
            thumbnail: 'https://speisekarte.menu/storage/media/company_images/1483539/20150702-sous-vide-hamburger-anova-primary-1500x1125-1543694014.jpg',
            price: 24,
            comboPrice: 29,
            ingredients: [ 'Pão de Gergelim', 'Mix de Cogumelos', 'Tomate Confitado', 'Rúcula', 'Alface'],
            promotion: true,
            combo: false
        }
    ],
    potatos: [
        {
            id: 100,
            name: 'Batata do Chef',
            thumbnail: 'thumbnail',
            price: 8,
            description: 'Batata do Chef!',
            promotion: false,
            combo: false
        },
        {
            id: 101,
            name: 'Batata Brutal',
            thumbnail: 'thumbnail',
            price: 35,
            description: 'Batata maçaricada!',
            promotion: false,
            combo: false
        }
    ],
    drinks: [
        {
            id: 102,
            name: 'Refrigerante',
            thumbnail: 'thumbnail',
            price: 4
        }
    ]
}

export default data;
