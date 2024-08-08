import Image from "next/image";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
//  import { products } from "../../utils/products";
import truncate from "../../utils/truncate";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/SearchBar";
import getProducts, { ProductParams } from "../actions/getProducts";

interface Props {
  searchParams: ProductParams;
}
export default async function Home({ searchParams = {} }: Props) {

  //FROM DB

  const products = await getProducts(searchParams);

  if(products.length === 0)
  {
    return <div className="text-center justify-center p-6">No product found</div>
  }

  //
  return (
    <Container>
      <div className="p-8 ">
        <div>
          <Banner />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </div>
    </Container>
  );
}
