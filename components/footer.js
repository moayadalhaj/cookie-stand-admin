export default function Footer(props) {
    return (
        <footer className="bg-green-500 p-4 mt-8">
            <p className="text-xl">{props.locations.length} Locations World Wide</p>
        </footer>
    )
}