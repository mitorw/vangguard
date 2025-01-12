import Link from '@/node_modules/next/link'
import React from 'react'

export default function signupPage() {
  return (
    <div>
    {/* Navbar signup */}
      {/* Navbar */}
      <header className="mb-10">
        <nav>
          <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl">
            <div className="navbar-start">
              <Link href={"/dashboard"} className="navbar-center btn btn-ghost text-xl">
                Barang Second
              </Link>
            </div>

            <div className="navbar-end lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link href={"/admin"}>Admin</Link>
                </li>
              </ul>
              <Link href="/login" className="pl-2">
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

    {/* signup section */}
    <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">Sign Up</h2>
            {/* form email */}
            <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            {/* form password */}
            <div className='mb-4'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                />
            </div>
            {/* button sign up */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
              Sign Up
            </button>
            {/* link masuk akun jika sudah ada akun. */}
            <p className="mt-4 text-sm text-gray-600 text-center">
            Sudah punya akun ?  <Link href="/login" className = "text-blue-500 hover:underline">Sign In</Link>
            </p>
        </div>
    </div>
  </div>
  )
}
