import Landing from "@/components/Landing";
import Experience from "@/components/Experience";
import Intense from "@/components/IntenseCourse";
import HandsOn from "@/components/HandsOn";
import JoinTheRevolution from "@/components/JoinTheRevolution";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <main>
      <div className="background py-20">
        <Landing />
      </div>
      <div className="py-20">
        <Experience />
      </div>
      <div className="background py-20">
        <Intense />
      </div>
      <div className="bg-[#f7f8fc] py-20">
        <HandsOn />
      </div>
      <div className="py-20">
        <JoinTheRevolution />
      </div>
      <div className="bg-[#f7f8fc] py-20">
        <Ready />
      </div>
    </main>
  );
}
