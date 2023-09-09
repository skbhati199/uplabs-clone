import { cn } from '@/lib/utils'
import React from 'react'

export default function Applogo({
  className = "text-2xl",
  subClassName = "text-3xl",
}: {
  className?: string;
  subClassName?: string;
}) {
  return (
    <h3
      className={cn(
        `text-3xl text-secondary-foreground font-bold self-center text-center`,
        className
      )}
    >
      Up
      <span
        className={cn(
          `text-gradient-green font-extrabold text-4xl`,
          subClassName
        )}
      >
        Labs
      </span>
    </h3>
  )
}
