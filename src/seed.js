import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const products = [
  //DRY SKIN
  //Moisturizers ######DONE
  {
    id: "648437b38c44d52b9542e350",
    name: "Skin Flux Ultra Moisturizer - Deep Hydration Day Cream   ",
    description: `Skin Flux Ultra Moisturizer is designed to provide intense hydration throughout the day. This lightweight day cream is perfect for daily use, offering deep moisture without leaving a greasy residue. Its advanced formula contains hyaluronic acid, vitamins E and B5, and natural extracts`,
    price: 40,
    category: "Dry Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/w6qdgfab84tkv483pm16j/Add-a-heding-1-Photoroom.png?rlkey=uw25qzigd7ge0f2q3k79ayryy&st=0xn8lqxk&dl=1",

    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e350",
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
        productId: "648437b38c44d52b9542e350",
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
  {
    id: "648437b38c44d52b9542e880",
    name: "Skin Flux Lite Moisturizer - Overnight Nourishing Cream",
    description: `The Skin Flux Lite Moisturizer is an overnight cream that focuses on nourishing and revitalizing your skin while you sleep. Formulated with a blend of calming botanicals, peptides, and essential oils, this moisturizer helps repair and rejuvenate the skin.`,
    price: 60,
    category: "Dry Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/aurp09ez6gtvy7saf46vs/overnight-transformed.png?rlkey=ab6f37vj14r0x2j20in3e0qfn&st=9uwkoocl&dl=1",

    reviews: [],
  },
  {
    id: "648437b38c44d52b9542e110",
    name: "Skin Flux Supreme Moisturizer - Rich Repairing Balm",
    description: `Skin Flux Supreme Moisturizer is a rich, luxurious balm designed to provide intensive repair and hydration. This formula is packed with powerful antioxidants, ceramides, and natural oils that penetrate deeply to restore and protect the skin's barrier.`,
    price: 60,
    category: "Dry Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/69rhgzzix3pvhzrrjsyki/dry_skin-fY-bkr5PD-transformed.png?rlkey=08zysnyaeo0zn3xmero14zjxv&st=jy92oczd&dl=1",

    reviews: [],
  },


  // Face Washes #########DONE
  {
    id: "65a654593e91b8e63a351e9b",
    name: "Skin Flux Ultra Cleanser - Gentle Hydrating Gel ",
    description:
      "Skin Flux Ultra Cleanser is a gentle hydrating gel designed to cleanse the skin without stripping away its natural moisture. Enriched with soothing ingredients like aloe vera and chamomile, it effectively removes dirt, oil, and makeup while maintaining the skin's natural balance",
    price: 2999,
    category: "Face cleansers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/gplc4x0s9clpbsmlgwl52/Face_wash-transformed.png?rlkey=4677nbp64x1oacj9y2rf5v2k3&st=crrqf39r&dl=1",

    reviews: [],
  },
  {
    id: "65a654593e91b8e63a351e1b",
    name: "Skin Flux Supreme Cleanser - Moisture Lock Face Wash ",
    description:
      "Skin Flux Supreme Cleanser is a moisture-locking face wash that provides a luxurious cleansing experience. This formula is designed to cleanse deeply while retaining the skin's essential moisture. Featuring a blend of hyaluronic acid, ceramides, and natural oils, it leaves the skin feeling clean, soft, and hydrated. ",
    price: 2999,
    category: "Face cleansers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/3nx1g0ak7bx072clgtx13/Face_wash_-3-transformed.png?rlkey=69zyn5rlaqbeiifhg918j9hpj&st=6knqniut&dl=1",

    reviews: [],
  },
  {
    id: "64a7ebe300900d44bb50628a",
    name: 'Skin Flux Lite Cleanser - Creamy Comfort Cleanser',
    description:
      "The Skin Flux Lite Cleanser is a creamy, comforting cleanser perfect for everyday use. Its rich, non-foaming formula gently cleanses the skin, removing impurities while nourishing and hydrating. Infused with nourishing ingredients such as shea butter and oat extract, it calms and soothes the skin, making it ideal for sensitive and dry skin types.",
    price: 102.99,
    category: "Face cleansers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/9i4bjk71nxqly9otahfba/Face_wash_-2-transformed.png?rlkey=128gskwsrrxwx715qp2gqlm85&st=o939o5s4&dl=1",

    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a7ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Guru",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },


  //SERUMS #########DONE
  {
    id: "64a4e9e77e72990783340184",
    name: "Skin Flux Ultra Serum - Hyaluronic Acid Booster ",
    description:
      "Skin Flux Ultra Serum is a potent hyaluronic acid booster that delivers deep hydration and plumps the skin. This lightweight serum penetrates quickly to provide long-lasting moisture, reduce the appearance of fine lines, and enhance skin elasticity.",
    price: 40,
    category: "Dry Skin Serums",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/6mm8hec41xdd3gofm1vdd/serum-Photoroom.png?rlkey=xupoyty37ij6d0e1yh1bb2lc3&st=xtz33ji0&dl=1",

    reviews: [
      {
        id: "6499b4887402b0efd394d8f4",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "64a4e9e77e72990783340184",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Master",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7ed5",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4e9e77e72990783340184",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Harry",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/-3CreRhy0TKY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklrwxzrP6oD1XTRL5N4cYYXbAY7vw/photo.jpg?sz=46",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e72990783340131",
    name: "Skin Flux Lite Serum - Vitamin E Nourishing Serum",
    description:
      "The Skin Flux Lite Serum is enriched with Vitamin E to nourish and protect your skin. This antioxidant-rich formula helps to combat free radicals, improve skin texture, and promote a healthy glow. Lightweight and easily absorbed, this serum is perfect for daily use, leaving your skin smooth, soft, and revitalized",
    price: 40,
    category: "Dry Skin Serums",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/p4wdt2qqwan0ckz5z2qb0/serum-2-Photoroom.png?rlkey=r5obb604lg5jpmql1nrehhnrl&st=jbx69q3l&dl=1",

    reviews: [],
  },
  {
    id: "64a4e9e77e72990783340114",
    name: "Skin Flux Supreme Serum - Deep Moisture Repair Serum",
    description:
      "Skin Flux Supreme Serum is a deep moisture repair serum designed to rejuvenate and restore the skin. Infused with a blend of ceramides, peptides, and natural oils, this rich serum targets dryness, fine lines, and signs of aging.",
    price: 40,
    category: "Dry Skin Serums",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/plkpm7hkwom2iw7a4sxpg/Serum-3-Photoroom.png?rlkey=l3kloczdl2grstr7eo66336tm&st=9d6556mf&dl=1",

    reviews: [],
  },


  //TONERS ##########DONE
  {
    id: "64a4e9e77e72990783310114",
    name: "Skin Flux Ultra Toner - Hydrating Rose Water Mist",
    description:
      "Skin Flux Ultra Toner is a hydrating rose water mist that revitalizes and refreshes your skin. Infused with natural rose water and aloe vera, this toner provides a burst of hydration, balances the skin's pH, and soothes any irritation. Its fine mist application makes it perfect for a quick pick-me-up throughout the day, leaving your skin feeling dewy, refreshed, and beautifully scented.",
    price: 40,
    category: "Dry Skin Toners",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/rwkoaotglgkhlw7y6yv1i/Toner-Photoroom.png?rlkey=bb713m6xt726wgktfeuilvdxk&st=k9m3kz17&dl=1",

    reviews: [],
  },
  {
    id: "64a4e9e77e72990783350114",
    name: "Skin Flux Lite Toner - Soothing Chamomile Toner",
    description:
      "The Skin Flux Lite Toner is a soothing chamomile toner designed to calm and nourish the skin. Formulated with chamomile extract and witch hazel, this toner helps to reduce redness, tighten pores, and restore the skin's natural balance. Ideal for sensitive and irritated skin, it leaves your complexion feeling calm, smooth, and refreshed.",
    price: 40,
    category: "Dry Skin Toners",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/3kjccobkedxbflatza28y/Toner-2-Photoroom.png?rlkey=ktm6vq081yym0sgid29eyzidu&st=0apx9w33&dl=1",

    reviews: [],
  },
  {
    id: "64a4e9e77e72990783340514",
    name: "Skin Flux Supreme Sunscreen -Deep Moisture Essence",
    description:
      "Skin Flux Supreme Sunscreen is a rich, protective SPF 30 formula designed to provide comprehensive sun protection while deeply nourishing the skin. Infused with antioxidants, vitamins, and natural oils, this sunscreen helps to defend against UV rays and prevent premature aging. Suitable for dry and mature skin, it leaves your skin feeling soft, smooth, and well-protected.",
    price: 40,
    category: "Dry Skin Toners",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/779xrsktf3pexiungfh1o/Toner-3-Photoroom.png?rlkey=navr4ha12ixlkr0t2e5jtn6xp&st=of9apjho&dl=1",

    reviews: [],
  },


  //SUNSCREENS ###########DONE
  {
    id: "64a4e8e77e72990783310114",
    name: "Skin Flux Ultra Sunscreen - Rich Protective SPF 30 ",
    description:
      "Skin Flux Ultra Sunscreen is an SPF 30 hydrating lotion that provides broad-spectrum protection against UVA and UVB rays. This lightweight formula is enriched with moisturizing ingredients like hyaluronic acid and aloe vera, ensuring your skin stays hydrated while being protected from the sun.",
    price: 40,
    category: "Dry Skin Sunscreens",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/4getsef7su3a0h8j6i88i/Sunscreen-3-Photoroom.png?rlkey=8jmwfkyns72kzoi8lwkfil24g&st=2w5ksc6d&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e77e72990783350114",
    name: "Skin Flux Lite Sunscreen - SPF 50+ Moisture Shield",
    description:
      "The Skin Flux Lite Sunscreen is an SPF 50+ moisture shield that offers high-level sun protection and hydration. This non-greasy formula is packed with antioxidants and nourishing ingredients, helping to protect your skin from sun damage and environmental stressors.",
    price: 40,
    category: "Dry Skin Sunscreens",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/ic0hgh755fes71f7naogr/sunscreen-2-Photoroom.png?rlkey=i65wdl48xkd41q1jehcyghxbv&st=qdzzghs8&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e77e72990783340514",
    name: "Skin Flux Supreme Sunscreen - SPF 30 Combination Care",
    description:
      "Skin Flux Supreme Sunscreen is a rich, protective SPF 30 formula designed to provide comprehensive sun protection while deeply nourishing the skin. Infused with antioxidants, vitamins, and natural oils, this sunscreen helps to defend against UV rays and prevent premature aging. Suitable for dry and mature skin, it leaves your skin feeling soft, smooth, and well-protected.",
    price: 40,
    category: "Dry Skin Sunscreens",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/wkrs8y9j9847sbavi35jf/Sunscreen-Photoroom.png?rlkey=ofo3dfcvjyy3lnvbgfbbci013&st=masqd2xj&dl=1",

    reviews: [],
  },

  // For Oily Skin
  // Moisturizers ############33DONE
  {
    id: "64a4e8e77e72990783910114",
    name: "Skin Flux Ultra Moisturizer - Oil-Free Mattifying Gel",
    description:
      "Skin Flux Ultra Moisturizer is an oil-free mattifying gel specifically formulated for oily skin. This lightweight gel absorbs quickly and controls excess oil, providing a matte finish without clogging pores. Enriched with salicylic acid and niacinamide, it helps to reduce shine and prevent breakouts, keeping your skin clear and balanced.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/hscq8l5c5lma37d7e12dz/oily_skin-transformed.png?rlkey=y1objk2htx19lphg7mjpcaueu&st=iosyqyh3&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e77e72990783850114",
    name: ". Skin Flux Lite Moisturizer - Lightweight Hydration Gel",
    description:
      "The Skin Flux Lite Moisturizer is a lightweight hydration gel that delivers essential moisture without weighing down oily skin. Infused with hyaluronic acid and green tea extract, it provides long-lasting hydration while soothing and calming the skin. This non-greasy formula is perfect for daily use, ensuring your skin stays hydrated and fresh all day long.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/d8ulp06ezhsizycf8fuqx/Oily_skin_-2-transformed.png?rlkey=40bjwf3irbe59pikwb7gmwapn&st=ac96bjan&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e77e72990783740514",
    name: "Skin Flux Supreme Moisturizer - Pore Minimizing Moisturizer",
    description:
      "Skin Flux Supreme Moisturizer is a pore-minimizing moisturizer designed to refine and balance oily skin. Formulated with witch hazel and zinc PCA, it helps to tighten pores, control oil production, and improve skin texture. This lightweight moisturizer provides a smooth, matte finish, making it ideal for oily and combination skin types seeking a clearer, more even complexion",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/o47nbm3s1emuycdusmfzc/oily_skin_-3-transformed.png?rlkey=1a14mtj8pmy16p9iqumicyo3p&st=o5pevb1m&dl=1",

    reviews: [],
  },
  // Face Washes ##########DONE
  {
    id: "64a4e8e77e72990783910554",
    name: "Skin Flux Lite Cleanser - Oil Control Face Wash",
    description:
      "The Skin Flux Lite Cleanser is an oil control face wash designed to combat excess oil and shine. Formulated with salicylic acid and tea tree oil, it gently cleanses the skin while reducing oil production and preventing acne. This cleanser leaves your skin feeling clean, mattified, and refreshed.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/dil4456udyvsqqer3s7ty/oily_skin_face_wash_-2-transformed.png?rlkey=739os68fdx41khx1ec39zv9f4&st=lada0pe6&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e77e72990783850224",
    name: "Skin Flux Ultra Cleanser - Foaming Purifying Wash",
    description:
      "Skin Flux Ultra Cleanser is a foaming purifying wash that effectively removes excess oil, dirt, and impurities. Its rich, foamy lather deep cleanses without over-drying, leaving your skin feeling refreshed and balanced. Perfect for oily skin, this cleanser helps to prevent breakouts and keep your complexion clear.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/cld4ict0ioxmslx07b6m2/oily_skin_face_wash-transformed.png?rlkey=l2zkrwb5gihas9qukwcw4iezq&st=pdjsrca8&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e77e72990783740334",
    name: "Skin Flux Supreme Cleanser - Deep Clean Charcoal Wash",
    description:
      "Skin Flux Supreme Cleanser is a deep clean charcoal wash that targets impurities and excess oil. Infused with activated charcoal and kaolin clay, it detoxifies the skin by drawing out toxins and unclogging pores.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/klsndim3wflnzrvzn2efp/oliy_skin_face_wash-transformed.png?rlkey=nom3akzq3qae7osm5dnfzrt8n&st=f2929tyd&dl=1",

    reviews: [],
  },
  //Serums ##########DONE
  {
    id: "64a4e8e77e72990783910544",
    name: "Skin Flux Ultra Serum - Niacinamide Pore Refiner",
    description:
      "Skin Flux Ultra Serum is a Niacinamide Pore Refiner that helps to minimize the appearance of pores and control excess oil. Enriched with niacinamide and zinc, this lightweight serum reduces shine, refines skin texture, and promotes a smoother, more balanced complexion.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/agggeq6u194tnkj0ivvga/oily_skin_serum-transformed.png?rlkey=at9i0shit5m71dowzlqvg9zj6&st=vay8tnan&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e77e72990783850266",
    name: "Skin Flux Lite Serum - Blemish Control Serum",
    description:
      "The Skin Flux Lite Serum is a Blemish Control Serum designed to target and prevent breakouts. Formulated with salicylic acid and tea tree oil, it helps to unclog pores, reduce inflammation, and clear acne.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/64l2puxdjycc1vuos5h9w/oily_skin_serum_-2-transformed.png?rlkey=34seqxl81n5be3pjdvqaojtkc&st=3imha898&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e77e72990783740377",
    name: "Skin Flux Supreme Serum - Oil Balancing Complex ",
    description:
      "Skin Flux Supreme Serum is an Oil Balancing Complex that regulates sebum production and mattifies the skin. Infused with botanical extracts and hyaluronic acid, this serum hydrates without adding grease, keeping your skin balanced and shine-free.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/0vp00qctz0u7zoja9ad6x/oliy_skin_serum-transformed.png?rlkey=i9osbhh1h6t7amm0twgwb1ibz&st=ef8rz0ot&dl=1",

    reviews: [],
  },
  //Toners ###########DONE
  {
    id: "64a4e8e68e72990783910544",
    name: "Skin Flux Ultra Toner - Pore Tightening Witch Hazel ",
    description:
      "Skin Flux Ultra Toner is a pore tightening toner formulated with witch hazel to refine and minimize pores. This toner helps to balance oil production and soothe the skin, leaving it feeling refreshed and smooth.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/xcckdoxlv5xzmepx7l5sr/oily_skin_toner-transformed.png?rlkey=jfhmicakwkquai3pwmpx9tb1h&st=gvqfr7r8&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e99e72990783850266",
    name: "Skin Flux Lite Toner - Clarifying Green Tea Toner ",
    description:
      "The Skin Flux Lite Toner is a clarifying green tea toner that purifies and revitalizes oily skin. Enriched with green tea extract and antioxidants, it helps to reduce inflammation, control oil, and prevent breakouts.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/q3kthncmjzf2j0xdi7pn7/oily_skin_toner_-2-transformed.png?rlkey=uyyvx3shinle3p1sbyd3ih0wp&st=agf8azoj&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72990783740377",
    name: "Skin Flux Supreme Toner - Oil Control Astringent",
    description:
      "Skin Flux Supreme Toner is an oil control astringent designed to reduce excess oil and tighten pores. Formulated with salicylic acid and natural extracts, it helps to prevent acne and refine skin texture.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/sjwi094tr7jsssvub9cs6/oily_skin_toner_-3-transformed.png?rlkey=lgi933bm7kbsx9675z09aklnt&st=30xxegru&dl=1",

    reviews: [],
  },
  //Sunscreens ##########DONE
  {
    id: "64a4e8e68e72990783912544",
    name: "Skin Flux Ultra Sunscreen - SPF 30 Matte Finish",
    description:
      "Skin Flux Ultra Sunscreen is an SPF 30 sunscreen that provides a matte finish, ideal for oily skin. This lightweight formula offers broad-spectrum protection against UVA and UVB rays while controlling excess oil and shine. It leaves your skin feeling smooth, protected, and non-greasy.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/rn56mbxv93gqxe98m7qkr/Oily_skin_sunscreen-transformed.png?rlkey=2kmuo3lrtcaol3qby2jsf1amz&st=9lavws2t&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e99e72990783858266",
    name: "Skin Flux Lite Sunscreen - SPF 50 Oil-Free Shield ",
    description:
      "The Skin Flux Lite Sunscreen is an SPF 50 oil-free shield designed for high-level sun protection. Its non-comedogenic, oil-free formula protects the skin from harmful UV rays without clogging pores or causing breakouts",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/g33a9v84psv15o1ziu59h/oily_skin_sunscreen_-2-transformed.png?rlkey=toi94u18hzur2rlgybb05ptj7&st=w8wowu1q&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72990783743377",
    name: "Skin Flux Supreme Sunscreen - Lightweight Protective SPF 40 ",
    description:
      "Skin Flux Supreme Sunscreen is a lightweight protective SPF 40 sunscreen that offers broad-spectrum sun protection while being gentle on oily skin. This fast-absorbing formula provides effective UV defense without leaving a greasy residue, ensuring your skin remains fresh and shine-free throughout the day.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/sg265kb3qujluign4y558/oily_skin_sunscreen_-3-transformed.png?rlkey=zfcs30ubq10ah7mwpj8hq94wj&st=8ogjajxh&dl=1",

    reviews: [],
  },

  // For Combination Skin
  // Moisturizers          ##############DONE

  {
    id: "64a4e8e68e72870783912544",
    name: "Skin Flux Ultra Moisturizer - Balancing Day Cream ",
    description:
      "Skin Flux Ultra Moisturizer is a Balancing Day Cream designed to provide hydration while controlling excess oil. Infused with niacinamide and green tea extract, this lightweight cream helps to balance sebum production and minimize pores, leaving your skin smooth and matte throughout the day.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/aurp09ez6gtvy7saf46vs/overnight-transformed.png?rlkey=ab6f37vj14r0x2j20in3e0qfn&st=wfuw0yoe&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e99e72000783858266",
    name: "Skin Flux Lite Moisturizer - Adaptive Gel Cream",
    description:
      "The Skin Flux Lite Moisturizer is an Adaptive Gel Cream that offers lightweight hydration tailored to oily skin. Formulated with hyaluronic acid and aloe Vera, it adapts to your skin's needs, providing moisture without clogging pores or adding shine.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/c0znfg1i087tunp4s2rvu/Combination_skin_-2-transformed.png?rlkey=2j2l26dbqsefw8t3an0hg5mk8&st=meb1ijly&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72540783743377",
    name: "Skin Flux Supreme Moisturizer - Hydrate & Balance Lotion ",
    description:
      " Skin Flux Supreme Moisturizer is a Hydrate & Balance Lotion that delivers essential moisture while controlling oil. With ingredients like witch hazel and salicylic acid, it helps to keep your skin clear and balanced.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/hscq8l5c5lma37d7e12dz/oily_skin-transformed.png?rlkey=y1objk2htx19lphg7mjpcaueu&st=se6e3s5r&dl=1",

    reviews: [],
  },
  // Face Washes   ###########DONE

  {
    id: "64a4e8e68e74870783912544",
    name: "Skin Flux Ultra Cleanser - Gentle Balancing Wash",
    description:
      "Skin Flux Ultra Cleanser is a Gentle Balancing Wash designed to cleanse and purify oily skin without stripping away natural moisture. Enriched with chamomile and cucumber extracts, it helps to soothe and balance the skin, leaving it refreshed and clear.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/zo9omr3xjjhft0n6rsjpp/combination_skin_-4-transformed.png?rlkey=q419jlz1crn85aol0e4l3cq8d&st=zy56ozza&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e99e74000783858266",
    name: "Skin Flux Lite Cleanser - Dual Action Cleanser",
    description:
      "The Skin Flux Lite Cleanser is a Dual Action Cleanser that targets both oil and impurities. Formulated with salicylic acid and tea tree oil, it gently exfoliates and deep cleanses to prevent breakouts and control excess oil.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/joxvrvmbkbwqbajm5ab46/combination_skin_-5-transformed.png?rlkey=ssnz4hva07o8ph5mk789wsu55&st=0hgp3rv9&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72550783743377",
    name: "Skin Flux Supreme Cleanser - T-Zone Control Wash",
    description:
      "Skin Flux Supreme Cleanser is a T-Zone Control Wash specifically designed to address oily areas like the T-zone. Infused with charcoal and witch hazel, it effectively removes excess oil, unclogs pores, and refines skin texture, leaving your skin feeling clean and mattified.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/vff61fhemr8x6d48lt91d/Combination_skin_-6-transformed.png?rlkey=7d5rhss7uy9zetj4o3ylqt3x3&st=u5lblsix&dl=1",

    reviews: [],
  },
  // Serums ### DONE

  {
    id: "64a4e8e68e74870783912514",
    name: "Skin Flux Ultra Serum - Adaptive Moisture Serum",
    description:
      "Skin Flux Ultra Serum is an Adaptive Moisture Serum that provides tailored hydration for oily skin. Infused with hyaluronic acid and aloe Vera, this lightweight serum adapts to your skin's needs, offering moisture without adding grease.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/rceev5c91xy5u63o0yxzo/Combination_skin_-7-transformed.png?rlkey=mhfi3fjr49dflrttjg1ebla8e&st=gkj16bvq&dl=1",

    reviews: [],
  },
  {
    id: "64a4e0e99e74000783858226",
    name: "Skin Flux Lite Serum - Even Tone Serum ",
    description:
      "The Skin Flux Lite Serum is an Even Tone Serum designed to brighten and even out skin tone. Formulated with niacinamide and vitamin C, it helps to reduce dark spots, redness, and hyperpigmentation, leaving your skin looking clear, radiant, and more evenly toned.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/9dl7u2iczv3q9nlyao048/combination_skin_-10-transformed.png?rlkey=6d2etbm9vmwv8gt54hh7qnz73&st=7s9bt4ha&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72550783743337",
    name: "Skin Flux Supreme Serum - Balance Boost Serum ",
    description:
      "Skin Flux Supreme Serum is a Balance Boost Serum that targets excess oil and helps to refine skin texture. Enriched with salicylic acid and green tea extract, it balances sebum production, unclogs pores, and reduces shine, promoting a smooth and matte finish for oily skin.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/2vaw7ljqfqsnfkx0ogvt7/Combination_skin_-8-transformed.png?rlkey=tflfb3dzxcwlsu17zeoty7m4a&st=70v6a5mt&dl=1",

    reviews: [],
  },
  //COBINATION SUNSCREEN  ##########3DONE
  {
    id: "64a2e8e68e74870783912514",
    name: "Skin Flux Ultra Sunscreen - SPF 30 Combination Care",
    description:
      "Skin Flux Ultra Sunscreen is an SPF 30 Combination Care sunscreen designed for oily skin. It provides broad-spectrum protection while balancing moisture levels and controlling shine. This lightweight formula leaves a matte finish and ensures your skin stays protected and clear.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/18xmycwngbcsakerp65qb/combination_sunscreen-transformed.png?rlkey=cy54cpj86q98i3cbkbn2t7pa7&st=1h9tcbsz&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e99e74000783858226",
    name: "Skin Flux Lite Sunscreen - SPF 50+ Balance Shield ",
    description:
      "The Skin Flux Lite Sunscreen is an SPF 50+ Balance Shield that offers high-level sun protection for oily skin. Its non-greasy, oil-free formula shields the skin from UV rays without clogging pores. Ideal for outdoor activities, it keeps your skin protected and shine-free.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/zppcz0j1v9ivafzi5k2fd/combination_sunscreen_-2-transformed.png?rlkey=yny5p8hoi9zo8l6eesw2ydw8h&st=36gejt96&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72550783743937",
    name: "Skin Flux Supreme Sunscreen - Adaptive Protective SPF 30",
    description:
      "Skin Flux Supreme Sunscreen is an Adaptive Protective SPF 30 sunscreen that adjusts to your skin's needs, providing effective UV protection and oil control. This lightweight sunscreen ensures a clear and balanced complexion, making it perfect for oily and combination skin.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/e53nkzzw5d1t1nk5fphji/Combination_sunscreen_-3-transformed.png?rlkey=9sjgtya7zfo123b0qwkrf0ksm&st=plszdal5&dl=1",

    reviews: [],
  },
  //Moisturizers for Sensitive Skin by Skin Flux ###DONE
  {
    id: "64a2e8e68e74870783912500",
    name: "Skin Flux Ultra Moisturizer - Calming Day Cream",
    description:
      "Skin Flux Ultra Moisturizer is a Calming Day Cream formulated for sensitive skin. Enriched with chamomile and aloe vera, it provides soothing hydration and reduces redness and irritation. This gentle cream leaves your skin feeling calm, hydrated, and protected throughout the day",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/s47ayh7svvjbu99lfczxa/Sensitive-skin-Photoroom.png?rlkey=ybyyrq5tiafvv2f06g3iyvhtc&st=lpvc6js6&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e99e74000783858286",
    name: "Skin Flux Lite Moisturizer - Gentle Soothing Cream",
    description:
      "The Skin Flux Lite Moisturizer is a Gentle Soothing Cream designed to provide lightweight hydration for sensitive skin. Infused with oat extract and shea butter, it calms and nourishes the skin, alleviating dryness and discomfort. Perfect for daily use, it keeps your skin soft and smooth.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/gvz2yqrgzp1j6upcr18ov/sensitive-skin-2-Photoroom.png?rlkey=bpzw7yiyhnspmh8f9ysdruaaj&st=p3wo9xrf&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e71e72550783743037",
    name: "Skin Flux Supreme Moisturizer - Sensitive Repair Balm",
    description:
      "Skin Flux Supreme Moisturizer is a Sensitive Repair Balm that offers intense hydration and repair for sensitive skin. Formulated with ceramides and allantoin, it helps to strengthen the skin barrier and soothe irritation. This rich balm provides long-lasting moisture and comfort.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/i8h9f8sdsm6ltqcwsco24/Sensitive-skin-3-Photoroom-1.png?rlkey=chnhjnzl2c83i2662u552kqgp&st=l0w6o9mk&dl=1",

    reviews: [],
  },
  //Face Washes for Sensitive Skin by Skin Flux ########DONE 
  {
    id: "64a2e8e68e77870783912511",
    name: "Skin Flux Ultra Cleanser - Gentle Soothing Wash",
    description:
      "Skin Flux Ultra Cleanser is a Gentle Soothing Wash designed for sensitive skin. It gently cleanses without stripping away natural moisture, using ingredients like chamomile and cucumber to calm and soothe the skin. This cleanser leaves your skin feeling clean, soft, and refreshed.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/gplc4x0s9clpbsmlgwl52/Face_wash-transformed.png?rlkey=4677nbp64x1oacj9y2rf5v2k3&st=igmrmzdl&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e19e74000783858226",
    name: "Skin Flux Lite Cleanser - Mild Comfort Cleanser",
    description:
      "The Skin Flux Lite Cleanser is a Mild Comfort Cleanser that offers a gentle yet effective cleanse for sensitive skin. Infused with aloe vera and oat extract, it removes impurities while maintaining the skin’s natural balance. This cleanser ensures your skin feels comfortable and hydrated.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/ak0i67ob9uwnjnymhjsmq/Sensitive_face_wash-transformed.png?rlkey=kthgtwsi9in0cn19yv0o50ikv&st=tpqhlpu9&dl=1",

    reviews: [],
  },
  {
    id: "64a4e1e41e72550783743030",
    name: "Skin Flux Supreme Cleanser - Sensitive Relief Wash",
    description:
      "Skin Flux Supreme Cleanser is a Sensitive Relief Wash that provides a thorough but gentle cleanse for sensitive skin. Formulated with calendula and allantoin, it soothes irritation and redness while cleansing. This wash leaves your skin feeling calm, clean, and relieved.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/jctnmbiyuybazgvas5xv1/sensitive_face_wash_-3-transformed.png?rlkey=9ruya48311nkqpdwhfx4mvuto&st=79zss3r0&dl=1",

    reviews: [],
  },
  //Serums for Sensitive Skin by Skin Flux   #####DONE
  {
    id: "64a2e1e68e77870783912511",
    name: "Skin Flux Ultra Serum - Calming Relief Serum",
    description:
      "Skin Flux Ultra Serum is a Calming Relief Serum formulated to soothe and hydrate sensitive skin. With ingredients like hyaluronic acid and chamomile extract, it reduces redness and irritation, providing immediate relief and long-lasting moisture.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/126fltib0c5sd94yh79yo/sensitive_serum-transformed.png?rlkey=5zli3yums8w0j5xngdpuxfxbd&st=7ywkkwmv&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e19e14000783858326",
    name: "Skin Flux Lite Serum - Soothing Repair Serum",
    description:
      "The Skin Flux Lite Cleanser is a Mild Comfort Cleanser that offers a gentle yet effective cleanse for sensitive skin. Infused with aloe vera and oat extract, it removes impurities while maintaining the skin’s natural balance. This cleanser ensures your skin feels comfortable and hydrated.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/cr86kv9m26b2jcd49us3s/sensitive_serum_-2-transformed.png?rlkey=gf1ijk3louyo9yk86dep5iehu&st=ltoi204l&dl=1",

    reviews: [],
  },
  {
    id: "64a5e1e41e72550783743031",
    name: "Skin Flux Supreme Serum - Redness Relief Complex",
    description:
      "Skin Flux Supreme Serum is a Redness Relief Complex that targets redness and irritation in sensitive skin. Formulated with peptides and green tea extract, it soothes and calms the skin while improving overall skin tone. This serum ensures a clearer, more even complexion.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/qroztjxfnad08137zyigb/sensitive_serum_-3-transformed.png?rlkey=7rt4uv0wtxl2261umh4w10p29&st=6cfs6qve&dl=1",

    reviews: [],
  },
  //Toners for Sensitive Skin by Skin Flux #########DONE
  {
    id: "64a2e1e68e79870783912511",
    name: "Skin Flux Ultra Toner - Soothing Aloe Toner",
    description:
      "Skin Flux Ultra Toner is a Soothing Aloe Toner designed to calm and hydrate sensitive skin. Enriched with aloe vera and chamomile, it reduces redness and soothes irritation, leaving your skin feeling refreshed and balanced.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/0l0sdu73ahbq1gqtulxrj/sensitive-toner-Photoroom.png?rlkey=enfyqw39dfol9e0wiaztm1dj0&st=vn5mk3iy&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e19e14680783858326",
    name: "Skin Flux Lite Toner - Calming Chamomile Toner",
    description:
      "The Skin Flux Lite Toner is a Calming Chamomile Toner that provides gentle hydration and soothing care for sensitive skin. With chamomile and oat extract, it helps to calm and nourish the skin, ensuring a smooth and comfortable complexion.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/k3zhct8lr94h6txgk4zm1/sensitive-toner-2-Photoroom.png?rlkey=xptv2y77s2vlw3vgvpc2i8yzd&st=g8ak6cre&dl=1",

    reviews: [],
  },
  {
    id: "64a5e1e41e72910783743031",
    name: "Skin Flux Supreme Toner - Sensitive Care Toner",
    description:
      "Skin Flux Supreme Toner is a Sensitive Care Toner formulated to provide hydration and relief for sensitive skin. Infused with calendula and allantoin, it soothes irritation and helps to restore the skin’s natural balance. This toner leaves your skin feeling calm, soft, and refreshed.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/twynj7476fzn6wg2d8g46/sensitive-toner-3-Photoroom.png?rlkey=1tdrq2nfzdjw3guizp48lrgzd&st=swcbvusm&dl=1",

    reviews: [],
  },
  //Sunscreens for Sensitive Skin by Skin Flux ##########DONE
  {
    id: "64a2e1e68e79870783012521",
    name: "Skin Flux Ultra Sunscreen - SPF 30 Gentle Protection",
    description:
      "Skin Flux Ultra Sunscreen is an SPF 30 Gentle Protection sunscreen designed for sensitive skin. This lightweight formula offers broad-spectrum protection while soothing and hydrating the skin. It provides effective sun defense without causing irritation.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/p5ck4xrvy6zwny7bl8pz1/sensitive-sunscreen-Photoroom.png?rlkey=mxb8wiwcyzzeny14bj2h12vn7&st=g28wchwa&dl=1",

    reviews: [],
  },
  {
    id: "64a1e0e19e14680783458301",
    name: "Skin Flux Lite Sunscreen - SPF 50+ Sensitive Shield",
    description:
      " The Skin Flux Lite Sunscreen is an SPF 50+ Sensitive Shield that offers high-level sun protection for sensitive skin. Its gentle, non-irritating formula shields the skin from UV rays while providing hydration and comfort. Perfect for daily use, it ensures your skin stays protected and calm.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/of1m15cpha5xf1m7o8q3n/sensitive-sunscreen-2-Photoroom.png?rlkey=o1o1h6xijrvn02fy7pfchriza&st=lgtizmgl&dl=1",

    reviews: [],
  },
  {
    id: "64a5e1e41e70910783743081",
    name: "Skin Flux Supreme Sunscreen - Calming Protective SPF 30",
    description:
      "Skin Flux Supreme Sunscreen is a Calming Protective SPF 30 sunscreen that provides broad-spectrum sun protection and soothes sensitive skin. Enriched with calming ingredients like aloe vera and green tea, it reduces irritation and keeps your skin protected and comfortable.",
    price: 40,
    category: "Oily Skin Moisturizers",
    inStock: true,
    image: "https://www.dropbox.com/scl/fi/2yq6vagoik32xelxc74cw/sensitive-sunscreen-3-Photoroom.png?rlkey=c1fm387y61xk7afy36xjvmht5&st=4l7y2mjq&dl=1",

    reviews: [],
  },


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
