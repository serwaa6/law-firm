import Login from "./Secretary/Login";
import CaseDetails from "./Secretary/CaseDetails";
import Dashboard from "./Secretary/Dashboard";
import LawyerDashboard from './Lawyer/LawyerDashboard'

export default [
  {
    path: "login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "casedetails",
    component: CaseDetails,
    layout: "/admin",
  },
  {
    path: "lawyerdashboard",
    component: LawyerDashboard,
    layout: "/lawyers",
  },
];
