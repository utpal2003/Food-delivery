import React, { use, useState } from 'react';

const Login = ({ setshowlogin }) => {

  const [showsignup, setshowsignup] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={() => setshowlogin(false)}></div>


      {showsignup ?

        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Signup</h2>

          <form className="space-y-4">
            <div>


              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>


              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?<span className="text-green-500 hover:underline" onClick={() => setshowsignup(false)}>Login</span>
          </p>

          {/* Close button */}
          <button
            onClick={() => setshowlogin(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          >
            X
          </button>
        </div > :

        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Login</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500">
            Don't have an account? <span className="text-green-500 hover:underline" onClick={() => setshowsignup(true)}>Register</span>
          </p>

          {/* Close button */}
          <button
            onClick={() => setshowlogin(false)}
            className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-xl"
          >
            X
          </button>
        </div >}



    </div >
  );
};

export default Login;
