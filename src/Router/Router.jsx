import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import RippleBtn from "../Components/BlueRippleButton/RippleBtn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about-us",
        element: (
          <RippleBtn onClick={() => console.log("im clicked")}>
            Click me
          </RippleBtn>
        ),
      },
      {
        path: "/our-services",
        element: <div>This is Our Services Section</div>,
      },
      {
        path: "/profile",
        element: <div className="text-xl">Your Profile</div>,
      },
      {
        path: "/settings",
        element: <div className="text-xl">What You Wanna Change</div>,
      },
      {
        path: "/Logout",
        element: (
          <div className="text-center text-4xl font-bold">Ushtha Pickup</div>
        ),
      },
    ],
  },
]);
