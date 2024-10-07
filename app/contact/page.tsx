import ContactForm from "@/components/ContactForm";
import Ready from "@/components/Ready";

export default function Contact() {
  return (
    <main>
      <div className="background py-20">
        <ContactForm />
      </div>
      <div className="bg-[#f7f8fc] py-20">
        <Ready />
      </div>
    </main>
  );
}
