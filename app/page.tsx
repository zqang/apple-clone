import Card from "@/components/Card";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="max-w-[2560px] my-0 mx-auto block">
      <section className="grid gap-3 grid-cols-1 bottom-3 relative">
        <Card
          textColor="text-[#f5f5f7]"
          title="iPhone 14 Pro"
          subtitle="Pro.Beyond."
          subLinkLeft="https://www.apple.com/sg/iphone-14-pro/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_iphone/iphone_14_pro"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Buy"
          imageAlt="iphone 14"
          imageSrc="/images/hero_iphone14pro_spring__9xo85pm6sbmm_large_2x.jpg"
        ></Card>
        <Card
          title="iPhone 14"
          subtitle="Wonderfull."
          subLinkLeft="https://www.apple.com/sg/iphone-14-pro/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_iphone/iphone_14_pro"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Buy"
          imageAlt="iphone 14"
          imageSrc="/images/hero_iphone14_yellow__eun20sn4imi6_large_2x.jpg"
        ></Card>
      </section>
      <section className="grid grid-cols-2 gap-3 relative">
        <Card
          title={`MacBook Air 15"`}
          subtitle="Impressively big. Impossibly thin."
          subLinkLeft="https://www.apple.com/sg/macbook-air-13-and-15-m2/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_mac/macbook_air/15_inch_m2"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Buy"
          imageAlt="Macbook Air 15"
          imageSrc="/images/promo_macbook_air_15__eydjhl7wyioi_large_2x.jpg"
          secondarySection={true}
        ></Card>
        <Card
          textColor="text-[#f5f5f7]"
          title="Watch Series 8"
          subtitle="A healthy leap ahead."
          subLinkLeft="https://www.apple.com/sg/apple-watch-series-8/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_watch/apple_watch_series_8"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Buy"
          imageAlt="Apple Watch Series 8"
          imageSrc="/images/promo_apple_watch_series_8_spring__d9hfvufh7hyu_large_2x.jpg"
          secondarySection={true}
        ></Card>
        <Card
          textColor="text-[#f5f5f7]"
          title="iPad Pro"
          subtitle="Supercharged by M2"
          subLinkLeft="https://www.apple.com/sg/ipad-pro/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_ipad/ipad_pro"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Buy"
          imageAlt="iPad Pro"
          imageSrc="/images/promo_ipadpro_refresh__evi9utuixwuq_large_2x.jpg"
          secondarySection={true}
        ></Card>
        <Card
          title={`Mac Studio"`}
          subtitle="Supercharged by M2 Max and M2 Ultra."
          subLinkLeft="https://www.apple.com/sg/mac-studio/"
          subLinkRight="https://www.apple.com/sg/shop/goto/buy_mac/mac_studio"
          subLinkLeftLabel="Learn more"
          subLinkRightLabel="Order now"
          imageAlt="Mac Studio"
          imageSrc="/images/promo_mac_studio_announce__do7xnc8z5mgm_large_2x.jpg"
          secondarySection={true}
        ></Card>
      </section>

      <Footer />
    </main>
  );
}
