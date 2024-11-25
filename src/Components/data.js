import pic1 from "../Images/offer.png";
import chair from "../Images/chair.png";
import chair2 from "../Images/chair2.png";
import kanba from "../Images/kanba.png";
import kanba3 from "../Images/kanba3.png";
import makhda from "../Images/makhda.png";
import rokna from "../Images/rokna.png";
import rokna2 from "../Images/rokna2.png";
import room from "../Images/room.png";

const furnitureData = [
  {
    name: "كرسي خشب",
    id: "1001",
    price: 1200,
    newPrice: 900,
    discount: "25%",
    description: "كرسي مريح مصنوع بجودة عالية.",

    images: {
      image1: chair,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },

    details: {
      color: "أحمر",
      type: "كرسي مكتب",
      size: "متوسط",
      dimensions: "50x60x90 سم",
      materials: "خشب وزجاج",
    },
  },
  {
    name: "طاوله وسط قطن خام",
    id: "1002",
    price: 2500,
    newPrice: 2000,
    discount: "20%",
    description: "طاولة أنيقة مثالية للمكاتب.",
    images: {
      image1: makhda,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "بني",
      type: "طاولة طعام",
      size: "كبير",
      dimensions: "120x80x75 سم",
      materials: "خشب",
    },
  },
  {
    name: "سرير",
    id: "1003",
    price: 4500,
    newPrice: null,
    discount: null,
    description: "سرير مريح مصمم للنوم الجيد.",
    images: {
      image1: room,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "أبيض",
      type: "سرير مزدوج",
      size: "كبير",
      dimensions: "200x160x50 سم",
      materials: "خشب وحديد",
    },
  },
  {
    name: "أريكة خشب ",
    id: "1004",
    price: 3000,
    newPrice: 2500,
    discount: "16%",
    description: "أريكة مريحة مثالية لغرفة المعيشة.",
    images: {
      image1: kanba,
      image2: chair2,
      image3: kanba,
      image4: makhda,
      image5: rokna2,
    },
    details: {
      color: "رمادي",
      type: "أريكة زاوية",
      size: "متوسط",
      dimensions: "240x90x80 سم",
      materials: "قماش وخشب",
    },
  },
  {
    name: "جزامه بورت شابوه",
    id: "1005",
    price: 5000,
    newPrice: null,
    discount: null,
    description: "خزانة واسعة بأرفف متعددة.",
    images: {
      image1: rokna2,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "أسود",
      type: "خزانة ملابس",
      size: "كبير",
      dimensions: "180x120x50 سم",
      materials: "خشب MDF",
    },
  },
  {
    name: "طاولة قهوة",
    id: "1006",
    price: 1500,
    newPrice: 1200,
    discount: "20%",
    description: "طاولة قهوة أنيقة للغرف الصغيرة.",
    images: {
      image1: room,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "بني داكن",
      type: "طاولة مستديرة",
      size: "صغير",
      dimensions: "60x60x45 سم",
      materials: "خشب زان",
    },
  },
  {
    name: "مكتبة عريضه",
    id: "1007",
    price: 3200,
    newPrice: 2900,
    discount: "9%",
    description: "مكتبة رائعة لتنظيم الكتب.",
    images: {
      image1: kanba3,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "بني فاتح",
      type: "مكتبة حائط",
      size: "كبير",
      dimensions: "200x100x30 سم",
      materials: "خشب طبيعي",
    },
  },
  {
    name: "كومودينو",
    id: "1008",
    price: 800,
    newPrice: null,
    discount: null,
    description: "كومودينو صغير بجانب السرير",
    images: {
      image1: kanba,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "أبيض",
      type: "كومودينو صغير",
      size: "صغير",
      dimensions: "40x40x50 سم",
      materials: "خشب",
    },
  },
  {
    name: "مكتب",
    id: "1009",
    price: 3500,
    newPrice: null,
    discount: null,
    description: "مكتب عملي للطلاب والمحترفين",
    images: {
      image1: rokna2,
      image2: chair2,
      image3: kanba,
      image4: rokna,
      image5: rokna2,
    },
    details: {
      color: "أسود",
      type: "مكتب خشبي",
      size: "كبير",
      dimensions: "150x70x75 سم",
      materials: "خشب MDF",
    },
  },
  {
    name: "كرسي بار",
    id: "1010",
    price: 1100,
    newPrice: 950,
    discount: "13%",
    description: "كرسي بار أنيق مع مقعد مريح",
    images: {
      image1: rokna,
      image2: chair2,
      image3: kanba,
      image4: chair,
      image5: rokna2,
    },
    details: {
      color: "أسود",
      type: "كرسي عالي",
      size: "متوسط",
      dimensions: "40x40x100 سم",
      materials: "خشب ومعدن",
    },
  },
];

export default furnitureData;