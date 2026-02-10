import { Layout } from "@/components/layout";
import { Hero } from "@/components/sections/home/hero";
import { Diensten } from "@/components/sections/home/diensten";
import { WieZitErAchter } from "@/components/sections/home/wie-zit-erachter";
import { Gallerij } from "@/components/sections/home/gallerij";
import { Getuigenissen } from "@/components/sections/home/getuigenissen";
import { Strippenkaart } from "@/components/sections/home/strippenkaart";
import { Contact } from "@/components/sections/home/contact";

export default function Page() {
  return (
    <Layout headerStyle={1}>
      <Hero />
      <WieZitErAchter />
      <Diensten />
      <Strippenkaart />
      <Gallerij />
      <Getuigenissen />
      <Contact />
    </Layout>
  );
}
