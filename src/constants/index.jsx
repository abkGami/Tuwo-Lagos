import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Tuwo Shinkafa",
    description: "A local dish from the north made from Rice",
  },
  {
    image: dish2,
    title: "Jollof Rice",
    description: "Our national food that Ghanians are trying to steal from us",
  },
  {
    image: dish3,
    title: "Fried Rice",
    description: "The underrated brother to Jollof",
  },
  {
    image: dish4,
    title: "Moi-Moi and Pap",
    description: "Moi-Moi made from beans, and Pap made from millet",
  },
  {
    image: dish5,
    title: "Masa and Stew",
    description: "A local dish from the north made from rice also",
  },
  {
    image: dish6,
    title: "Abasha",
    description: "Local dish from the Igbos",
  },
  {
    image: dish7,
    title: "Kebabs",
    description: 'Inter-Continental dish from the "Middle-East"',
  },
  {
    image: dish8,
    title: "Dumplings",
    description: "Inter-Continental dish from China",
  },
  {
    image: dish9,
    title: "Sushi",
    description: "Intercontinental dish from Japan made with fish",
  },
  {
    image: dish10,
    title: "Feijoada ",
    description: "Intercontinental dish from Jamaica",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    'At "Tuwo Lagos", we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you are savoring our renowned "Tuwo Shinkafa" or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience "Tuwo Lagos" where every meal is a masterpiece.',
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Nigerian",
    description:
      "Experience the flavors of Naija with our exquisite Nigerian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Italian",
    description:
      "Delight in the art of Italian culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Aaliyah Ademola",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Tuwo Lagos, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: I Don't Know where, Lagos, Nigeria" },
  { key: "phone", value: "Phone: 811-787-7159" },
  { key: "email", value: "Email: tuwolagos@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
