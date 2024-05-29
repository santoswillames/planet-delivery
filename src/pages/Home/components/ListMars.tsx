import { useContext } from 'react'

import { AddressContext } from '@/contexts/AddressContext'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { Pen, Trash } from 'lucide-react'

import { EmptyState } from '@/pages/components/EmptyState'

export function ListMars() {
  const { marsAddress, deleteMarsAddress } = useContext(AddressContext)

  if (marsAddress.length === 0) {
    return <EmptyState planetName="MARTE" />
  }

  return (
    <Table>
      <TableBody>
        {marsAddress.map((address) => (
          <TableRow key={address.id} className="hover:bg-slate-900">
            <TableCell className="text-zinc-50 ">Lote</TableCell>
            <TableCell className="text-zinc-50">{address.lote}</TableCell>

            <TableCell className="text-right">
              <Button size="icon" className="bg-in">
                <Pen className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button
                size="icon"
                className="bg-in"
                onClick={() => deleteMarsAddress(address.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
