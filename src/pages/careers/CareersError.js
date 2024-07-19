import { Link } from "react-router-dom";

export default function CareersError() {
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>Not found career</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}
