import React from 'react'
import Link from 'next/link'
const Details = () => {
  return (
    <section className=" py-20 px-6 text-center">
  <h1 className="text-5xl font-bold mb-4">Full-Stack MERN Developer</h1>
  <p className="text-xl mb-6 max-w-2xl mx-auto">
    I build scalable, real-time web apps using React, Next.js, Express, MongoDB, and Tailwind CSS.
  </p>
  <Link
    href="project"
    className="inline-block bg-light font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
  >
    View porjects
  </Link>
</section>

  )
}

export default Details
