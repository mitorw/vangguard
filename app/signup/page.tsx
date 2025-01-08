import React from 'react'

export default function signupPage() {
  return (
    <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">Sign Up</h2>
            {/* form email */}
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
            {/* form password */}
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
            {/* button sign up */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 mt-2"
            >
              Sign Up
            </button>
        </div>
    </div>
  )
}
