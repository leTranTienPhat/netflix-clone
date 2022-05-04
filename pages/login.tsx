import Head from "next/head"
import Image from "next/image"

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="flex flex-col h-screen w-screen md:justify-center md:items-center bg-black bg-transparent ">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer md:left-10 md:top-6"
        width={150}
        height={150}
      />
    </div>
  )
}

export default Login