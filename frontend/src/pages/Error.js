import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    const error = useRouteError();

    let title = 'An error occured!';
    let mesage = 'Something went wrong.';

    if(error.status === 500){
        mesage = JSON.parse(error.data).message;
    }

    if(error.status === 404){
        title = 'Not found!';
        mesage = 'Could not find ressource or page.';
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{mesage}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage;