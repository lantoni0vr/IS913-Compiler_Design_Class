"use client"
import { CartCounter } from "@/shopping-cart/components/CartCounter"
// import { Metadata } from "next"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: 'CounterPage',
//   description: 'Un contador muy  pero muy completo',
//   keywords: 'Laptop, PC, DELL'
// }

const CounterPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter />
    </div>
  )
}

export default CounterPage