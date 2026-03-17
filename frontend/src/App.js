// 7.
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [
            { index: true, element: <HomePage /> },
            { path: "events", element: <EventsPage /> },
            { path: "events/:id", element: <EventDetailPage /> },
            { path: "events/new", element: <NewEventPage /> },
            { path: "events/:id/edit", element: <EditEventPage /> },
        ]},
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
