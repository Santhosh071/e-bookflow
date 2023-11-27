import React from 'react'
import BannerCard from '../hom/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-7xl font-bold loading-snug text-black'>Buy and Sell Your E-Books<span className='text-blue-700'> for the best prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ut iusto harum alias eligendi pariatur similique odio tenetur in commodi asperiores, iste id architecto voluptatem tempora veritatis unde laborum illum.</p>
                <div>
                    <input type="search" none="search" id="search" placeholder="search a book" className='py-2 px-2 round-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duratin-200'>Search</button>
                </div>
            </div>

            <div>
                <BannerCard></BannerCard>

            </div>

        </div>
        
        
     </div>
  )
}

export default Banner
