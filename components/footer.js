export default function Footer({locations}) {
    locations = {locations}
    return (
        <footer className="fixed inset-x-0 bottom-0 p-4 mx-5 bg-green-500">
            <p className="text-xl text-center">{locations.length} Locations World Wide</p>
        </footer>
    )
}