import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);

const formSchema = z.object({
  salePricePerItemValue: z.coerce.number(),
  itemQuantityValue: z.coerce.number(),
  shippingPricePerItemValue: z.coerce.number(),
  costPerItemValue: z.coerce.number(),
  actualShippingCostPerItemValue: z.coerce.number(),
  totalAdvertisingCostValue: z.coerce.number(),
});

const ProfitCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salePricePerItemValue: 3,
      itemQuantityValue: 4,
      shippingPricePerItemValue: 1,
      costPerItemValue: 2,
      actualShippingCostPerItemValue: 1,
      totalAdvertisingCostValue: 2,
    },
  });

  console.log(form.getValues());
  function onSubmit(values: z.infer<typeof formSchema>) {}

  const values = form.getValues();

  const sales = values.salePricePerItemValue * values.itemQuantityValue;

  const shipping = values.shippingPricePerItemValue * values.itemQuantityValue;

  const listingFee = 1 * baseListingFee;

  const itemCost = values.costPerItemValue * values.itemQuantityValue;

  const actualShippingCost =
    values.actualShippingCostPerItemValue * values.itemQuantityValue;

  const advertisingFee = values.totalAdvertisingCostValue * 1;

  const transactionFee =
    values.salePricePerItemValue *
    values.itemQuantityValue *
    baseTransactionFee;

  const paymentProcessingFee =
    values.salePricePerItemValue * (values.itemQuantityValue * 0.03) +
    values.itemQuantityValue * 0.25;

  const proceeds = sales + shipping;

  const costs: number =
    listingFee +
    itemCost +
    actualShippingCost +
    advertisingFee +
    transactionFee +
    paymentProcessingFee;

  const netProfit = proceeds - costs;

  const returnValue = (netProfit / costs) * 100;

  const marginValue = (netProfit / proceeds) * 100;

  const chartData: IChartData = {
    labels: ["Proceeds", "Cost"],
    datasets: [
      {
        label: "My First Dataset",
        data: [proceeds, costs],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
        rotation: 180,
        mirror: true,
      },
    ],
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="px-5 bg-white  pt-10 sm:pb-40 pb-10 space-y-5 sm:bg-[#e7e7e7] ">
          <h1 className="font-bold sm:text-5xl text-3xl">Profit Calculator</h1>
          <div className="md:flex sm:gap-0 gap-10">
            {/* Your Sales */}
            <div className="space-y-5 bg-white p-2 md:w-[50%] flex flex-col ">
              <div className="space-y-1s">
                <p className="font-bold text-xl">Your sales</p>
                <p className="text-sm">
                  Enter all of the info that's important to sell your product
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 ">
                <div>
                  <Label className="font-bold ">Sale price per item</Label>
                  <FormField
                    control={form.control}
                    name="salePricePerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            type="number"
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Label className="font-bold ">Shipping price per item</Label>
                  <FormField
                    control={form.control}
                    name="shippingPricePerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Label className="font-bold ">Item quantity</Label>
                  <FormField
                    control={form.control}
                    name="itemQuantityValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-1s">
                <p className="font-bold sm:text-xl text-lg md:pt-10 ">
                  Your costs
                </p>
                <p className="text-sm">
                  Enter all costs that go into making and selling your product
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                <div className="">
                  <Label className="font-bold ">Cost per item</Label>
                  <FormField
                    control={form.control}
                    name="costPerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <Label className="font-bold ">
                    Actual shipping cost per item
                  </Label>
                  <FormField
                    control={form.control}
                    name="actualShippingCostPerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <Label className="font-bold ">Payment method</Label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="(Etsy Payment) 3% + $0.25" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light" defaultChecked>
                        (Etsy Payment) 3% + $0.25
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">
                  <Label className="font-bold ">Total advertising cost</Label>
                  <FormField
                    control={form.control}
                    name="totalAdvertisingCostValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) => {
                              if (e.target.value === "0") {
                                field.onChange(e);
                              } else {
                                field.onChange({
                                  target: {
                                    value: e.target.value.replace(
                                      /^0+(?=\d)/,
                                      ""
                                    ),
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="space-y-5 bg-white md:pt-0 pt-5 p-2 md:w-[50%]">
              <div className="space-y-1">
                <p className="font-bold text-xl">Results</p>
              </div>
              <div className="">
                <div>
                  <div className="w-[15rem] m-auto flex">
                    <Doughnut data={chartData} />
                  </div>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Proceeds
                      <span className="">${proceeds.toFixed(2)}</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Sales
                      <span className="">${sales.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Shipping
                      <span className="">${shipping.toFixed(2)}</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="">
                      Costs
                      <span className="text-end">${costs.toFixed(2)}</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Listing fee
                      <span className="">${listingFee.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Item cost
                      <span className="">${itemCost.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Actual shipping costs
                      <span className="">${actualShippingCost.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Advertising fee
                      <span className="">${advertisingFee.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Transaction fee
                      <span className="">${transactionFee.toFixed(2)}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Payment processing fee
                      <span className="">
                        ${paymentProcessingFee.toFixed(2)}
                      </span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Net profit
                      <span
                        className={`${
                          netProfit < 0 ? "text-red-500" : "text-[#008384]"
                        }`}
                      >
                        ${netProfit.toFixed(2)}
                      </span>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Return
                      <span
                        className={`${
                          returnValue < 0 ? "text-red-500" : "text-[#008384]"
                        }`}
                      >
                        {returnValue.toFixed(2)}%
                      </span>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Margin{" "}
                      <span
                        className={`${
                          marginValue < 0 ? "text-red-500" : "text-[#008384]"
                        }`}
                      >
                        {marginValue.toFixed(2)}%
                      </span>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-between px-10">
                <div>
                  <p>PROCEEDS</p>
                  <p className="text-center font-bold text-lg">
                    ${proceeds.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p>COSTS</p>
                  <p className="text-center font-bold text-lg">
                    ${costs.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p>NET PROFIT</p>
                  <p
                    className={`${
                      returnValue < 0 ? "text-red-500" : "text-[#008384]"
                    } text-center font-bold text-lg`}
                  >
                    {returnValue.toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            See results
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfitCalculator;

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
    rotation: number;
    mirror: boolean;
  }[];
}

const baseListingFee: number = 0.2;
const baseTransactionFee: number = 0.07;
