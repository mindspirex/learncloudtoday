import GcpCurriculum from "@/components/GcpCurriculum";
import GcpLanding from "@/components/GcpLanding";

export default function Gcp() {
  return (
    <main>
      <div className="background py-20">
        <GcpLanding />
      </div>
      <div className="py-20">
        <GcpCurriculum />
      </div>
    </main>
  );
}
