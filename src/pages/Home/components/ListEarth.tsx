import { useContext } from 'react'

import { AddressContext } from '@/contexts/AddressContext'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import { Pen, Trash } from 'lucide-react'
import { EmptyState } from '@/pages/components/EmptyState'

export function ListEarth() {
  const { earthAddress, deleteEarthAddress } = useContext(AddressContext)

  if (earthAddress.length === 0) {
    return <EmptyState planetName="TERRA" />
  }

  return (
    <Table>
      <TableBody>
        {earthAddress.map((address) => (
          <TableRow
            key={address.id}
            className="flex items-center hover:bg-slate-900"
          >
            <TableCell className="text-zinc-50 flex-1">
              {address.street + ', ' + address.homeNumber}
            </TableCell>
            <TableCell className="text-zinc-50">{address.uf}</TableCell>
            <TableCell className="text-zinc-50">{address.postalCode}</TableCell>
            <TableCell className="text-zinc-50">{address.country}</TableCell>

            <TableCell className="text-right">
              <Button size="icon" className="bg-in">
                <Pen className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button
                size="icon"
                className="bg-in"
                onClick={() => deleteEarthAddress(address.id)}
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
