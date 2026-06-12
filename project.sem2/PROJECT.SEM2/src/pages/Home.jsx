import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;