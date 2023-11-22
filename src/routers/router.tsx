import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../common/errorPage";
import Dashboard from "../components/dashboard/main";
import DashboardFullScreen from "../components/dashboard/fullScreen";
import HistoricalData from "../components/historicalData/main";
import Analytics from "../components/analytics/main";
import AnalyticsFullScreen from "../components/analytics/fullScreen";
import DeviceManagement from "../components/deviceManagement/main";
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard-full-screen",
    element: <DashboardFullScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/historical-data",
    element: <HistoricalData />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analytics-full-screen",
    element: <AnalyticsFullScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/device-management",
    element: <DeviceManagement />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
