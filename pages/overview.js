import React from 'react'
import Link  from 'next/link'

export default function overview() {
    return (
        <div>
        <Link href = '/'>
        <a className = 'text-blue-800 text-2xl'>Home</a>
        </Link>
        </div>
    )
}