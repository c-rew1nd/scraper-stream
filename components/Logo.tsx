import React from 'react'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import { SquareDashedMousePointer } from 'lucide-react';

function Logo({
    fontSize = "text-2xl",
    iconSize = 20, 
} : {
    fontSize?: string;
    iconSize?: number
}) {
  return (
    <Link href="/" className={cn(
        "text-2xl font-extralight flex items-center gap-2", fontSize
    )}>
      <div className='rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 p-2'>
        <SquareDashedMousePointer size={iconSize}
        className='stroke-white' />
      </div>
      <div>
        <span className='bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent'>Scraper</span>
        <span className='bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent'>Stream</span>
      </div>
    </Link>
  )
}

export default Logo