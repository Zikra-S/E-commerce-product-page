import Header from "./components/header";
import Gallery from "./components/gallery";
import ProductInfo from "./components/productInfo";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />

      <main className="mx-auto grid max-w-[1063px] md:grid-cols-2 md:items-center md:gap-[125px] md:px-6 md:py-[90px]">
        <Gallery />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
