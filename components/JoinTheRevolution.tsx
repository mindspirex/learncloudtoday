import Image from "next/image";
import aws from "@/images/aws.png";
import microsoft from "@/images/microsoft.png";
import ibm from "@/images/ibm.png";

export default function JoinTheRevolution() {
  return (
    <section className="container flex flex-col items-center">
      <div className="flex max-w-[600px] flex-col gap-2">
        <h3 className="text-center text-3xl font-semibold text-[#7272ff]">
          Join the Revolution
        </h3>
        <p className="text-center text-[#8f8fc2]">
          Our students take away learning from our courses and apply then right
          away in their organisations.
        </p>
      </div>
      <div className="flex">
        <Image src={aws} alt="aws" className="h-48 w-48" />
        <Image src={microsoft} alt="microsft" className="h-96" />
        <Image src={ibm} alt="ibm" />
      </div>
    </section>
  );
}
