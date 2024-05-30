import { useContext } from 'react'

import { AddressContext } from '@/contexts/AddressContext'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
      <TableHeader>
        <TableRow className="hover:bg-slate-900">
          <TableHead className="w-80">Rua, número</TableHead>
          <TableHead>UF</TableHead>
          <TableHead>CEP</TableHead>
          <TableHead>País</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {earthAddress.map((address) => (
          <TableRow key={address.id} className="hover:bg-slate-900">
            <TableCell className="text-slate-50 w-80">
              {address.street + ', ' + address.homeNumber}
            </TableCell>
            <TableCell className="text-slate-50">{address.uf}</TableCell>
            <TableCell className="text-slate-50">
              {address.postalCode}
            </TableCell>
            <TableCell className="text-slate-50">{address.country}</TableCell>
            <TableCell className="text-center">
              <Button size="icon" className="bg-inherit hover:bg-slate-950">
                <Pen className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                className="bg-inherit hover:bg-slate-950"
                onClick={() => deleteEarthAddress(address.id as string)}
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
