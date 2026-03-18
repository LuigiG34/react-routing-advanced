import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, {action as deleteEventAction, loader as eventsDetailLoader} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
    { path: "/", element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "events", element: <EventsRootLayout />,
                children: [
                    { index: true, element: <EventsPage />, loader: eventsLoader },
                    { path: ':id', loader: eventsDetailLoader, id: "event-detail", children: [
                            { index: true, element: <EventDetailPage />, action: deleteEventAction },
                            { path: "edit", element: <EditEventPage />, action: manipulateEventAction },
                        ]
                    },
                    { path: "new", element: <NewEventPage />, action: manipulateEventAction },
                ]
            },
        ]
    },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
