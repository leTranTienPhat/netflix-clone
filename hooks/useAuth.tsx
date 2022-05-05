import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

interface IAuth {
  user: User | null,
  signUp: (email: string, password: string) => Promise<void>,
  signIn: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
  error: string | null,
  loading: boolean
}
const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => { },
  signIn: async () => { },
  logout: async () => { },
  error: null,
  loading: false
})

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [initialLoading, setInitialLoading] = useState<boolean>(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      }
      else {
        setUser(null)
        setLoading(true)
        router.push("/login")
      }
      setInitialLoading(false)
    })
  }, [auth])

  const signUp = async (email: string, password: string) => {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
      setUser(userCredential.user)
      router.push("/")
      setLoading(false)
    }).catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      setUser(userCredential.user)
      router.push("/")
      setLoading(false)
    }).catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }

  const logout = async () => {
    setLoading(true)
    signOut(auth).then(() => setUser(null)).catch((error) => alert(error.message)).finally(() => setLoading(false))
  }

  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, logout, error, loading }),
    [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {initialLoading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}