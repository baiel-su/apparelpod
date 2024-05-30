const Shipping = () => {
  return (
    <div className=" bg-[#e7e7e7] py-10 space-y-5">
      <h1 className="font-bold sm:text-5xl text-3xl">Item & Shipping Price List</h1>
      <div className="flex justify-between sm:items-end bg-white sm:flex-row flex-col gap-10">
        <div className="">
          <p className="text-lg">
            Baby Bodysuits <span className="ml-6">$8.50</span>
          </p>
          <p className="font-bold text-2xl ">T-Shirts</p>
          {itemAndShippingData[0]?.["t-shirt"]?.map((item, index) => (
            <div key={index} className="grid grid-cols-2 text-lg gap-10">
              <span>{item.label}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-2xl font-bold">Shipping</p>
          <p className="text-lg">
            Single <span className="font-bold">$4.25</span>
          </p>
          <p className="text-lg">
            Each Additional <span className="font-bold">$2.00</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between sm:items-end bg-white sm:flex-row flex-col gap-10">
        <div className="space-y-5">
          <div>
            <p className="font-bold text-2xl">Sweatshirts</p>
            {itemAndShippingData[1]?.["Sweatshirts"]?.map((item, index) => (
              <div key={index} className="grid grid-cols-2 text-lg gap-10">
                <span>{item.label}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-2xl font-bold">Hoodies</p>
            {itemAndShippingData[2]?.["Hoodies"]?.map((item, index) => (
              <div key={index} className="grid grid-cols-2 text-lg  gap-10">
                <span>{item.label}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Shipping</p>
          <p className="text-lg">
            Single <span className="font-bold">$6.25</span>
          </p>
          <p className="text-lg">
            Each Additional <span className="font-bold">$2.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

const itemAndShippingData = [
  {
    "t-shirt": [
      { label: "Toddler 2T-5T", price: "8.50" },
      { label: "Youth S-M-L", price: "8.50" },
      { label: "Adult S-XL", price: "8.50" },
      { label: "Adult 2XL", price: "9.50" },
      { label: "Adult 3XL", price: "11.00" },
    ],
  },
  {
    Sweatshirts: [
      { label: "Youth S-M-L", price: "13.50" },
      { label: "Adult S-XL", price: "13.00" },
      { label: "Adult 2XL", price: "15.25" },
      { label: "Adult 3XL", price: "17.00" },
    ],
  },
  {
    Hoodies: [
      { label: "Youth S-M-L", price: "16.50" },
      { label: "Adult S-XL", price: "16.00" },
      { label: "Adult 2XL", price: "18.50" },
      { label: "Adult 3XL", price: "21.50" },
    ],
  },
];
