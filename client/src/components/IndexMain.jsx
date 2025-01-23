import { Outlet } from "react-router-dom";
import IndexPageBook from "../page/IndexPage/IndexPageBook";
import IndexFeature from "../page/IndexPage/IndexFeature";

export default function IndexMain() {
  return (
    <div>
                  <IndexPageBook />
                  <IndexFeature />
                  <Outlet />
    </div>
  );
}