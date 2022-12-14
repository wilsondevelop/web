import {  withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client"

export default function User(){
    const { user } = useUser()
    return (
        <>
            <pre>
                <p>{JSON.stringify(user, null, 2)}</p>
            </pre>
        </>

    )
}


export const getServerSideProps = withPageAuthRequired({
    returnTo: '/'
});