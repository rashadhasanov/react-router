import {
  createBrowserRouter,
  Route,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route
          index
          errorElement={<CareersError />}
          loader={careersLoader}
          element={<Careers />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareersError />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
