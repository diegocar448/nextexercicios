import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <img src={session.user.image} />
        Autenticado como {session.user.email} <br />
        <button onClick={() => signOut()}>Sair</button>
      </>
    )
  }
  return (
    <>
      Não Autenticado <br />
      <button onClick={() => signIn()}>Entrar</button>
    </>
  )
}