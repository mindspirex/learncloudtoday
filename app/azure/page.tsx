import AzureLanding from "@/components/AzureLanding";
import Experience from "@/components/Experience";
import Intense from "@/components/IntenseCourse";

export default function Azure() {
  return (
    <main>
      <div className="bg-[#474ab6] bg-[url('../images/azure_landing_bg.webp')] bg-cover py-20 bg-blend-overlay">
        <AzureLanding />
      </div>
      <div className="py-20">
        <Experience />
      </div>
      <div className="bg-[#474ab6] bg-[url('../images/azure_landing_bg.webp')] bg-cover py-20 bg-blend-overlay">
        <Intense />
      </div>
    </main>
  );
}
