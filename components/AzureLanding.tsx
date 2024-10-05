import Image from "next/image";
import test from "@/images/test.png";

export default function AzureLanding() {
  return (
    <div className="bg-[url('../images/azure_landing_bg.webp')] bg-cover py-20">
      <section className="container flex gap-10">
        <div>
          <a className="text-4xl text-white">
            Practical Azure Training and Certification
          </a>
          <div className="flex flex-col gap-3">
            Learn DevSecOps concepts, tools and techniques from Industry experts
            with a practical and hands-on course. Master the real-world skills
            in our state of the art online lab and achieve your DevSecOps
            Certification.
          </div>
        </div>
        <Image src={test} alt="test" className="h-40 w-64" />
      </section>
    </div>
  );
}
