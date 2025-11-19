"use client"

import { useParams } from 'next/navigation'
import React from 'react';

export default function StudentPage() {
    const params = useParams();

    let id = params.id;

    return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1>Student Details</h1>
        <p>Student ID: {id}</p>
    </main>
    );
}
