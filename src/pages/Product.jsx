import ProductDescription from "../features/product/ProductDescription";
import ProductDetail from "../features/product/ProductDetail";
import BreadCrumb from "../ui/breadCrumb/BreadCrumb";

const Product = () => {
  return <main>
    <BreadCrumb />
    <ProductDetail />
    <ProductDescription />
  </main>;
};

export default Product;
