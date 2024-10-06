import Image from "next/image";
import hands_on from "@/images/hands_on.png";

export default function HandsOn() {
  return (
    <section className="container flex flex-col gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-3xl font-semibold text-[#7272ff]">
          Hand-on Courses
        </h3>
        <p className="max-w-[400px] text-center text-sm text-[#7272ff]">
          Practical in nature with 100+ guided hands-on exercises in our state
          of the art online labs.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <div className="rounded-xl">
          <div className="flex justify-center bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <div className="flex flex-col gap-3 bg-white p-5">
            <div className="">
              <p className="inline rounded-lg border bg-[#f1f2f9] p-1 text-xs">
                AWS
              </p>
            </div>
            <h6 className="text-sm font-semibold">
              Certified Amazon Cloud Professional
            </h6>
            <p className="text-sm">
              Practical in nature with 100+ guided hands-on exercises in our
              state of the art online labs
            </p>
          </div>
        </div>
        <div className="rounded-xl">
          <div className="flex justify-center bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <div className="flex flex-col gap-3 bg-white p-5">
            <div>
              <p className="inline rounded-lg border bg-[#f1f2f9] p-1 text-xs">
                Azure
              </p>
            </div>
            <h6 className="text-sm font-semibold">
              Certified Azure Professional
            </h6>
            <p className="text-sm">
              Practical in nature with 100+ guided hands-on exercises in our
              state of the art online labs
            </p>
          </div>
        </div>
        <div className="rounded-xl">
          <div className="flex justify-center bg-[#dbdbff]">
            <Image src={hands_on} alt="hands on" />
          </div>
          <div className="flex flex-col gap-3 bg-white p-5">
            <div>
              <p className="inline rounded-lg border bg-[#f1f2f9] p-1 text-xs">
                GCP
              </p>
            </div>
            <h6 className="text-sm font-semibold">
              Certified Google Cloud Professional
            </h6>
            <p className="text-sm">
              Practical in nature with 100+ guided hands-on exercises in our
              state of the art online labs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
