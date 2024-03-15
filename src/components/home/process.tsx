import productIcons from "/ApparelPod/product-icons.svg";
import screenIcon from "/ApparelPod/screen-icon.svg";
import saleIcon from "/ApparelPod/sale-icon.svg";
import fulfillmentIcon from "/ApparelPod/fulfillment-icon.svg";
import growthIcon from "/ApparelPod/growth-icon.svg";

const Process = () => {
  return (
    <div className="px-10 bg-[#e7e7e7] py-10">
      <h1 className="text-5xl font-bold">The Process</h1>
      <div className="pt-5 space-y-10">
        {/* decide what to sell */}
        <div className="w-[55%] flex flex-col">
          <div>
            <h2 className="text-xl font-bold">Decide what to sell</h2>
            <p className="text-lg">
              Choose the products you want to offer such as t-shirts,
              sweatshirts, hoodies, tanks, or totes.
            </p>
          </div>

          <img src={productIcons} className="w-80" />
        </div>

        {/* Create your design */}
        <div className="flex gap-10">
          <div>
            <h2 className="text-xl font-bold">
              Create your design & list your products
            </h2>
            <p className="text-lg">
              Design your artwork or logo using graphic design software or
              purchase design files. Upload your designs and product details to
              your chosen e-commerce platform, such as Shopify, Etsy, or Amazon.
            </p>
          </div>

          <img src={screenIcon} className="w-[360px]" />
        </div>

        {/* Make sale */}
        <div className="flex items-center gap-10">
          <img src={saleIcon} className="w-64" />
          <div className="">
            <h2 className="text-xl font-bold">Make sales</h2>
            <p className="text-lg">
              Promote your products through marketing efforts to attract
              customers and generate sales.
            </p>
          </div>
        </div>

        {/* Let us handle the rest */}
        <div className="flex items-center gap-10">
          <div>
            <h2 className="text-xl font-bold">Let us handle the rest</h2>
            <p className="text-lg">
              Once orders are placed, our print-on-demand service takes care of
              printing, packaging, and shipping the products directly to your
              customers, allowing you to focus on growing your business.
            </p>
          </div>
          <img src={fulfillmentIcon} className="w-64 mr-24" />
        </div>

        {/* Grow your business */}
        <div className="flex items-center gap-10">
          <img src={growthIcon} className="w-64 ml-12" />
          <div>
            <h2 className="text-xl font-bold">Grow your business</h2>
            <p className="text-lg">
              Grow your business: Continuously innovate with new designs, expand
              your product offerings, and scale your marketing efforts to reach
              a broader audience and increase sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
