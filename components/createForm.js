export default function CreateForm(props){
    return(
        <form className="bg-green-300 mx-72 my-8 rounded-md" onSubmit={props.submitHandler}>
                        <p className="flex justify-center py-4 text-2xl">Create Cookie Stand</p>
                        <div className="flex py-4">
                            <label className="px-4">Location</label>
                            <input name="location" className="w-full mr-4" required />
                        </div>

                        <div className="flex justify-center items-center text-center mx-5 py-4 gap">
                            <div className="bg-green-200 py-3 mr-2 rounded-md">
                                <label>Minimum Customers per Hour</label>
                                <input name="minCustomers" required />
                            </div>
                            <div className="bg-green-200 py-3 mr-2 rounded-md">
                                <label>Maximum Customers per Hour</label>
                                <input name="maxCustomers" required />
                            </div>
                            <div className="bg-green-200 py-3 mr-2 rounded-md">
                                <label>Average Cookies per Hour</label>
                                <input name="avgCookies" required />
                            </div>
                            <button type="submit" className="px-28 py-6 bg-green-500 rounded-md">Create</button>
                        </div>
                    </form>
    )
}