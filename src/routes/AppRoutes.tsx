import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/layout/AppLayout";
import ShowTable from "../components/jobTable/ShowTable";
import TablesPage from "../pages/TablesPage";
import OnCallChart from "../pages/OnCallChart";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/table/:tableName" element={<TablesPage />}></Route>
        <Route path="/onCall" element={<OnCallChart />}></Route>
      </Route>
    </Routes>
  );
}
export default AppRoutes;
