import { Form, useNavigate } from "react-router-dom"
import ClientForm from "../components/ClientForm"

export function action() {
    console.log('Submit formulario');
}

function NewClient() {

    const navigate = useNavigate();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">New Client</h1>
            <p className="mt-3">Fill all fields to create a new client</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                <Form
                    method="POST"
                >
                    <ClientForm></ClientForm>
                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Register Client"
                    />
                </Form>
            </div>
        </>
    )
}

export default NewClient