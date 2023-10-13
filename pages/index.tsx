import LoginButton from '@/components/login-btn'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>next-auth.js Custom Sign-in With TypeScript</title>
      </Head>
      <main>
        <h1>Yo sup</h1>
        <LoginButton/>
      </main>
    </div>
  )
}
