import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import { doctorsArray } from "./_utils/actions";

export default function Home() {
  return (
    <div className="  ">
      <Hero />
      <CategorySearch />
      <DoctorList doctorsArray={doctorsArray} />
    </div>
  );
}
