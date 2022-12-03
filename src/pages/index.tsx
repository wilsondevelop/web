import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Home() {
  return <a href="/api/auth/logout">Logout</a>;
}
export const getServerSideProps = withPageAuthRequired();