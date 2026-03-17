import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [
            { index: true, element: <HomePage /> },
            { path: "events", element: <EventsRootLayout />, children: [
                    { index: true, element: <EventsPage /> },
                    { path: ":id", element: <EventDetailPage /> },
                    { path: "new", element: <NewEventPage /> },
                    { path: ":id/edit", element: <EditEventPage /> },
                ]
            },
        ]
    },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
