import Link from "next/link";

export default function Ready() {
  return (
    <section className="container flex flex-col justify-start gap-4 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-semibold text-[#7272ff]">
          Ready to learn Cloud?
        </h3>
        <h5 className="text-lg font-light text-[#8585bd]">
          Get in touch, or Register now!
        </h5>
      </div>
      <div className="flex grow flex-col items-start justify-evenly gap-3 md:flex-row md:items-center">
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
