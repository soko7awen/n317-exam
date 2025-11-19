import "./globals.css";

export function TopNav() {
    return (
       <header className="flex w-full h-20 p-4 bg-gray-200 justify-end items-center">
        <nav><ul className="flex mr-12 gap-x-7">
            <li><a href="/">Home</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/faculty">Faculty</a></li>
            </ul></nav>
       </header> 
    )
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <TopNav></TopNav>
          {children}
        </div>
      </body>
    </html>
  )
}