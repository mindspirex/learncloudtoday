import Image from "next/image";
import hands_on_1 from "@/images/hands_on_1.png";
import hands_on_2 from "@/images/hands_on_2.png";
import hands_on_3 from "@/images/hands_on_3.png";

export default function HandsOn() {
  return (
    <section className="container flex flex-col gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-3xl font-semibold text-[#7272ff]">
          Hand-on Courses
        </h3>
        <a className="w-96 text-center text-sm text-[#7272ff]">
          Practical in nature with 100+ guided hands-on exercises in our state
          of the art online labs.
        </a>
      </div>
      <div className="flex justify-between">
        <div>
          <Image src={hands_on_1} alt="hands on" className="h-32 w-32" />
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <Image src={hands_on_2} alt="hands on" className="h-32 w-32" />
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <Image src={hands_on_3} alt="hands on" className="h-32 w-32" />
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
