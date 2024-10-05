import AzureLanding from "@/components/AzureLanding";
import Experience from "@/components/Experience";
import Intense from "@/components/IntenseCourse";

export default function Azure() {
  return (
    <main>
      <div className="background py-20">
        <AzureLanding />
      </div>
      <div className="py-20">
        <Experience />
      </div>
      <div className="background py-20">
        <Intense />
      </div>
    </main>
  );
}
