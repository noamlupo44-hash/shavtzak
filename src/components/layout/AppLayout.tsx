import { Outlet } from "react-router-dom";
import NvgBar from "./NvgBar";
import "../../styles/AppLayout.css";

function AppLayout() {
  return (
    <>
      <nav>
        <NvgBar />
      </nav>
      <main>
        <div className="bodyLayout">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
