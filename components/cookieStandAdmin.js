import Head from 'next/head'
import Header from '../components/header'
import CreateForm from '../components/createForm'
import ReportTable from '../components/reportTable'
import Footer from '../components/footer'
import { useState } from 'react'

export default function CookieStandAdmin(props) {
    const [locations, setLocations] = useState([])

    function submitHandler(event) {
        event.preventDefault()

        let newShop = {
            location: event.target.location.value,
            minCustomers: event.target.minCustomers.value,
            maxCustomers: event.target.maxCustomers.value,
            avgCookies: event.target.avgCookies.value,
            hourlySales: [],
            totals: 0
        }
        let min = event.target.minCustomers.value;
        let max = event.target.maxCustomers.value;
        let avg = event.target.avgCookies.value;
        let salesPerHour = [];
        let total = 0
        for (let i=0; i<=13; i++){
            let val = Math.floor((Math.random() * ((max - min)+min/2)*avg));
            salesPerHour.push(val);
            total +=val
        }
        console.log(salesPerHour)
        newShop.hourlySales = salesPerHour
        newShop.totals = total
        document.querySelectorAll('input').forEach(element => {
            element.value = ''
        })
        setLocations([...locations, newShop])
    }
    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-green-50 mx-5">
                <Header />
                <CreateForm submitHandler={submitHandler} />
                <ReportTable locations={locations}/>
                <Footer locations={locations}/>
            </main>
        </div>
    )
}