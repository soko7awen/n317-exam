"use client"
import "../../components/StudentCard";
import StudentCard from "../../components/StudentCard";

const studentData = [
  { name: "Alice", major: "CS", year: "Sophomore" },
  { name: "Brian", major: "Bio", year: "Freshman" },
  { name: "Cynthia", major: "Psych", year: "Senior" }
];

export default function StudentsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1>These are the students:</h1>
      <div className="flex justify-evenly">
        {studentData.map(student => <StudentCard name={student.name} major={student.major} year={student.year}></StudentCard>)}
      </div>
    </main>
  );
}
