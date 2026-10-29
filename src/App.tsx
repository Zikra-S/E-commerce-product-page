import Header from "./components/header";
import Gallery from "./components/gallery";
import ProductInfo from "./components/productInfo";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />

      <main className="mx-auto grid max-w-265.75 md:grid-cols-2 md:items-center md:gap-31.25 md:px-6 md:py-22.5">
        <Gallery />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
