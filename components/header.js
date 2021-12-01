import Link from 'next/dist/client/link'
import { useAuth } from '../contexts/auth'

export default function Header() {
    const { user, logout } = useAuth()
    return (
        <header className="flex items-center justify-around p-4 bg-green-500 w-100 text-balck ">
            <div>
                <h1 className="text-4xl font-bold">
                    Cookie Stand Admin
                </h1>
            </div>
            <div>
                <span className="px-2 py-1 rounded-md bg-green-50 text-md">{user.username}</span>
                <button className="p-1 mx-3 text-white bg-green-600 rounded-lg" onClick={logout}>Sign Out</button>
                <Link href='/overview'>
                    <a className="px-2 py-1 rounded-md bg-green-50 text-md">Overview</a>
                </Link>
            </div>
        </header>
    )
}