import productIcons from "/ApparelPod/product-icons.svg";
import screenIcon from "/ApparelPod/screen-icon.svg";
import saleIcon from "/ApparelPod/sale-icon.svg";
import fulfillmentIcon from "/ApparelPod/fulfillment-icon.svg";
import growthIcon from "/ApparelPod/growth-icon.svg";

const Process = () => {
  return (
    <div className=" bg-[#e7e7e7] py-10">
      <h1 className="sm:text-5xl text-3xl font-bold">The Process</h1>
      <div className="pt-5 space-y-10">
        {/* decide what to sell */}
        <div className="sm:w-[55%] flex flex-col">
          <div>
            <h2 className="text-xl font-bold">Decide what to sell</h2>
            <p className="sm:text-lg">
              Choose the products you want to offer such as t-shirts,
              sweatshirts, hoodies, tanks, or totes.
            </p>
          </div>

          <img src={productIcons} className="w-80" />
        </div>

        {/* Create your design */}
        <div className=" gap-10 flex flex-col sm:flex-row">
          <div>
            <h2 className="text-xl font-bold">
              Create your design & list your products
            </h2>
            <p className="sm:text-lg">
              Design your artwork or logo using graphic design software or
              purchase design files. Upload your designs and product details to
              your chosen e-commerce platform, such as Shopify, Etsy, or Amazon.
            </p>
          </div>

          <img src={screenIcon} className="w-[360px]" />
        </div>

        {/* Make sale */}
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <img src={saleIcon} className="w-64 order-2 sm:order-1 " />
          <div className="sm:order-2">
            <h2 className="text-xl font-bold">Make sales</h2>
            <p className="sm:text-lg">
              Promote your products through marketing efforts to attract
              customers and generate sales.
            </p>
          </div>
        </div>

        {/* Let us handle the rest */}
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div>
            <h2 className="text-xl font-bold">Let us handle the rest</h2>
            <p className="sm:text-lg">
              Once orders are placed, our print-on-demand service takes care of
              printing, packaging, and shipping the products directly to your
              customers, allowing you to focus on growing your business.
            </p>
          </div>
          <img src={fulfillmentIcon} className="w-64 sm:mr-24" />
        </div>

        {/* Grow your business */}
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <img src={growthIcon} className="w-64 sm:ml-12 order-2 sm:order-1 " />
          <div className="sm:order-2">
            <h2 className="text-xl font-bold">Grow your business</h2>
            <p className="sm:text-lg">
              Continuously innovate with new designs, expand your product
              offerings, and scale your marketing efforts to reach a broader
              audience and increase sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
