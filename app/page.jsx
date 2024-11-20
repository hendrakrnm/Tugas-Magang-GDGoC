import Navigasi from "@/component/home/page";
import Bandage from "@/component/home/page";
import Image from "next/image";
import Shop from "@/component/shop/page";
import BestOfTheBest from "@/component/bestSeler/page";

export default function Home() {
  return (
    <div>
      <Navigasi/>
      <Shop/>
      <BestOfTheBest/>
    </div>
  );
}
