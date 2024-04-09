
import Hero1 from '@/components/heros/hero1'
import Price1 from '@/components/pricing/pricing1'
import Testimonial1 from '@/components/testimonials/testimonial1'

export default function Home() {
  const heroparams = {
    title:'Grow Your Business With Landing Page',
    subtitle:`With a host of features, customizations options and
    integrations,  Landing Page is an all-in-one toolkit
    for product promotions`
  }
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
  return (
    <>
      <Hero1 props={heroparams}/>
      <Price1 allprice={allprice} />
      <Testimonial1/>
    </>
  );
}
