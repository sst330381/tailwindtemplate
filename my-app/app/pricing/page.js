import Pricing from "@/components/pricing/pricing1.js";

const basicprice = [
  {
    title: "Freelancer",
    desc: "The essentials to provide your best work for clients.",
    price: 25,
    points: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    title: "Startup",
    mark: "Most popular",
    desc: "A plan that scales with your rapidly growing business.",
    price: 49,
    points: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    title: "Enterprise",
    desc: "Dedicated support and infrastructure for your company.",
    price: 99,
    points: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];
const allprice = [
  {
    name: "Monthly",
    levels: [...basicprice],
  },
  {
    name: "Annually",
    levels: [
      {
        ...basicprice[0],
        price: 19,
      },
      {
        ...basicprice[1],
        price: 35
      },
      {
        ...basicprice[2],
        price: 79
      },
    ],
  },
];

function Page() {
  return <Pricing allprice={allprice} />;
}

export default Page;
