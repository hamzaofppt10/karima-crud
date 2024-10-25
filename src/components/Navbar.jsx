import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white ">Home</Link></li>
                    <li><Link to="/about" className="text-white ">About</Link></li>
                    <li><Link to="/Contact" className="text-white ">Contact</Link></li>
                </ul>
                <button className="btb btn-outline-primary btn-mx me-2">Add User</button>
            </div>
        </nav>
        </>
  )
}

export default Navbar