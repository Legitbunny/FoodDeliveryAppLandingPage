import Navbar from "./components/Navbar";
import FiltersSection from "./components/FiltersSection";
import FoodItemsSection from "./components/FoodItemsSection";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="h-[0.15rem] bg-slate-100 m-2 mt-6 w-11/12 mx-auto" />
      </div>

      <AppContextProvider>
        <div className="w-10/12 mx-auto">
          <FiltersSection />
        </div>
        <div className="w-10/12 mx-auto">
          <FoodItemsSection />
        </div>
      </AppContextProvider>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
