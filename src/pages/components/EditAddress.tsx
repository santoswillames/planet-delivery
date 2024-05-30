import { ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { EarthForm } from '../CreateAddress/components/EarthForm'
import { MarsForm } from '../CreateAddress/components/MarsForm'
import {
  EarthAddressInterface,
  MarsAddressInterface,
} from '@/contexts/AddressContext'

interface EditAddressProps {
  children: ReactNode
  dataEarth?: EarthAddressInterface
  dataMars?: MarsAddressInterface
}

export function EditAddress({
  children,
  dataEarth,
  dataMars,
}: EditAddressProps) {
  const [isOpen, setIsOpen] = useState<undefined | boolean>(undefined)

  function onChangeDialog(state: boolean) {
    setIsOpen(state)
  }

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar endereço</DialogTitle>
          <DialogDescription>
            Faça as mudanças necessárias depois clique em salvar.
          </DialogDescription>
        </DialogHeader>
        {dataEarth && (
          <EarthForm address={dataEarth} onChangeDialog={onChangeDialog} />
        )}
        {dataMars && (
          <MarsForm address={dataMars} onChangeDialog={onChangeDialog} />
        )}
      </DialogContent>
    </Dialog>
  )
}
