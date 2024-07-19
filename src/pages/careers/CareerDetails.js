import { careers } from "../../../src/data/data.js";
import { useParams } from "react-router-dom";
import CareersError from "./CareersError.js";

export default function CareerDetails() {
  const { id } = useParams();

  const career = careers.find((career) => career.id === +id);

  if (!career) {
    return <CareersError />;
  }

  return (
    <div>
      <div key={career.id} className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
            sunt ipsam quam assumenda quasi ipsa facilis laborum rerum
            voluptatem!
          </p>
        </div>
      </div>
    </div>
  );
}
