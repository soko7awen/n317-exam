import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1>Welcome to the Campus Directory</h1>
      <p>Current Theme: Automatically matches your system/browser preference</p>
    </main>
  );
}
