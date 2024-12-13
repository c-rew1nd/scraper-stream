"use client"

import { CoinsIcon, HomeIcon, Icon, Layers2Icon, ShieldCheckIcon } from 'lucide-react'
import React from 'react'
 const route = [
  {
    href: "",
    label: "home",
    icon: HomeIcon
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon
  },
 ]
function DesktopSidebar() {
  return (
    <div className='hidden relative md:block min-w[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground boreder-r-2 border-separate'>
      <div className='flex items-center justify-center gap-2 border-b-[1px] border-separate p-4'>
        <logo />
      </div>
      </div>
  )
}

export default DesktopSidebar