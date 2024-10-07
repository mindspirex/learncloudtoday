import AwsCurriculum from "@/components/AwsCurriculum";
import AwsLanding from "@/components/AwsLanding";

export default function Aws() {
  return (
    <main>
      <div className="background py-20">
        <AwsLanding />
      </div>
      <div className="py-20">
        <AwsCurriculum />
      </div>
    </main>
  );
}
