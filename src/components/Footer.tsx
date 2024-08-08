import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 w-full text-slate-200 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between pt-10 pb-8 px-6 md:px-20">
        <FooterList>
          <h3 className="text-base font-bold mb-2">OUR GOAL</h3>
          <Link href="#"> SkinFlux, your premier destination for high-quality skincare products. At SkinFlux, we believe in the power of nature and science working together to create products that nourish, protect, and rejuvenate your skin. </Link>
          
        </FooterList>
        <FooterList>
          <h3 className="text-base font-bold mb-2">Services</h3>
          <Link href="#">Dry Skin Moisturizers</Link>
          <Link href="#"> Oil-Free Mattifying Gel</Link>
          <Link href="#">Balancing Day Cream.</Link>
        </FooterList>
        <FooterList>
          <h3 className="text-base font-bold mb-2">About</h3>
          <span>
          Whether you're looking for hydration, anti-aging, or acne treatment, SkinFlux has the perfect product to help you achieve
           radiant, healthy skin. Discover the future of skincare with SkinFlux.
          </span>
        </FooterList>
        <FooterList>
          <h3 className="text-base font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link href="#"><AiFillInstagram size={24} /></Link>
            <Link href="#"><MdFacebook size={24} /></Link>
            <Link href="#"><AiFillTwitterCircle size={24} /></Link>
          </div>
        </FooterList>
      </div>
      <div className="text-center bg-black py-4">
        <p className="text-xs">&copy; 2024 SKINFLUX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import FooterList from "./FooterList";
// import Link from "next/link";
// import { MdFacebook } from "react-icons/md";
// import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
// const Footer = () => {
//   return (
//     <footer className="bg-slate-700 w-full text-slate-200 text-sm mt-24">
//       <div className="flex flex-col md:flex-row justify-between pt-10 bg-black  pb-8 px-20">
//         <FooterList>
//           <h3 className="text-base font-bold mb-2">Product Categories</h3>
//           <Link href="#">First Link</Link>
//           <Link href="#">First Link</Link>
//           <Link href="#">First Link</Link>
//           <Link href="#">First Link</Link>
//           <Link href="#">First Link</Link>
//           <Link href="#">First Link</Link>
//         </FooterList>
//         <FooterList>
//           <h3 className="text-base font-bold mb-2">Services</h3>
//           <Link href="#">Lorem, ipsum.</Link>
//           <Link href="#">Lorem, ipsum.</Link>
//           <Link href="#">Lorem, ipsum.</Link>
//         </FooterList>
//         <FooterList>
//           <h3 className="text-base font-bold mb-2">About</h3>
//           <span>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sequi
//             illum praesentium dolorem nisi labore odio consequatur nulla
//             expedita libero!
//           </span>
//         </FooterList>
//         <FooterList>
//           <h3 className="text-base font-bold mb-2">Follow Us</h3>
//          <div className="flex gap-2">
//          <Link href="#"><AiFillInstagram size={24}/></Link>
//          <Link href="#"><MdFacebook size={24}/></Link>
//          <Link href="#"><AiFillTwitterCircle size={24}/></Link>
         
//          </div>
//         </FooterList>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
