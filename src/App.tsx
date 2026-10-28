import Header from "./components/header";
import Gallery from "./components/gallery";
import ProductInfo from "./components/productInfo";

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto grid max-w-4xl gap-10 p-6 md:grid-cols-2">
        <Gallery />
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
