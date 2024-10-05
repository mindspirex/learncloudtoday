import Link from "next/link";

export default function NavBar() {
  return (
    <div className="border-b">
      <section className="container h-16 flex justify-between items-center">
        <div className="font-bold text-2xl">SKCloud</div>
        <div className="flex items-center">
          <Link href="#" className="px-4">
            Reviews
          </Link>
          <Link href="#" className="px-4">
            Courses
          </Link>
          <Link href="#" className="py-2 px-4 mx-4 border rounded-lg">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
