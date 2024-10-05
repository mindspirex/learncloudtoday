import Image from "next/image";
import tick from "@/images/tick.svg";

export default function AzureLanding() {
  return (
    <section className="container flex flex-col gap-3 py-12">
      <h3 className="text-3xl font-semibold">Azure Cloud Architect Program</h3>
      <p>
        Master Azure and its services with our Azure Cloud Architect
        Certification Course
      </p>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image src={tick} alt="tick" className="h-5 w-5" />
          <p>
            Build expertise in AWS, Microsoft Azure and GCP with our Cloud
            Architect Certification Course
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={tick} alt="tick" className="h-5 w-5" />
          <p>Exam Voucher included for any one Azure course</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={tick} alt="tick" className="h-5 w-5" />
          <p>Access official AWS-authored self-learning content</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={tick} alt="tick" className="h-5 w-5" />
          <p>
            Master cloud architectural principles; design & deploy scalable
            services on cloud platforms
          </p>
        </div>
      </div>
      <div className="">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
