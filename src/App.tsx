import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";
import Blog from "./pages/blog.tsx";
import Business from "./pages/bloom/business/business.tsx";
import Reseller from "./pages/bloom/reseller/reseller.tsx";
import CodeSos from "./pages/code-sos.tsx";
import DeleteAll from "./pages/delete-all.tsx";
import Home from "./pages/page.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import TermsOfUse from "./pages/terms-of-use.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "/bloom", element: <Bloom /> },`
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-use", element: <TermsOfUse /> },
        { path: "/delete-all", element: <CodeSos /> },
        { path: "/account/delete", element: <DeleteAll /> },
      ],
    },
    {
      path: "/bloom/resellers",
      element: <Reseller />,
    },
    {
      path: "/bloom/businesses",
      element: <Business />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
