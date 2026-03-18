import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetail() {
    const { event, events } = useRouteLoaderData('event-detail');

    return <>
        <Suspense fallback={<p style={ {textAlign: "center"} }>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>

        <Suspense fallback={<p style={ {textAlign: "center"} }>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    </>;
}

export default EventDetail;

async function loadEvent(eventId) {
    const response = await fetch(`http://localhost:8080/events/${eventId}`);

    if(!response.ok){
        throw Response.json({message:"Could not fetch details."}, {status: 500});
    }else{
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    // You cannot use any react hooks in a loader function
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.' };
        // throw  { message: 'Could not fetch events!'};
        // throw new Response(JSON.stringify({ message: 'Could not fetch events!'}), {status: 500});
        throw Response.json({ message: 'Could not fetch events!'}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({request, params}) {
    return ({
        event: await loadEvent(params.eventId),
        events: loadEvents()
    });
}

export async function action({ params }) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
        method: 'DELETE',
    });

    if(!response.ok){
        throw Response.json({message:"Could not delete event."}, {status: 500});
    }

    return redirect('/events');
}