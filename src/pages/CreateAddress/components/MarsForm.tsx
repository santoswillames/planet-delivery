import { useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { AddressContext, MarsAddressInterface } from '@/contexts/AddressContext'

import { toast } from '@/components/ui/use-toast'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ToastAction } from '@/components/ui/toast'

import { MarsFormSchema } from '../schema/formSchema'
import { Link } from 'react-router-dom'
import { TabsContext } from '@/contexts/TabsContext'

interface MarsFormProps {
  address?: MarsAddressInterface
  onChangeDialog?: (state: boolean) => void
}

export function MarsForm({ address, onChangeDialog }: MarsFormProps) {
  const { updateStateMarsAddress } = useContext(AddressContext)
  const { onChangeTabs } = useContext(TabsContext)

  const form = useForm<z.infer<typeof MarsFormSchema>>({
    resolver: zodResolver(MarsFormSchema),
    defaultValues: address || {
      lote: '',
    },
  })

  function handleMarsAddressSubmit(data: z.infer<typeof MarsFormSchema>) {
    if (address) {
      const newData = {
        id: address.id,
        ...data,
      }
      updateStateMarsAddress(newData)
      onChangeDialog && onChangeDialog(false)
    } else {
      const id = String(new Date().getTime())
      const newData = {
        id,
        ...data,
      }
      updateStateMarsAddress(newData)
    }
    toast({
      title: 'Sucesso!',
      description: 'Seu endereço do planeta marte foi adicionado!',
      action: (
        <Link to="/" onClick={() => onChangeTabs('mars')}>
          <ToastAction altText="Ver lista de endereço">Ver</ToastAction>
        </Link>
      ),
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleMarsAddressSubmit)}
        className="mt-8 space-y-6"
      >
        <FormField
          control={form.control}
          name="lote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lote</FormLabel>
              <FormControl>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  placeholder="Número do lote"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-600 py-2 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          type="submit"
        >
          Salvar
        </Button>
      </form>
    </Form>
  )
}
