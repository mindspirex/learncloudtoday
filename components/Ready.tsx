import Link from "next/link";

export default function Ready() {
  return (
    <section className="container flex justify-between">
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-3xl font-semibold text-[#7272ff]">
          Ready to learn Cloud?
        </h3>
        <h5 className="text-lg font-light text-[#8585bd]">
          Get in touch, or Register now!
        </h5>
      </div>
      <div className="flex grow items-center justify-evenly">
        <Link
          href="#"
          className="rounded-full border bg-[#7272ff] px-5 py-3 font-semibold text-white"
        >
          ENROLL NOW
        </Link>
        <Link
          href="#"
          className="rounded-full border bg-white px-5 py-3 font-semibold text-[#7272ff]"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
