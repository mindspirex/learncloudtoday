import Link from "next/link";

export default function AzureLanding() {
  return (
    <section className="container flex items-center gap-10">
      <div className="flex flex-col gap-7">
        <a className="text-4xl font-semibold text-white">
          Practical Azure Training and Certification
        </a>
        <a className="text-white">
          Learn DevSecOps concepts, tools and techniques from Industry experts
          with a practical and hands-on course. Master the real-world skills in
          our state of the art online lab and achieve your DevSecOps
          Certification.
        </a>
        <div className="flex">
          <Link
            href="#"
            className="rounded-full bg-white px-5 py-3 font-semibold text-purple-800"
          >
            ENROLL NOW
          </Link>
        </div>
      </div>
      <svg
        width="375"
        height="325"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle r="45" cx="62.5" cy="155" fill="#ff5924" />
        <rect width="125" height="125" x="125" y="75" fill="#3e84fc" />
        <rect width="125" height="125" x="250" y="75" fill="#ff5924" />
        <rect width="125" height="125" x="0" y="200" fill="#5dda42" />
        <rect width="125" height="125" x="125" y="200" fill="#ff5924" />
        <rect width="125" height="125" x="250" y="200" fill="#3e84fc" />
        <polygon points="125,200 375,200 250,0" fill="#5dda42" />
      </svg>
    </section>
  );
}
