import ProductCatalog from "./ProductCatalog";

export default function HomePage() {
  return (
    <>
    <div className="container">
    <h1 className="my-5"> Descubrí todos los modelos </h1>
    <ProductCatalog/>
    </div>
   </>
  );
}