import { Card } from '@/components/ui/card'
import React from 'react'

type childrenprops = {
    children: React.ReactNode
}

export default function Cardcustom({children}:childrenprops) {
  return (
    <Card className='w-full shadow-lg p-2'>
        {children}
    </Card>
  )
}
