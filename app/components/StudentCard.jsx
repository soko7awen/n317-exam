export default function StudentCard({name, major, year}) {
    return (
        <div className="w-80 h-40 p-6 bg-teal-100 text-black">
            <h2 className="text-3xl font-bold">{name}</h2>
            <br></br>
            <p>{year}, {major} Major</p>
        </div>
    )
}