import EventsList from '../components/EventsList';
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function Events() {
    const { events } = useLoaderData();

    return <Suspense fallback={<p style={ {textAlign: "center"} }>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
    </Suspense>
}

export default Events;

async function loadEvents() {
    // You cannot use any react hooks in a loader function
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.' };
        // throw  { message: 'Could not fetch events!'};
        // throw new Response(JSON.stringify({ message: 'Could not fetch events!'}), {status: 500});
        return Response.json({ message: 'Could not fetch events!'}, {status: 500});
    } else {
        // return response;

        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return ({
        events: loadEvents()
    });
}

