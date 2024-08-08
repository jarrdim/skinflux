import { GetServerSideProps } from 'next';
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/SearchBar";
import getProducts, { ProductParams } from "../actions/getProducts";

interface Props {
  products: any[];
}

export default function Home({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center justify-center p-6">No product found</div>
    );
  }

  return (
    <Container>
      <div className="p-8">
        <Banner />
        <SearchBar />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchParams = context.query as ProductParams;
  const products = await getProducts(searchParams);

  return {
    props: {
      products,
    },
  };
};
