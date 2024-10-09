import Landing from "@/components/Landing";
import Experience from "@/components/Experience";
import Intense from "@/components/IntenseCourse";
import HandsOn from "@/components/HandsOn";
import Reviews from "@/components/Reviews";
import JoinTheRevolution from "@/components/JoinTheRevolution";

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
        <Reviews />
      </div>
      <div className="pb-8 pt-20">
        <JoinTheRevolution />
      </div>
    </main>
  );
}
