import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p className="link-container">
        <span>Go to the </span>
        <NavLink to="/">Homepage</NavLink>
      </p>
    </div>
  );
}
