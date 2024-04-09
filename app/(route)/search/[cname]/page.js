import React from "react";
import CategoryList from "../_components/CategoryList";
import DoctorList from "@/app/_components/DoctorList";

const Search = ({ params }) => {
  return (
    <div className="p-10">
      <DoctorList Category={params.cname} />
    </div>
  );
};

export default Search;
