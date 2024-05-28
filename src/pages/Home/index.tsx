import { AddressContext } from '@/contexts/AddressContext'
import { useContext } from 'react'

export function Home() {
  const { earthAddress, marsAddress } = useContext(AddressContext)

  console.log('Planeta Marte', marsAddress)
  console.log('Planeta Terra', earthAddress)

  return (
    <h2 className=" text-center text-3xl font-bold tracking-tight text-zinc-50">
      Olá 👋, abaixo estão seus endereços cadastrados
    </h2>
  )
}
