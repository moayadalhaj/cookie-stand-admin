import Head from 'next/head'
import Header from '../components/header'
import CreateForm from '../components/createForm'
import ReportTable from '../components/reportTable'
import Footer from '../components/footer'
import { useState } from 'react'
import useResource from '../hooks/useResource'


export default function CookieStandAdmin(props) {
    const { resources, createResource, deleteResource } = useResource();
    return (
        <div className="flex justify-center h-screen bg-black">
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mx-5 bg-green-50">
                <Header />
                <CreateForm onCreate={createResource} />
                <ReportTable locations={resources} onDelete={deleteResource}/>
                <Footer locations={resources}/>
            </main>
        </div>
    )
}