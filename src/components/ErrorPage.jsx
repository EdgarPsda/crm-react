import { useRouteError } from "react-router";

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clients</h1>
            <p className="text-center">There's an Error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}