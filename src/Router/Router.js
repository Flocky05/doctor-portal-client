import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import DashboardLayout from "../Pages/LayOut/DashboardLayout";
import Login from "../Pages/Login/Login/Login";
import Main from "../Pages/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
    ],
  },
]);
