import { hours } from "../data"

export default function ReportTable(props) {
    const locations = props.locations
    {
        if (locations.length) {
            return (
                <table className='w-2/3 mx-auto bg-gray-200 text-gray-800 text-center'>
                    <thead key='head' className='border-gray-300 bg-green-500 text-center rounded-md'>
                        <th>Location</th>
                        {
                            hours.map(element => {
                                return (
                                    <th>{element}</th>
                                )
                            })
                        }
                        <th>Totals</th>

                    </thead>
                    <tbody key='head' className='border-gray-300 text-center rounded-md'>
                        {
                            locations.map((location, id) => {
                                if (id % 2 == 0) {
                                    return (
                                        <tr key={location.location} className='bg-green-400 border-b border-gray-200 text-center bg-green-200'>
                                            <td>{location.location}</td>
                                            {
                                                location.hourlySales.map(val => {
                                                    return (
                                                        <td>{val}</td>
                                                    )
                                                })
                                            }
                                            <td>{location.totals}</td>

                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={location.location} className='bg-green-200 border-b border-gray-200 text-center bg-green-200'>
                                            <td>{location.location}</td>
                                            {
                                                location.hourlySales.map(val => {
                                                    return (
                                                        <td>{val}</td>
                                                    )
                                                })
                                            }
                                            <td>{location.totals}</td>

                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table >
            )
        }
    }
    return (
        <h2 className='text-center text-2xl'>No Cookie Stands Available</h2>
    )

}