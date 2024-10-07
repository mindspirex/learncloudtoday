import Image from "next/image";
import whatsapp from "@/images/whatsapp.png";
import twitter from "@/images/twitter.png";
import instagram from "@/images/instagram.png";

export default function Footer() {
  return (
    <section className="container flex items-center justify-between">
      <p className="text-xs font-thin text-white">© 2024 SkCloudSolutions</p>
      <div className="flex gap-5">
        <Image src={whatsapp} alt="whatsapp" className="h-6 w-6 flex-none" />
        <Image src={twitter} alt="twitter" className="h-6 w-6 flex-none" />
        <Image src={instagram} alt="instagram" className="h-6 w-6 flex-none" />
      </div>
    </section>
  );
}
