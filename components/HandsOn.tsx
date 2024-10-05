import Image from "next/image";
import hands_on from "@/images/hands_on.png";

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
      <div className="flex justify-between gap-5">
        <div className="">
          <div className="rounded-t-xl bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <p className="rounded-lg border p-1">AWS</p>
          <h6 className="">Certified Amazon Cloud Professional</h6>
          <a>
            Practical in nature with 100+ guided hands-on exercises in our state
            of the art online labs
          </a>
        </div>
        <div className="">
          <div className="rounded-t-xl bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <p className="rounded-lg border p-1">Azure</p>
          <h6 className="">Certified Azure Professional</h6>
          <a>
            Practical in nature with 100+ guided hands-on exercises in our state
            of the art online labs
          </a>
        </div>
        <div className="">
          <div className="rounded-t-xl bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <p className="rounded-lg border p-1">GCP</p>
          <h6 className="">Certified Google Cloud Professional</h6>
          <a>
            Practical in nature with 100+ guided hands-on exercises in our state
            of the art online labs
          </a>
        </div>
      </div>
    </section>
  );
}
