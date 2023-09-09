import React from 'react'
import { Button } from '../ui/button'

type ButtonProps = {
    title:string;
    variant: "primary" | "link" | "ghost" | "secondary" | "outline" | "destructive" | "default"
} 

export default function ExtraLargeButton({  title, variant}: ButtonProps) {
  return (
    <Button variant={variant} size={'lg'}>{title}</Button>
  )
}
