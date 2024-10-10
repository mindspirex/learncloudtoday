import Image from "next/image";
import profile from "@/images/profile.png";
import quotes from "@/images/quotes.png";

export default function Reviews() {
  return (
    <section className="container flex flex-col gap-10">
      <h3 className="text-center text-3xl font-semibold text-[#7272ff]">
        Check our Reviews
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex w-80 flex-col justify-between gap-5 rounded-3xl border p-10">
          <p>
            The Azure Fundamentals course was comprehensive, well-structured,
            and engaging, making it a must-take for anyone looking to learn
            about Microsoft Azure's powerful features.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image src={profile} alt="profile" />
            <p>Mihika Pandey</p>
          </div>
        </div>
        <div className="flex w-96 flex-col justify-between gap-5 rounded-3xl border p-10">
          <p>
            The AWS Essentials course delivered a comprehensive and hands-on
            learning experience, solidifying my understanding of cloud
            computing's core concepts and making it a top-notch resource for
            anyone starting their AWS journey.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image src={profile} alt="profile" />
            <p>Sanskar Kumar</p>
          </div>
        </div>
        <div className="flex w-80 flex-col justify-between gap-5 rounded-3xl border p-10">
          <p>
            The Google Cloud Platform course provided a thorough introduction to
            GCP services, with clear explanations and real-world examples that
            made complex concepts easy to understand.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image src={profile} alt="profile" />
            <p>Shrey Aggrawal</p>
          </div>
        </div>
        <div className="flex w-80 flex-col justify-between gap-5 rounded-3xl border p-10">
          <p>
            The Google Cloud Platform course provided a thorough introduction to
            GCP services, with clear explanations and real-world examples that
            made complex concepts easy to understand.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image src={profile} alt="profile" />
            <p>Shrey Aggrawal</p>
          </div>
        </div>
        <div className="flex w-80 flex-col justify-between gap-5 rounded-3xl border p-10">
          <p>
            The Google Cloud Platform course provided a thorough introduction to
            GCP services, with clear explanations and real-world examples that
            made complex concepts easy to understand.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Image src={profile} alt="profile" />
            <p>Shrey Aggrawal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
