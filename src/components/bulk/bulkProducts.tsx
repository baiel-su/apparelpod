const BulkProducts = () => {
  return (
    <div>
      <h1 className="font-bold sm:text-5xl text-3xl py-5">
        Bulk purchase price chart!
      </h1>
      <div className="space-y-5">
        {products.map((item, index) => (
          <div className="grid md:grid-cols-7 grid-cols-2  gap-2 text-center justify-between " key={index}>
            <div className=" bg-white flex flex-col justify-center p-1">
              <img src={item.productImage} className="w-36 m-auto" />
              <span>{item.productDesc}</span>
            </div>
            {priceCategories.map((category, idx) => (
              <PriceInfo key={idx} category={category} item={item.pricing} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulkProducts;

interface PriceCategory {
  label: string;
  key: keyof Product["pricing"];
}

interface Pricing {
  singleSide: number;
  doubleSide: number;
}

interface Product {
  productImage: string;
  productDesc: string;
  pricing: Record<string, Pricing>;
}

const priceCategories = [
  { label: "600+", key: "sixHundredPlus" },
  { label: "400+", key: "fourHundredPlus" },
  { label: "200+", key: "twoHundredPlus" },
  { label: "100+", key: "hundredPlus" },
  { label: "50+", key: "fiftyPlus" },
  { label: "25+", key: "twentyFivePlus" },
];

interface PriceInfoProps {
  category: PriceCategory;
  item: Record<string, Pricing>;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ category, item }) => (
  <div className="bg-white md:p-3 lg:px-8 p-1">
    <p className="font-bold text-2xl mb-5">{category.label}</p>
    <p>Single Side</p>
    <span className="font-bold text-2xl">${item[category.key].singleSide}</span>
    <p>Double Side</p>
    <span className="font-bold text-2xl">${item[category.key].doubleSide}</span>
  </div>
);

const products = [
  {
    productImage: "/productImages/navy.jpg",
    productDesc: "Gildan 5000 Heavy Cotton",
    pricing: {
      sixHundredPlus: { singleSide: 6.55, doubleSide: 8.05 },
      fourHundredPlus: { singleSide: 7.03, doubleSide: 8.53 },
      twoHundredPlus: { singleSide: 7.52, doubleSide: 9.02 },
      hundredPlus: { singleSide: 8.25, doubleSide: 9.75 },
      fiftyPlus: { singleSide: 8.97, doubleSide: 10.47 },
      twentyFivePlus: { singleSide: 9.7, doubleSide: 11.2 },
    },
  },
  {
    productImage: "/productImages/green.jpg",
    productDesc: "Gildan 64000 SoftStyle",
    pricing: {
      sixHundredPlus: { singleSide: 7.02, doubleSide: 8.52 },
      fourHundredPlus: { singleSide: 7.54, doubleSide: 9.04 },
      twoHundredPlus: { singleSide: 8.06, doubleSide: 9.56 },
      hundredPlus: { singleSide: 8.84, doubleSide: 10.34 },
      fiftyPlus: { singleSide: 9.62, doubleSide: 11.12 },
      twentyFivePlus: { singleSide: 10.4, doubleSide: 11.9 },
    },
  },
  {
    productImage: "/productImages/mauve.jpg",
    productDesc: "Bella Canvas 3001",
    pricing: {
      sixHundredPlus: { singleSide: 9.57, doubleSide: 11.07 },
      fourHundredPlus: { singleSide: 10.28, doubleSide: 11.78 },
      twoHundredPlus: { singleSide: 10.99, doubleSide: 12.49 },
      hundredPlus: { singleSide: 12.05, doubleSide: 13.55 },
      fiftyPlus: { singleSide: 13.12, doubleSide: 14.62 },
      twentyFivePlus: { singleSide: 14.18, doubleSide: 15.68 },
    },
  },
  {
    productImage: "/productImages/purple.jpg",
    productDesc: "Comfort Colors 1717",
    pricing: {
      sixHundredPlus: { singleSide: 11.07, doubleSide: 12.57 },
      fourHundredPlus: { singleSide: 11.89, doubleSide: 13.39 },
      twoHundredPlus: { singleSide: 12.71, doubleSide: 14.21 },
      hundredPlus: { singleSide: 13.94, doubleSide: 15.44 },
      fiftyPlus: { singleSide: 15.17, doubleSide: 16.67 },
      twentyFivePlus: { singleSide: 16.4, doubleSide: 17.9 },
    },
  },
  {
    productImage: "/productImages/maroonSweatshirt.jpg",
    productDesc: "Gildan 18000 Sweatshirt",
    pricing: {
      sixHundredPlus: { singleSide: 13.16, doubleSide: 14.66 },
      fourHundredPlus: { singleSide: 14.14, doubleSide: 15.14 },
      twoHundredPlus: { singleSide: 15.11, doubleSide: 16.61 },
      hundredPlus: { singleSide: 16.58, doubleSide: 18.08 },
      fiftyPlus: { singleSide: 18.04, doubleSide: 19.54 },
      twentyFivePlus: { singleSide: 19.5, doubleSide: 21.0 },
    },
  },
  {
    productImage: "/productImages/greenHoodie.jpg",
    productDesc: "Gildan 18500 Hoodie",
    pricing: {
      sixHundredPlus: { singleSide: 16.74, doubleSide: 18.24 },
      fourHundredPlus: { singleSide: 17.98, doubleSide: 19.48 },
      twoHundredPlus: { singleSide: 19.22, doubleSide: 20.72 },
      hundredPlus: { singleSide: 21.08, doubleSide: 22.58 },
      fiftyPlus: { singleSide: 22.94, doubleSide: 24.44 },
      twentyFivePlus: { singleSide: 24.8, doubleSide: 26.3 },
    },
  },
  {
    productImage: "/productImages/blueTank.jpg",
    productDesc: "Next Level Racerback Tank",
    pricing: {
      sixHundredPlus: { singleSide: 6.99, doubleSide: 8.49 },
      fourHundredPlus: { singleSide: 7.51, doubleSide: 9.01 },
      twoHundredPlus: { singleSide: 8.81, doubleSide: 1 },
      hundredPlus: { singleSide: 1, doubleSide: 10.31 },
      fiftyPlus: { singleSide: 9.58, doubleSide: 11.08 },
      twentyFivePlus: { singleSide: 10.36, doubleSide: 11.86 },
    },
  },
  {
    productImage: "/productImages/wideTotebag.jpg",
    productDesc: "Regular Tote Economic",
    pricing: {
      sixHundredPlus: { singleSide: 5.81, doubleSide: 7.31 },
      fourHundredPlus: { singleSide: 6.24, doubleSide: 7.74 },
      twoHundredPlus: { singleSide: 6.67, doubleSide: 8.17 },
      hundredPlus: { singleSide: 7.31, doubleSide: 8.81 },
      fiftyPlus: { singleSide: 7.96, doubleSide: 9.46 },
      twentyFivePlus: { singleSide: 8.6, doubleSide: 10.1 },
    },
  },
  {
    productImage: "/productImages/longTotebag.jpg",
    productDesc: "Zippered Tote",
    pricing: {
      sixHundredPlus: { singleSide: 8.1, doubleSide: 9.6 },
      fourHundredPlus: { singleSide: 8.7, doubleSide: 10.2 },
      twoHundredPlus: { singleSide: 9.3, doubleSide: 10.8 },
      hundredPlus: { singleSide: 10.2, doubleSide: 11.7 },
      fiftyPlus: { singleSide: 11.1, doubleSide: 12.6 },
      twentyFivePlus: { singleSide: 12.0, doubleSide: 13.5 },
    },
  },
];
