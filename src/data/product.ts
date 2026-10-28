import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const originalPrice = 250;
const discount = 50;

export const product = {
  id: 1,
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  originalPrice,
  discount,
  price: originalPrice * (1 - discount / 100),
  images: [
    { full: image1, thumbnail: thumbnail1 },
    { full: image2, thumbnail: thumbnail2 },
    { full: image3, thumbnail: thumbnail3 },
    { full: image4, thumbnail: thumbnail4 },
  ],
};
