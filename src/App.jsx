import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Filter from "./pages/Filter";
import Dashboard from "./pages/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import Login from "./Components/Login";
import Sidebar from "./Layout/Sidebar";
import Setting from "./pages/Setting";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import ChatLayout from "./Layout/ChatLayout";
import Analyzer from "./sub-pages/Analyzer";
import CVMaker from "./sub-pages/CVMaker";
import Recruitment from "./sub-pages/Recruitment";
import "./App.css";
import Signup from "./Components/Signup";
import Templates from "./sub-pages/Templates";
import Application from "./end-pages/Application";
import UserProfile from "./pages/UserProfile";
import ProviderDashboard from "./Provider/ProviderDashboard";
import Applicants from "./Provider/Applicants";
import ProviderProfile from "./Provider/ProviderProfile";
import AddJob from "./Provider/AddJob";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/filter",
          element: <Filter />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "userprofile",
          element: <UserProfile />,
        },
        {
          path: "providerdashboard",
          element: <ProviderDashboard />,
        },
        {
          path: "applicants",
          element: <Applicants />,
        },
        {
          path: "providerprofile",
          element: <ProviderProfile />,
        },
        {
          path: "addjob",
          element: <AddJob />,
        },
      ],
    },
    {
      path: "/",
      element: <Sidebar />,
      children: [
        {
          path: "/analyzer",
          element: <Analyzer />,
        },
        {
          path: "/cvmaker",
          element: <CVMaker />,
        },
        {
          path: "/templates",
          element: <Templates />,
        },
        {
          path: "/recruitment",
          element: <Recruitment />,
        },
        {
          path: "/application",
          element: <Application />,
        },
      ],
    },
    {
      path: "/chat",
      element: <ChatLayout />,
      children: [
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
export default App;

