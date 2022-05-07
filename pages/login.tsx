import Head from "next/head"
import Image from "next/image"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

type Inputs = {
  email: string,
  password: string,
};

type Props = {}

const Login = (props: Props) => {
  const [login, setLogin] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { signIn, signUp } = useAuth()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) await signIn(email, password)
    else await signUp(email, password)
  }

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

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-semibold">Sign in</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Enter your email address" className="loginInput" {...register("email", { required: true })}></input>
            {errors.email && <p className="p-1 text-[13px] font-light text-orange-500">Please enter your email address</p>}

          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Enter your password" className="loginInput" {...register("password", { required: true })}></input>
            {errors.password && <p className="p-1 text-[13px] font-light text-orange-500">Please enter your password</p>}
          </label>
        </div>

        <button className="w-full bg-[#e50914] py-3 rounded font-semibold " onClick={() => setLogin(true)}>Sign In</button>
        <div>
          New to Netflix?
          <button type="submit" className="text-white hover:underline ml-1 font-semibold text-[#e50914]" onClick={() => setLogin(false)}>Sign up now</button>
        </div>

        <div className="absolute rounded bg-black/90 px-4 py-2 mx-auto top-full left-0 w-full font-light">
          <span className="mb-4 block">Sign up for new account or use this account to login</span>
          <p>Email: admin@gmail.com</p>
          <p>Password: admin123</p>
        </div>
      </form >


    </div >
  )
}

export default Login