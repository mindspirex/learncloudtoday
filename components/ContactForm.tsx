export default function ContactForm() {
  return (
    <section className="container flex flex-col items-center gap-5">
      <h3 className="text-4xl font-semibold text-white">Contact Us</h3>
      <p className="max-w-[450px] text-center text-sm font-thin text-white">
        Do you have any questions, feedback or you just want to talk to us, get
        in touch with us by filling the below form.
      </p>
      <div className="flex">
        <div className="flex w-[400px] flex-col gap-4 bg-white p-10">
          <input placeholder="Name" className="border p-3" />
          <input placeholder="Email" className="border p-3" />
          <input placeholder="Phone" className="border p-3" />
          <input placeholder="Message" className="border p-3" />
          <div className="flex justify-end">
            <button className="rounded-full border bg-[#7272ff] px-4 py-2 font-semibold text-white">
              SEND MESSAGE
            </button>
          </div>
        </div>
        <div className="justify-betwee flex w-[200px] flex-col gap-10 bg-[#5d54c1] p-5">
          <h3 className="text-3xl text-white">Info</h3>
          <p className="font-thin text-white">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          </p>
          <div>
            <p className="text-sm text-white">+91 8766299829</p>
            <p className="text-sm text-white">+91 8766299829</p>
          </div>
          <p className="text-white">info@learncloudtoday. com</p>
        </div>
      </div>
    </section>
  );
}
