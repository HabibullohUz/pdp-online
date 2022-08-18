import Product from "./Product";

const Products = ({ productsData }) => {
  return (
    <div className="container products-wrapper">
      {productsData.map((productData) => (
        <Product productData={productData} />
      ))}
    </div>
  );
};

export default Products;
