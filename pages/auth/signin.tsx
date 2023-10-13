import { InferGetServerSidePropsType, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getProviders, getCsrfToken, signIn } from 'next-auth/react'
import { auth } from '@/lib/auth'

const SignIn = ({ csrfToken, providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (<div>
    {providers && Object.values(providers).map(provider => (
      <div key={provider.name}>
        <button onClick={() => { signIn(provider.id) }}>
          Sign In with {provider.name}
        </button>
      </div>
    ))}
  </div>)
}

export default SignIn;

export const getServerSideProps = (async (context) => {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  const session = await auth(context.req, context.res)

  if (session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: {
      providers,
      csrfToken
    },
  }
}) satisfies GetServerSideProps;