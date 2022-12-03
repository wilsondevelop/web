import { getAccessToken } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"
import { GetServerSideProps } from "next"

export default function Home() {
  const { user } = useUser()
  return (
    <>
      <pre>
        <p>{JSON.stringify(user, null, 2)}</p>
      </pre>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res}) => {
  const token = await getAccessToken(req, res);

  return {
    props: {},
  }
}