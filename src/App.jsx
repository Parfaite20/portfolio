import Banner from "./components/banner";
import Feactures from "./components/feactures";
import Navbar from "./components/navbar";


const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner/>
        <Feactures/>
      </div>
    </div>
  );
};

export default App;