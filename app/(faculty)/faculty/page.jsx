"use client"

import { useState } from "react";

const facultyList = ["Dr. Warren", "Dr. Lee", "Dr. Miles"];

export default function FacultyPage() {
    const [textBoxValue, setTextBoxValue] = useState("");

    return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1>These are the Faculty:</h1>
        <ul>
        {facultyList.map(faculty => <li>{faculty}</li>)}
        </ul>
        <input className="text-black" type="text" name="" id="" onChange={e => setTextBoxValue(e.target.value)} />
        <p>{textBoxValue}</p>

    </main>
    );
}
