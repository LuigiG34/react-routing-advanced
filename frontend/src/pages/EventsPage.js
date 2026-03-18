import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
    // You cannot use any eact hooks in a loader function
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // ... handle error
    } else {
        return response;
    }
}