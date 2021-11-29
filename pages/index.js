import Head from 'next/head'
import React from 'react'
import { useState } from 'react'


export default function Home() {

  const [locations, setLocations] = useState([])

  function submitHandler(event){
    event.preventDefault()
    
    let newShop = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value
    }
    document.querySelectorAll('input').forEach(element=>{
      element.value = ''
    })
    setLocations([...locations, newShop])
  }
  return (
    <div className="min-h-screen py-2 bg-black py-44">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-green-50 mx-5 pb-8">
        <header className="flex justify-between bg-green-500 w-100 p-4 text-balck text-4xl">
          <h1>
            Cookie Stand Admin
          </h1>
        </header>
        <form className="bg-green-300 mx-72 my-8 rounded-md" onSubmit = {submitHandler}>
          <p className="flex justify-center py-4 text-2xl">Create Cookie Stand</p>
          <div className="flex py-4">
            <label className="px-4">Location</label>
            <input name="location" className="w-full mr-4" required/>
          </div>

          <div className="flex justify-center items-center text-center mx-4 py-4">
            <div>
              <label>Minimum Customers per Hour</label>
              <input name="minCustomers" required/>
            </div>
            <div>
              <label>Maximum Customers per Hour</label>
              <input name="maxCustomers" required/>
            </div>
            <div>
              <label>Average Cookies per Hour</label>
              <input name="avgCookies" required/>
            </div>
            <button type="submit" className="px-24 py-5 bg-green-500">Create</button>
          </div>
        </form>
        <p className="text-center py-4">Report Table Comming Soon...</p>
        {
          locations.map(location=>{
            return(
              <p className='text-center text-gray-700'>{JSON.stringify(location)}</p>
            )
          })
        }
        <footer className="bg-green-500 p-4 mt-8">
          &copy;2021
        </footer>
      </main>
    </div>
  )
}
