import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"
import Image from '@/node_modules/next/image';


export default function dashboardPage() {
  return (
    <div>
        <header>
        <div className="relative h-72 w-full">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src={"/images/banner.png"}
            alt={"Banner Barang Second"}
            width={1851}
            height={222}
          />
        </div>
      </header>
      <div className='flex items-center justify-center w-auto h-auto p-10 bg-gray-100'>
        <div className='bg-white p-4 rounded-md shadow-lg w-full '>
            <h2 className='text-black text-center'>
                content
            </h2>
        </div>
      </div>
    </div>
  )
}
