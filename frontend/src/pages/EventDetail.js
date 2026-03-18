import {redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetail() {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event} />;
}

export default EventDetail;

export async function loader({request, params}) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`);

    if(!response.ok){
        throw Response.json({message:"Could not fetch details."}, {status: 500});
    }else{
        return response;
    }
}

export async function action({ params }) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`, {
        method: 'DELETE',
    });

    if(!response.ok){
        throw Response.json({message:"Could not delete event."}, {status: 500});
    }

    return redirect('/events');
}