import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";

export default function NavBar() {
  return (
    <section className="container flex items-center justify-between">
      <Link href="/">
        <div className="w-64">
          <Image src={logo} alt="log" className="object-cover" />
        </div>
      </Link>
      <div className="lg:hidden">{/* menu on small screens */}</div>
      <div className="hidden items-center lg:flex">
        {/* menu on large screens */}
        <Link href="/azure" className="px-4 text-[#666666]">
          Azure
        </Link>
        <Link href="/aws" className="px-4 text-[#666666]">
          AWS
        </Link>
        <Link href="/gcp" className="px-4 text-[#666666]">
          GCP
        </Link>
        <Link
          href="/enroll"
          className="mx-4 rounded-full border bg-[#7272ff] px-4 py-2 font-semibold text-white"
        >
          ENROLL NOW
        </Link>
      </div>
    </section>
  );
}
