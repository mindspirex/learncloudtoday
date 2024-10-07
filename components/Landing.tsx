import Link from "next/link";
import Image from "next/image";
import calendar from "@/images/calendar.svg";

export default function Landing() {
  return (
    <section className="container flex items-center gap-10">
      <div className="flex flex-col gap-7">
        <a className="text-4xl font-semibold text-white">
          Practical Cloud Training and Certification
        </a>
        <a className="text-white">
          Learn Cloud concepts, tools and techniques from Industry experts with
          a practical and hands-on course. Master the real-world skills in our
          state of the art online lab and achieve your Cloud Certification.
        </a>
        <div className="flex">
          <Link
            href="#"
            className="rounded-full bg-white px-5 py-3 font-semibold text-[#5d54c1]"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>
      <Image
        width={350}
        src={calendar}
        alt="calendar"
        className="hidden lg:inline"
      />
    </section>
  );
}
