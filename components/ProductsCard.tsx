import React from 'react'
import Image from 'next/image'

const ProductsCard = () => {
  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white text-gray-700
    w-72 min-h-[10rem]
    shadow-lg rounded-md overflow-hidden'>
      <Image
      className='w-full h-full object-cover'
      layout='fixed'
      width={200}
      height={200}
      src='/product.jpg'
      />
      <div className='p-5 flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
          <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>official store</span>

        </div>
        <h2 className='font-semibold text-2xl overflow-hidden whitespace-nowrap' title>Best Heaadphone</h2>
        <div>
          <span className='text-xl font-bold'>400.00 tk</span>
          <div>
            <span className='text-sm line-through opacity-50'>
              500.00 tk
            </span>
            <span className='bg-green-400 px-1.5 rounded-md text-xs text-white ml-3'>
              save 20%
            </span>
          </div>
        </div>

      </div>
      </div>
      
    </div>
  )
}

export default ProductsCard