import Link from "next/link";

export default function NavBar() {
  return (
    <section className="container flex items-center justify-between">
      <div className="text-2xl font-bold">LearnCloudToday.com</div>
      <div className="flex items-center">
        <Link href="#" className="px-4">
          Reviews
        </Link>
        <Link href="#" className="px-4">
          Courses
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
