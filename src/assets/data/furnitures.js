import productImg01 from "../images/double-sofa-01.png";
import productImg02 from "../images/double-sofa-04.jpg";
import productImg03 from "../images/double-sofa-03.png";

import productImg04 from "../images/single-sofa-01.jpg";
import productImg05 from "../images/single-sofa-02.jpg";
import productImg06 from "../images/single-sofa-03.jpg";
import productImg007 from "../images/single-sofa-04.png";

import productImg07 from "../images/old-chair-01.jpg";
import productImg08 from "../images/arm-chair-02.jpg";
import productImg09 from "../images/arm-chair-03.jpg";
import productImg10 from "../images/arm-chair-01.jpg";

import productImg13 from "../images/storage-01.jpg";
import productImg14 from "../images/storage-02.jpg";
import productImg15 from "../images/storage-03.jpg";
import productImg16 from "../images/storage-04.jpg";
import productImg17 from "../images/storage-05.jpg";
import productImg18 from "../images/storage-06.jpg";

import productImg19 from "../images/bed-01.jpg";
import productImg20 from "../images/bed-02.jpg";
import productImg21 from "../images/bed-03.jpg";
import productImg22 from "../images/bed-04.jpg";

import productImg23 from "../images/wood-desk-01.jpg";
import productImg25 from "../images/wood-desk-02.jpg";

const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    categoryAll: "ALL",
    price: 193,
    shortDesc: "Modern design fits into any contemporary interior.",
    description:
      "Solid construction made of wood and OSB. Cover made of quality Velor material, in many modern shades. The sofa can easily be converted into a bed. Modern design fits into any contemporary interior. ",
    reviews: [
      {
        rating: 4.7,
        text: "Good product",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Modern Sofa",
    imgUrl: productImg02,
    category: "sofa",
    categoryAll: "ALL",
    price: 253,
    shortDesc: "Beautiful elaborate upholstered sofa in brown color.",
    description:
      "The sofa has a Scandinavian style, is suitable for two people, fits any interior, and is made of quality materials. The velvety style of the gray sofa is also thanks to the Velur Royal fabric, which is pleasant and soft to the touch and resistant to pilling. The appearance of the sofa is enhanced by the quilting of the backrest, which is filled with T25 foam. The sofa stands on wooden legs. The seat is made of T30 foam and ensures problem-free, long and especially comfortable use of the sofa",
    reviews: [
      {
        rating: 4.8,
        text: "Best sofa.",
      },
      {
        rating: 4.8,
        text: "I Like it",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    categoryAll: "ALL",
    price: 173,
    shortDesc: "This is a comfortable 2-seater sofa",
    description:
      "With its refined appearance, this comfortable 2-seater sofa can be an excellent addition to any living room interior. The frame is made of pine wood, so the furniture is stable and durable. It has a comfortable and high-quality fabric upholstery. The solid base further increases the stability of the sofa. Assembly is simple.",
    reviews: [
      {
        rating: 4.6,
        text: "Quick Release",
      },
      {
        rating: 4.9,
        text: "Easy Assembly",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg05,
    category: "sofa",
    categoryAll: "ALL",
    price: 253,
    shortDesc: "Chesterfield Style Elegant Light Gray Fabric single sofa.",
    description:
      "You can relax perfectly in this armchair! The gray fabric structure of the armchair guarantees true relaxation. This chair stylishly and elegantly complements and beautifies any room. With its fashionable button outline, it will enhance even the most minimalist style. In addition, the four stable legs made of dark wood and the strong internal structure can withstand heavy loads. All in all, this armchair is an ideal solution.",
    reviews: [
      {
        comment: "Albert Fehér",
        rating: 4.8,
        text: "My favorite site.",
      },
      {
        comment: "Géza Magyar",
        rating: 4.8,
        text: "I love it!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    categoryAll: "ALL",
    price: 163,
    shortDesc: "Our team also wholeheartedly recommends this product.",
    description:
      "The fabric of the back of the furniture is no different from the fabric of the main furniture. You can place furniture with this feature in the middle of the room.",
    reviews: [
      {
        comment: "Albert Fehér",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Péter Hegedűs",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Grey Sofa",
    imgUrl: productImg06,
    category: "sofa",
    categoryAll: "ALL",
    price: 163,
    shortDesc:
      "A beautiful and comfortable Scandinavian-style gray single sofa that fits perfectly with the rest of the collection.",
    description:
      "This beautiful and comfortable gray armchair in Scandinavian style is part of the collection. The armchair is made of quality materials and can be placed in any room, it is perfect for the living room, the bedroom and can be a practical piece of furniture for the hall or the corridor. The Velúr Royal type fabric is pleasant and soft to the touch and does not become fluffy. The appearance of the armchair is enhanced by the quilting of the backrest. T25 foam was used for the profiled backrest and armrests, and T30 foam for the seat. The single sofa stands on legs made of natural wood. Do not use chemical cleaners to clean the armchair, just wipe it with a damp cloth.",

    reviews: [
      {
        comment: "Péter Hegedűs",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Vince Rácz",
        rating: 4.9,
        text: "Nice look",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    categoryAll: "ALL",
    price: 163,
    shortDesc:
      "Our team also wholeheartedly recommends this product. Why is that?",
    description:
      "Zig Zag type springs are one of the most popular in the production of upholstered furniture. They are mounted on the furniture frame at the same distance from each other. Due to their coil shape, these springs are more flexible and durable. Thanks to them, upholstered furniture provides the same comfort during use.",
    reviews: [
      {
        comment: "Vince Rácz",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Sándor Kis",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "Old Chair",
    imgUrl: productImg07,
    category: "chair",
    categoryAll: "ALL",
    price: 99,
    shortDesc:
      "Wood is a natural and environmentally friendly material, characterized by its strength and durability.",
    description:
      "In the interior, wood will serve as a guarantee of homeliness and quality. In order for wooden surfaces to last as long as possible, we recommend renewing them every few years. Make sure that all furniture is made of wood or only wooden parts. For example, if only one worktop is made of wood, special care should be taken only on that one. It is recommended to cover wooden surfaces with products that protect wooden furniture from both sunlight and scratches. It is recommended to avoid alcohol, chlorine or ammonia-based cleaning agents. In the event of a spill, dry the surface to prevent liquids from being absorbed into the wood. Hot pots placed directly on wooden surfaces can leave marks, so use mats.",
    reviews: [
      {
        comment: "Kovacs Béla",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Kiss András",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    categoryAll: "ALL",
    price: 173,
    shortDesc:
      "Thanks to the soft lines of the elegant and fashionable shell-type armchair, it gives your living room a modern look.",
    description:
      "The backrest and the seat are covered with textile leather.The structure is made of wood, covered with polyurethane and cotton wool, and the seat is made of 40 mm polyurethane, which provides a comfortable seat.You can create an elegant and practical living room, office or waiting room. The full synthetic leather upholstery is easy to maintain and suitable for long-term use.",
    reviews: [
      {
        comment: "Sándor Kis",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Mária Jakab",
        rating: 4.9,
        text: "Favorite furnitures",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    categoryAll: "ALL",
    price: 89,
    shortDesc:
      "The Baltasar dining chair is a high-quality, solid chair, made of natural solid wood, with an upholstered seat and back.",
    description:
      "The Baltasar dining chair is a quality, solid, natural solid wood chair with an upholstered seat and backrest. The chair can be covered with various materials in a wide range of colors. Thanks to the supports that prevent the legs from opening, it is perfectly suitable for households as well as restaurants and other gastronomic establishments",

    reviews: [
      {
        comment: "Mária Jakab",
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        comment: "Gizella Csonka",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    categoryAll: "ALL",
    category: "chair",
    price: 112,
    shortDesc: "Professional product.",
    description:
      "Hairdressing chair with special lumbar support.It provides a very comfortable seat for the guests.With a wide seating surface. The chair can be rotated 360°, which makes it easier to work at different angles.The position of the chair can be fixed by lifting the pedal. ",
    reviews: [
      {
        comment: "Gizella Csonka",
        rating: 4.6,
        text: "",
      },
      {
        comment: "Boglárka Lengyel",
        rating: 4.9,
        text: "Elit product.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Comfort Dresser",
    imgUrl: productImg13,
    category: "storage",
    categoryAll: "ALL",
    price: 799,
    shortDesc: " Protected edges, Made in Europe.",
    description:
      "The edges of the furniture are covered with edgelock - this material is made of strong plastic, which is usually used to protect the edges of furniture panels.",
    reviews: [
      {
        comment: "Klaudia Fehér",
        rating: 4.8,
        text: "Good",
      },
      {
        comment: "Hunor Halász",
        rating: 4.9,
        text: "Nice working",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    categoryAll: "ALL",
    category: "chair",
    price: 99,
    shortDesc:
      "The chair elegantly combines elements of modern and Scandinavian style.",
    description:
      "With its velvety soft material, this chair will find its place in any stylish dining room or kitchen.Beech wood legs provide the necessary strength and stability to the chair. Together with the blue material, they form the unique design of the chair, which is supported by the spectacular small hexagonal quilting. Mary dining chairs can be easily combined with a dining table made of solid wood.",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 5,
        text: "5/5",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Brown Bookshelf",
    imgUrl: productImg14,
    category: "storage",
    categoryAll: "ALL",
    price: 799,
    shortDesc: "Made in Europe Scratch resistance",
    description:
      "The surface of the furniture is covered with a colorless material that protects against minor scratches. This material not only makes the furniture scratch-resistant, but also better protects it from moisture and stains ",
    reviews: [
      {
        comment: "Vince Balog",
        rating: 4.8,
        text: "",
      },
      {
        comment: "Imre Papp",
        rating: 4.9,
        text: "Safty.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Panama Dresser",
    imgUrl: productImg15,
    category: "storage",
    categoryAll: "ALL",
    price: 599,
    shortDesc: "Made in Europe, FSC certificate.",
    description:
      "FSC - the global forest certification system was created to ensure proper forest management. Products with this label ensure that they are made from organic wood from economically valuable forests. This certificate is especially important for furniture manufacturers, who confirm that their activities comply with the principles and criteria of the FSC. It guarantees the consumer that the products offered are made according to the principles of sustainable forestry.",
    reviews: [
      {
        comment: "Imre Papp",
        rating: 4.8,
        text: "Nice wood working",
      },
      {
        comment: "Balázs Fodor",
        rating: 4.9,
        text: "Best product",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "Shoe storage",
    imgUrl: productImg16,
    category: "storage",
    categoryAll: "ALL",
    price: 799,
    shortDesc: "Shoe storage bench with padded seat",
    description:
      "The thick soft cushion allows you to sit down comfortably and put on or take off your shoes. You can put up to 6 pairs of shoes on the 2 shelves and 1 boot in the high compartment.",
    reviews: [
      {
        comment: "Balázs Fodor",
        rating: 4.8,
        text: "",
      },
      {
        comment: "Aranka Fodor ",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Acacia storage box",
    imgUrl: productImg17,
    category: "storage",
    categoryAll: "ALL",
    price: 899,
    shortDesc:
      "This unique looking storage box made of solid acacia wood and MDF can be a perfect addition to your home.      ",
    description:
      "The chest provides plenty of storage space for clothes, magazines, books, toys, tools or other items. There is a latch on the front and handles on both sides. Due to its stable and straight surface, this chest can be used as a coffee table, a table next to a sofa, a bedside table or a table for other purposes. It is made of solid acacia wood, using a handcrafted process, and thanks to the beautiful grain of the wood, each piece is unique and special, slightly different from the other.",
    reviews: [
      {
        comment: "Balázs Fodor",
        rating: 4.8,
        text: "",
      },
      {
        comment: "Aranka Vörös",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Acacia Bookcase",
    imgUrl: productImg18,
    category: "storage",
    categoryAll: "ALL",
    price: 699,
    shortDesc:
      "Do you want a tasteful home? With the functional and stylish pieces of the book case, you can furnish the apartment in a really sophisticated way!",
    description:
      "Minimalist furniture is characterized by clean lines and soft, natural colors. A unique selection of interestingly shaped bookshelves, eye-catching dining tables and coffee tables.",
    reviews: [
      {
        comment: "Lívia Vörös",
        rating: 4.8,
        text: "",
      },
      {
        comment: "István Sándor",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Wood Bed",
    imgUrl: productImg19,
    category: "bed",
    categoryAll: "ALL",
    price: 299,
    shortDesc: "High quality wooden",
    description:
      "Thanks to its high headboard, the Laura bed will be especially appreciated by those who like to sit in bed while watching TV or reading a book. With its classic appearance, it perfectly complements any bedroom and can be easily combined with other furniture, also because it is offered in many color variations. The bed is made of high-quality solid pine wood, which, combined with two layers of protective varnish, guarantees durability and longevity.",
    reviews: [
      {
        comment: "István Sándor",
        rating: 4.8,
        text: "",
      },
      {
        comment: "Richárd Horváth",
        rating: 4.9,
        text: "Fast shipping.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "STELLA Bed",
    imgUrl: productImg20,
    category: "bed",
    categoryAll: "ALL",
    price: 299,
    shortDesc:
      "Quality STELLA double bed with bed linen rack, which is made of solid oiled 2 cm thick oak wood.",
    description:
      "They used nature-friendly ecological oil that protects the bed from moisture and dirt. The natural color of oak wood is extremely pleasant, so it will make the bedroom warm and homely. The high-quality joining of the parts of the bed guarantees its stability, resistance and safety. The bed also has four practical drawers for storing bed linen. ",
    reviews: [
      {
        comment: "Richárd Horváth",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        comment: "Kornél Orbán",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Bed Stanton",
    imgUrl: productImg21,
    category: "bed",
    categoryAll: "ALL",
    price: 299,
    shortDesc: "With bed linen rack,Protected edges, Made in Europe.",
    description:
      "The edges of the furniture are covered with edgelock - this material is made of strong plastic, which is usually used to protect the edges of furniture panels.",
    reviews: [
      {
        comment: "Géza Biró",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        comment: "Kornél Orbán",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Elisa solid wood bed",
    imgUrl: productImg22,
    category: "bed",
    categoryAll: "ALL",
    price: 399,
    shortDesc: "Solid wood bed",
    description:
      "Elisa is an elegant, airy bed frame made of solid wood with a vertically divided headboard. In the production of solid wooden beds, we work with two types of wood: modern, clean and smooth beech wood and prestigious oak wood with a distinctive design. In terms of the strength of the bed, beech and oak are equally suitable (the hardness can also be determined by the place of origin of the given wood), but in terms of feel, the commanding, broad-crowned oak clearly leads the way. Nothing reveals more about the unique solidity and durability of wood than the fact that Venice itself was built on oak pillars.",
    reviews: [
      {
        comment: "Géza Biró",
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        comment: "Kornél Csonka",
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Wood Table",
    imgUrl: productImg23,
    category: "table",
    categoryAll: "ALL",
    price: 199,
    shortDesc:
      "Every day we have to deal with huge problems, deal with stressful situations, but when we get home, we should completely relax and forget about the problems",
    description:
      "Every day we have to deal with huge problems, deal with stressful situations, but when we get home, we should completely relax and forget about the problems. The MONTANA modular furniture, which radiates harmony and style, helps with this. The material from which it is made is the laminated DTD. It also has ABS edges, which are used in the furniture industry to seal the edge. We offer you the MONTANA dining table in dark Lefkas oak.",
    reviews: [
      {
        comment: "Sándor Bálint",
        rating: 4.8,
        text: "qualitative",
      },
      {
        comment: "Kornél Csonka",
        rating: 4.9,
        text: "strong, durable",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Boston Desk",
    imgUrl: productImg25,
    category: "table",
    categoryAll: "ALL",
    price: 199,
    shortDesc:
      "The dining table has a clean and simple design and will be an excellent addition to your home",
    description:
      "Premium quality material: The assembled wood is of exceptional quality, with a smooth surface, solid, stable and resistant to moistureSolid frame: The construction of the dining table ensures its stability, durability and longevity.Practical table top: The table top can be used to place food, drinks and other decorative items.",
    reviews: [
      {
        comment: "Sándor Gál ",
        rating: 4.8,
        text: "",
      },
      {
        comment: "Kornél Zoltán Hegedüs",
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;