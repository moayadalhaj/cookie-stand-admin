import { hours } from "../data"

export default function ReportTable({locations, onDelete}) {
    if(locations?.length){
            return (
                <table className='w-2/3 mx-auto text-gray-800 bg-gray-200 border border-collapse border-green-800 '>
                    <thead key='head' className='text-left bg-green-500 border-gray-300 rounded-md'>
                        <th className="border border-green-600">Location</th>
                        {
                            hours.map(element => {
                                return (
                                    <th className="border border-green-600">{element}</th>
                                )
                            })
                        }
                        <th className="border border-green-600">Totals</th>

                    </thead>
                    <tbody key='head' className='text-center border-gray-300 rounded-md'>
                        {
                            locations?.map((location) => {
                                if (location.id % 2 == 0) {
                                    return (
                                        <tr key={location.location} className='text-center bg-green-400 border border-green-600'>
                                            <div className="flex items-center justify-between px-5">
                                                <td id={location.id} className="py-2 font-bold">{location.location}</td>
                                                <svg onClick={()=>onDelete(location.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                            {/* {
                                                location.hourlySales.map(val => {
                                                    return (
                                                        <td className="border border-green-600">{val}</td>
                                                    )
                                                })
                                            } */}
                                            <td className="border border-green-600">{location.totals}</td>

                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={location.location} className='text-center bg-green-200 border-b border-green-600'>
                                            <div className="flex items-center justify-between px-5">
                                                <td d={location.id} className="py-2 font-bold">{location.location}</td>
                                                <svg onClick={()=>onDelete(location.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                            {/* {
                                                location.hourlySales.map(val => {
                                                    return (
                                                        <td className="border border-green-600">{val}</td>
                                                    )
                                                })
                                            } */}
                                            <td className="border border-green-600">{location.totals}</td>

                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table >
            )
        }
        return (
            <h2 className='text-2xl text-center'>No Cookie Stands Available</h2>
        )
    }
    
