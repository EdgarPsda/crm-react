import { getClient, updateClient } from "../data/clients";
import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import ClientForm from "../components/ClientForm";

export async function loader({ params }) {
    const client = await getClient(params.id);

    if (Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No Results'
        });
    }

    return client;
}

export async function action({ request, params }) {


    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const email = formData.get('email');

    console.log(data);

    // Validate
    const errors = [];
    if (Object.values(data).includes('')) {
        errors.push('All fields are required');
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!regex.test) {
        errors.push('Email not valid');
    }

    if (Object.keys(errors).length) {
        return errors;
    }

    // Update client's data
    await updateClient(params.id, data);

    return redirect("/");

}

const EditClient = () => {

    const navigate = useNavigate();
    const client = useLoaderData();
    const errors = useActionData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
            <p className="mt-3">Update client's information</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form
                    method="POST"
                >
                    <ClientForm client={client}></ClientForm>
                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Save Changes"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditClient