export default function RegistrationForm() {
  return (
    <section className="container flex flex-col items-center gap-4">
      <h3 className="text-center text-3xl font-semibold text-white">
        Pre-Registration
      </h3>
      <p className="w-[400px] text-center text-sm font-thin text-white">
        Please enter your details to sign up for the course, we will contact you
        shortly.
      </p>
      <div className="flex w-[400px] flex-col gap-6 bg-white p-10">
        <div className="flex flex-col gap-4">
          <select className="border bg-white p-3">
            <option>Select a course</option>
            <option>Azure</option>
            <option>AWS</option>
            <option>GCP</option>
          </select>
          <input placeholder="Name" className="border p-3" />
          <input placeholder="Email" className="border p-3" />
          <input placeholder="Phone" className="border p-3" />
        </div>
        <div className="flex justify-end">
          <button className="rounded-full border bg-[#7272ff] px-4 py-2 font-semibold text-white">
            REGISTER
          </button>
        </div>
      </div>
    </section>
  );
}
