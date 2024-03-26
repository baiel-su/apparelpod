import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Process from "./components/home/process";
import Shipping from "./components/business/shipping";
import ProfitCalculator from "./components/business/profitCalculator";


function App() {
  return (

    // change it later
    <div className="max-w-[1224px] m-auto text-[#07415E]">
      <Navbar />
      <section className="space-y-8">
        <Home />
        <Process />
      </section>
      <section className="mt-8 space-y-8">
        <Shipping />
        <ProfitCalculator />
      </section>
    </div>
  )
}

export default App
