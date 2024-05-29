import BulkDesc from "@/components/bulk/bulkDesc";
import BulkProducts from "@/components/bulk/bulkProducts";

const Bulk = () => {
  return (
    <div className="bg-[#e7e7e7]  pt-5  space-y-10 pb-24">
      <BulkDesc />
      <BulkProducts />
    </div>
  );
};

export default Bulk;
