import Image from "next/image";
import amazon from "@/images/amazon.png";
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
      <div className="flex w-full items-center justify-around">
        <Image src={ibm} alt="ibm" className="w-36 grow-0" />
        <Image src={microsoft} alt="microsft" className="w-48 grow-0" />
        <Image src={amazon} alt="amazon" className="w-32 grow-0" />
      </div>
    </section>
  );
}
