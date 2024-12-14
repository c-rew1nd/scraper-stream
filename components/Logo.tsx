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
      <div className='rounded-xl bg-gradient-to-r from-blue-500 to-blue-800 p-2'>
        <SquareDashedMousePointer size={iconSize}
        className='stroke-white' />
      </div>
      <div>
        <span className='bg-gradient-to-r from-blue-700 to-blue-950 bg-clip-text text-transparent'>Scraper</span>
        <span className='text-stone-700 dark:text-stone-300'>Stream</span>
      </div>
    </Link>
  )
}

export default Logo