import { useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

import {
  AddressContext,
  EarthAddressInterface,
} from '@/contexts/AddressContext'
import { TabsContext } from '@/contexts/TabsContext'

import { EarthFormSchema } from '../schema/formSchema'
import { Link } from 'react-router-dom'

interface EarthFormProps {
  address?: EarthAddressInterface
  onChangeDialog?: (state: boolean) => void
}

export function EarthForm({ address, onChangeDialog }: EarthFormProps) {
  const { updateStateEarthAddress } = useContext(AddressContext)
  const { onChangeTabs } = useContext(TabsContext)

  const form = useForm<z.infer<typeof EarthFormSchema>>({
    resolver: zodResolver(EarthFormSchema),
    defaultValues: address || {
      street: '',
      city: '',
      homeNumber: '',
      country: '',
      postalCode: '',
      uf: '',
    },
  })

  function handleEarthAddressSubmit(data: z.infer<typeof EarthFormSchema>) {
    if (address) {
      const newData = {
        id: address.id,
        ...data,
      }

      updateStateEarthAddress(newData)
      onChangeDialog && onChangeDialog(false)
    } else {
      const id = String(new Date().getTime())
      const newData = {
        id,
        ...data,
      }
      updateStateEarthAddress(newData)
    }
    toast({
      title: 'Sucesso!',
      description: 'Seu endereço do planeta terra foi adicionado!',
      action: (
        <Link to="/" onClick={() => onChangeTabs('earth')}>
          <ToastAction altText="Ver lista de endereço">Ver</ToastAction>
        </Link>
      ),
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        className="mt-8 space-y-6"
        onSubmit={form.handleSubmit(handleEarthAddressSubmit)}
      >
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rua / Avenida</FormLabel>
              <FormControl>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  placeholder="Digite o nome da Rua ou Avenida"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  placeholder="Digite o nome da Cidade"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="homeNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  placeholder="Número da Rua"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:flex items-center justify-between flex-wrap gap-2">
          <FormField
            control={form.control}
            name="uf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UF</FormLabel>
                <FormControl>
                  <Input
                    className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                    placeholder="Unidade Federal (ex.: SP)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CEP</FormLabel>
                <FormControl>
                  <Input
                    className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                    placeholder="Digite o CEP"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>País</FormLabel>
              <FormControl>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-slate-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  placeholder="Digite o nome do País"
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
