import { useContext } from 'react'

import { AddressContext } from '@/contexts/AddressContext'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Pen, Trash } from 'lucide-react'

import { EmptyState } from '@/pages/components/EmptyState'
import { EditAddress } from '@/pages/components/EditAddress'

export function ListMars() {
  const { marsAddress, deleteMarsAddress } = useContext(AddressContext)

  if (marsAddress.length === 0) {
    return <EmptyState planetName="MARTE" />
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-slate-900">
          <TableHead className="w-80">Lote</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {marsAddress.map((address) => (
          <TableRow key={address.id} className="hover:bg-slate-900">
            <TableCell className="text-slate-50 w-80">{address.lote}</TableCell>

            <TableCell className="text-center">
              <EditAddress dataMars={address}>
                <Button size="icon" className="bg-inherit hover:bg-slate-950">
                  <Pen className="h-4 w-4" />
                </Button>
              </EditAddress>
              <Button
                size="icon"
                className="bg-inherit hover:bg-slate-950"
                onClick={() => deleteMarsAddress(address.id as string)}
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
