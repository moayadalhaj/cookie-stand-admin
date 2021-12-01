import React from 'react'
import Head from 'next/head'
import { useAuth } from '../contexts/auth'
import CookieStandAdmin from '../components/cookieStandAdmin'
import LoginForm from '../components/loginForm'

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      {user ?
        <CookieStandAdmin />
        :
        <LoginForm />
      }
    </div>
  )
}
