import AzureLanding from "@/components/AzureLanding";
import Experience from "@/components/Experience";
import Intense from "@/components/IntenseCourse";
import HandsOn from "@/components/HandsOn";

export default function Home() {
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
      <div className="py-20">
        <HandsOn />
      </div>
    </main>
  );
}
