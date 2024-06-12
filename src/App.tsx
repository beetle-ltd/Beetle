import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/page.tsx";
import Layout from "./layout.tsx";
import PrivacyPolicy from "./pages/privacy-policy.tsx";
import TermsOfUse from "./pages/terms-of-use.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                { path: "/", element: <Home /> },
                {path:"/privacy-policy",element:<PrivacyPolicy/>},
                {path:"terms-of-use",element:<TermsOfUse/>},
                // Add routes for other pages
            ],
        },
    ]);

        return <RouterProvider router={router} />;

}

export default App;
