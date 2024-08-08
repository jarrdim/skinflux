import React from "react";
import Container from "@/components/Container";
// import { product } from "../../../../utils/product";
import ProductDetaails from "./ProductDetails";
import Ratings from "@/components/products/Ratings";
import { products } from "../../../../utils/products";
import getProductById from "@/actions/getProductById";
import AddRating from "./AddRating";
import { getCurrectUser } from "@/actions/getCurrentUser";

interface Iparams {
  productId?: string;
}

const Product = async ({ params }: { params: Iparams }) => {
 
  //const productData = products.find((item) => item.id === params.productId)
  const productData = await getProductById(params)
  const user = await getCurrectUser()
  if(!productData) return <div className="text-center justify-center p-6">No product with the given ID</div>

  return (
    <div>
      <Container>
        <ProductDetaails product={productData} />
        <div className="flex flex-col mt-20 gap-4">
          <div><AddRating product = {productData} user={user}/></div>

          <Ratings product={productData}/>
          
        </div>
      </Container>
    </div>
  );
};

export default Product;
