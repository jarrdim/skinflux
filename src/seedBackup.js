import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const products = [
  {
    id: "648437b38c44d52b9542e340",
    name: "Aloe vera Gel - from 100% Pure Organic Aloe Infused with Manuka Honey, Stem Cell, Tea Tree Oil - Natural Raw Moisturizer for Face, Body, Hair. Perfect for Sunburn, Acne, Razor Bumps 16.9 fl oz",
    description: `Strongest & Purest Aloe Vera Gel on the Market: Our Aloe Gel is made from real freshly cut organic aloe leaves juice, not powder . Hence we recommend testing on less sensitive areas first to make sure no reactions occur before applying it on the face or any sensitive areas.
    Our products beat the competition: Our product is different and supreme from the competition because of our absorption quality leaving no sticky residue and leaving your skin, face and hair smooth and silky. Our Aloevera gel has Stem cells and Manuka Honey which helps with skin renewal by stimulating cell regeneration.
    Many Benefits of Nature's Miracle Plant - One gel many benefits. Use in soap, DIY hand sanitizing gel, sunscreen and lip gloss, Soothe your sunburn, stretch mark cream, wax kit, clear your acne scars and rashes scar, heal the sting out of bites, treat your cuts, reduce scalp itchiness and dandruff, help with the appearance of cellulite, shaving cream and more!`,
    price: 40,
    category: "Dry Skin Moisturizers",
    inStock: true,
    image: "https://m.media-amazon.com/images/I/71Z9uzhk3FL._AC_UL320_.jpg",

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment: "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: new Date("2023-06-26T15:53:44.483Z"),
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "FrankIT",
          email: "example1@gmail.com",
          emailVerified: null,
          image: "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
          hashedPassword: null,
          createdAt: new Date("2023-06-26T15:40:52.558Z"),
          updatedAt: new Date("2023-06-26T15:40:52.558Z"),
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: new Date("2023-06-26T14:30:40.998Z"),
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Jack SharonIT",
          email: "example@gmail.com",
          emailVerified: null,
          image: "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
          hashedPassword: null,
          createdAt: new Date("2023-05-30T08:08:53.979Z"),
          updatedAt: new Date("2023-05-30T08:08:53.979Z"),
          role: "ADMIN",
        },
      },
    ],
  },

  // ... other products

  // {
  //   id: "64a654593e91b8e73a351e9b",
  //   name: "CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides and Glycerin | Fragrance Free Paraben Free | 16 Fluid Ounce ",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam dolor? Dolorum, ut? Iure, odio soluta.",
  //   price: 2999,
  //   category: "Face cleansers",
  //   inStock: true,
  //   image: "https://m.media-amazon.com/images/I/816fB9Y6PVL._AC_UL320_.jpg",

  //   reviews: [],
  // },
  // {
  //   id: "64a4ebe300900d44bb50628a",
  //   name: "La Roche-Posay Toleriane Purifying Foaming Facial Cleanser, Oil Free Face Wash for Oily Skin and for Sensitive Skin with Niacinamide, Pore Cleanser Won’t Dry Out Skin, Unscented ",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam dolor? Dolorum, ut? Iure, odio soluta.",
  //   price: 102.99,
  //   category: "Face cleansers",
  //   inStock: true,
  //   image: "https://m.media-amazon.com/images/I/61MrUkt0sOL._AC_UL320_.jpg",

  //   reviews: [
  //     {
  //       id: "64a65a6158b470c6e06959ee",
  //       userId: "6475af156bad4917456e6e1e",
  //       productId: "64a4ebe300900d44bb50628a",
  //       rating: 5,
  //       comment: "good",
  //       createdDate: "2023-07-06T06:08:33.067Z",
  //       user: {
  //         id: "6475af156bad4917456e6e1e",
  //         name: "Guru",
  //         email: "example@gmail.com",
  //         emailVerified: null,
  //         image:
  //           "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
  //         hashedPassword: null,
  //         createdAt: "2023-05-30T08:08:53.979Z",
  //         updatedAt: "2023-05-30T08:08:53.979Z",
  //         role: "ADMIN",
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "64a4e9e77e72990783340187",
  //   name: "Beauty by Earth Organic Face Oil – Glowing & Radiant, for Dry, Normal or Sensitive Skin, Moringa, Jojoba Oil & Argan Oil, Face Oils and Serums, Facial Moisturizer, Brightening Oil for Face",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam doloLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam dolo",
  //   price: 40,
  //   category: "Organic serums and oils",
  //   inStock: true,
  //   image: "https://m.media-amazon.com/images/I/71uNAhlOvhL._AC_UL320_.jpg",

  //   reviews: [
  //     {
  //       id: "6499b4887402b0efd394d8f4",
  //       userId: "6499b184b0e9a8c8709821d3",
  //       productId: "64a4e9e77e72990783340187",
  //       rating: 4,
  //       comment:
  //         "good enough. I like the camera and casing. the delivery was fast too.",
  //       createdDate: "2023-06-26T15:53:44.483Z",
  //       user: {
  //         id: "6499b184b0e9a8c8709821d3",
  //         name: "Master",
  //         email: "example1@gmail.com",
  //         emailVerified: null,
  //         image:
  //           "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
  //         hashedPassword: null,
  //         createdAt: "2023-06-26T15:40:52.558Z",
  //         updatedAt: "2023-06-26T15:40:52.558Z",
  //         role: "USER",
  //       },
  //     },
  //     {
  //       id: "6499a110efe4e4de451c7ed5",
  //       userId: "6475af156bad4917456e6e1e",
  //       productId: "64a4e9e77e72990783340187",
  //       rating: 5,
  //       comment: "I really liked it!!",
  //       createdDate: "2023-06-26T14:30:40.998Z",
  //       user: {
  //         id: "6475af156bad4917456e6e1e",
  //         name: "Harry",
  //         email: "example@gmail.com",
  //         emailVerified: null,
  //         image:
  //           "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
  //         hashedPassword: null,
  //         createdAt: "2023-05-30T08:08:53.979Z",
  //         updatedAt: "2023-05-30T08:08:53.979Z",
  //         role: "ADMIN",
  //       },
  //     },
  //   ],
  // },

  // {
  //   id: "64a4e9e77e72990783340197",
  //   name: "Organic Anti Aging Face and Body Butter Cream for Dry Skin, Hair, Hands, Cuticle, Nails. Made of Almond, Olive, Jojoba Vitamin E, Lavender oil. Day and Night Moisturizer for Women and Men ",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam doloLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam dolo",
  //   price: 70,
  //   category: "Natural moisturizers",
  //   inStock: true,
  //   image: "https://m.media-amazon.com/images/I/61R-dP6RcEL._AC_UL320_.jpg",

  //   reviews: [],
  // },
  // {
  //   id: "649d775128b6744f0f497040",
  //   name: "Honest Beauty Hydrogel Cream with Hyaluronic Acid, Jojoba, ",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam doloLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa tempora, placeat fugiat nam dolo",
  //   price: 50,
  //   category: "Natural moisturizers",
  //   inStock: true,
  //   image: "https://m.media-amazon.com/images/I/81vZmEvFHpL._AC_UL320_.jpg",

  //   reviews: [],
  // },



];



async function main() {
  console.log("Seeding products...");

  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        inStock: product.inStock,
        image: product.image,
        reviews: {
          create: product.reviews.map(review => ({
            id: review.id,
            rating: review.rating,
            comment: review.comment,
            createdDate: review.createdDate,
            user: {
              connectOrCreate: {
                where: { id: review.user.id },
                create: {
                  id: review.user.id,
                  name: review.user.name,
                  email: review.user.email,
                  emailVerified: review.user.emailVerified,
                  image: review.user.image,
                  hashedPassword: review.user.hashedPassword,
                  createdAt: review.user.createdAt,
                  updatedAt: review.user.updatedAt,
                  role: review.user.role,
                },
              },
            },
          })),
        },
      },
    });

    console.log(`Created product with id: ${createdProduct.id}`);
  }

  console.log("Seeding completed.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
