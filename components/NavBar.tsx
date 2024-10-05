import Link from "next/link";

export default function NavBar() {
  return (
    <section className="container flex h-16 w-3/5 items-center justify-between">
      <div className="text-2xl font-bold">LearnCloudToday.com</div>
      <div className="flex items-center">
        <Link href="#" className="px-4">
          Reviews
        </Link>
        <Link href="#" className="px-4">
          Courses
        </Link>
        <Link href="#" className="mx-4 rounded-lg border px-4 py-2">
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
