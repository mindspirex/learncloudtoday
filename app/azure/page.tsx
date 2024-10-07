import AzureLanding from "@/components/AzureLanding";
import AzureCurriculum from "@/components/AzureCurriculum";

export default function Azure() {
  return (
    <main>
      <div className="background py-20">
        <AzureLanding />
      </div>
      <div className="py-20">
        <AzureCurriculum />
      </div>
    </main>
  );
}
