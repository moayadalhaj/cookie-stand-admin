export default function CreateForm({onCreate}) {
    
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
        onCreate(newShop);
        event.target.reset();
    }
    return (
        <form className="my-4 bg-gray-200 rounded-md mx-44" onSubmit={submitHandler}>
            <div className="flex items-center justify-center py-8">
                <div className="w-full py-4 text-center mx-14">
                    <label className="pb-2 font-semibold tect-2xl">ADD LOCATION</label>
                    <input name="location" placeholder="Cookie Stand Location" className="w-full p-2 font-medium" required />
                </div>
                <button type="submit" className="w-2/3 py-6 bg-green-500 rounded-md mr-14">CREATE STAND</button>
            </div>
            <div className="flex items-center justify-center py-4 pb-8 mx-auto text-xl font-semibold text-center">
                <div className="bg-green-200 rounded-md">
                    <label>MINIMUM CUSTOMERS PER HOUR</label>
                    <input name="minCustomers" placeholder="0" className="p-1 text-2xl" required />
                </div>
                <div className="bg-green-200 rounded-md">
                    <label>MAXIMUM CUSTOMERS PER HOUR</label>
                    <input name="maxCustomers" placeholder="0" className="p-1 text-2xl" required />
                </div>
                <div className="bg-green-200 rounded-md">
                    <label>AVERAGE COOKIES PER HOUR</label>
                    <input name="avgCookies" placeholder="0" className="p-1 text-2xl" required />
                </div>
            </div>
        </form>
    )
}