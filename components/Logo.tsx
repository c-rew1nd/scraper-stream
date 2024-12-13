import React from 'react'
import Link from 'next/link'
import {cn} from '@/lib/utils'

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
    )}></Link>
  )
}

export default Logo