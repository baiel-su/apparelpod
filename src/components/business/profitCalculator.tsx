import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);

const formSchema = z.object({
  sliderValue: z.number(),
  monthsListingsActiveValue: z.string(),
  salePricePerItemValue: z.number(),
  itemQuantityValue: z.number(),
  shippingPricePerItemValue: z.number(),
  discountPerItemValue: z.number(),
  costPerItemValue: z.number(),
  actualShippingCostPerItemValue: z.number(),
  totalAdvertisingCostValue: z.number(),
});

const ProfitCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sliderValue: 2,
      monthsListingsActiveValue: "",
      salePricePerItemValue: 3,
      itemQuantityValue: 4,
      shippingPricePerItemValue: 1,
      discountPerItemValue: 3,
      costPerItemValue: 2,
      actualShippingCostPerItemValue: 1,
      totalAdvertisingCostValue: 2,
    },
  });

  console.log(form.getValues());
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const sales = (
    form.getValues().salePricePerItemValue * form.getValues().itemQuantityValue
  ).toFixed(2);

  const shipping = (
    form.getValues().shippingPricePerItemValue *
    form.getValues().itemQuantityValue
  ).toFixed(2);

  const proceeds = (parseFloat(sales) + parseFloat(shipping)).toFixed(2);

  const lastingFee = (form.getValues().sliderValue * baseLastingFee).toFixed(2);

  const itemCost = (
    form.getValues().costPerItemValue * form.getValues().itemQuantityValue
  ).toFixed(2);

  const actualShippingCost = (
    form.getValues().actualShippingCostPerItemValue *
    form.getValues().itemQuantityValue
  ).toFixed(2);

  const advertisingFee = form.getValues().totalAdvertisingCostValue.toFixed(2);

  const transactionFee = (
    form.getValues().salePricePerItemValue *
    form.getValues().itemQuantityValue *
    baseTransactionFee
  ).toFixed(2);

  const paymentProcessingFee = (
    form.getValues().salePricePerItemValue *
      (form.getValues().itemQuantityValue * 0.03) +
    form.getValues().itemQuantityValue * 0.25
  ).toFixed(2);

  const costs = (
    parseFloat(lastingFee) +
    parseFloat(itemCost) +
    parseFloat(actualShippingCost) +
    parseFloat(advertisingFee) +
    parseFloat(transactionFee) +
    parseFloat(paymentProcessingFee)
  ).toFixed(2);

  const netProfit = (parseFloat(proceeds) - parseFloat(costs)).toFixed(2);

  const returnValue = (
    (parseFloat(netProfit) / parseFloat(costs)) *
    100
  ).toFixed(2);

  const marginValue = (
    (parseFloat(netProfit) / parseFloat(proceeds)) *
    100
  ).toFixed(2);

  const chartData: IChartData = {
    labels: ["Proceeds", "Cost"],
    datasets: [
      {
        label: "My First Dataset",
        data: [ parseFloat(proceeds), parseFloat(costs)],
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
        <div className="px-5 ml-3 pt-10 pb-40 space-y-5 bg-[#e7e7e7] ">
          <h1 className="font-bold text-5xl ">Profit Calculator</h1>
          <div className="flex">
            {/* Your Sales */}
            <div className="space-y-5 bg-white p-2 w-[50%] flex flex-col justify-between">
              <div className="space-y-1s">
                <p className="font-bold text-xl">Your sales</p>
                <p>
                  Enter all of the info that's important to sell your product
                </p>
              </div>

              <div className="">
                <FormField
                  control={form.control}
                  name="sliderValue"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <div>
                        <FormLabel>Amount of listings</FormLabel>
                        <div className="flex gap-5">
                          <FormControl className="">
                            <Slider
                              min={0}
                              max={100}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals:any) => {
                                onChange(vals[0]);
                              }}
                            />
                          </FormControl>
                          <span className="px-10 py-1 border border-border rounded-[0.5rem]">
                            {value}
                          </span>
                        </div>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="monthsListingsActiveValue"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <Label className="font-bold">
                        Months your listing(s) will be active
                      </Label>
                      <FormControl>
                        <RadioGroup
                          onValueChange={onChange}
                          defaultValue={value}
                          className="space-x-2y flex"
                        >
                          <div className="flex items-center space-x-2 bg-yell">
                            <RadioGroupItem value="4" id="r1" />
                            <Label htmlFor="r1">4</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="8" id="r2" />
                            <Label htmlFor="r2">8</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={"12"} id="r3" />
                            <Label htmlFor="r3">12</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={"other"} id="r3" />
                            <Label htmlFor="r3">Other</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                <div>
                  <Label className="font-bold">Sale price per item</Label>
                  <FormField
                    control={form.control}
                    name="salePricePerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Label className="font-bold">Shipping price per item</Label>
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
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Label className="font-bold">Item quantity</Label>
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
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Label className="font-bold">Discount per item</Label>
                  <FormField
                    control={form.control}
                    name="discountPerItemValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder=""
                            min={0}
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-1s">
                <p className="font-bold text-xl">Your costs</p>
                <p>
                  Enter all costs that go into making and selling your product
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="space-y-2">
                  <Label className="font-bold">Cost per item</Label>
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
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">
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
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold">Payment method</Label>
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
                <div className="space-y-2">
                  <Label className="font-bold">Total advertising cost</Label>
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
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
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
            <div className="space-y-5 bg-white p-2 w-[50%]">
              <div className="space-y-1">
                <p className="font-bold text-xl">Results</p>
              </div>
              <div className="space-y-2">
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
                      <span className="">${proceeds}</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Sales
                      <span className="">${sales}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Shipping
                      <span className="">${shipping}</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="">
                      Costs
                      <span className="text-end">${costs}</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Lasting fee
                      <span className="">${lastingFee}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Item cost
                      <span className="">${itemCost}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Actual shipping costs
                      <span className="">${actualShippingCost}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Advertising fee
                      <span className="">${advertisingFee}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Transaction fee
                      <span className="">${transactionFee}</span>
                    </AccordionContent>
                    <AccordionContent className="flex justify-between px-5 ml-3">
                      Payment processing fee
                      <span className="">${paymentProcessingFee}</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Net profit
                      <span
                        className={`${
                          parseFloat(netProfit) < 0
                            ? "text-red-500"
                            : "text-[#008384]"
                        }`}
                      >
                        ${netProfit}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      To break even, you should have a sale price of ${}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Return
                      <span
                        className={`${
                          parseFloat(returnValue) < 0
                            ? "text-red-500"
                            : "text-[#008384]"
                        }`}
                      >
                        {returnValue}%
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      To break even, you should have a sale price of ${}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Margin <span  className={`${
                          parseFloat(marginValue) < 0
                            ? "text-red-500"
                            : "text-[#008384]"
                        }`}>{marginValue}%</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      To break even, you should have a sale price of ${}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-between px-10">
                <div>
                  <p>PROCEEDS</p>
                  <p className="text-center font-bold text-lg">${proceeds}</p>
                </div>
                <div>
                  <p>COSTS</p>
                  <p className="text-center font-bold text-lg">${costs}</p>
                </div>
                <div>
                  <p>NET PROFIT</p>
                  <p className={`${
                          parseFloat(returnValue) < 0
                            ? "text-red-500"
                            : "text-[#008384]"
                        } text-center font-bold text-lg` }>{returnValue}%</p>
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



const baseLastingFee: number = 0.2;
const baseTransactionFee: number = 0.07;
