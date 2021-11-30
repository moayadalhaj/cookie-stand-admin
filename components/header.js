import Link from 'next/dist/client/link'

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-green-500 w-100 p-4 text-balck ">
            <h1 className="text-4xl">
                Cookie Stand Admin
            </h1>
            <Link href='/overview'>
                <a className="px-2 bg-green-50 rounded-md text-md">Overview</a>
            </Link>
        </header>
    )
}