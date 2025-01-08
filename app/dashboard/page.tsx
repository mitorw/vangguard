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
      
    </div>
  )
}
