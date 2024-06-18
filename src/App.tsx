import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";
import Home from "./pages/page.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import TermsOfUse from "./pages/terms-of-use.tsx";
import CodeSos from "./pages/code-sos.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-use", element: <TermsOfUse /> },
        { path: "/delete-all", element: <CodeSos /> },
        // Add routes for other pages
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
