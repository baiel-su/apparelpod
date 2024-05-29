import ProfitCalculator from "@/components/business/profitCalculator";
import Shipping from "@/components/business/shipping";
import Process from "@/components/print/process";
import Navbar from "@/components/navbar/navbar";
import Print from "@/components/print/print";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1224px] m-auto text-[#07415E]">
        <div className="space-y-8">
          <Print />
          <Process />
        </div>
        <div className="mt-8 space-y-8">
          <Shipping />
          <ProfitCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
