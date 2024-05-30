import { useContext } from 'react'

import { AddressContext } from '@/contexts/AddressContext'

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

const EarthFormSchema = z.object({
  street: z
    .string()
    .trim()
    .min(1, {
      message: 'Este campo é obrigatório',
    })
    .max(90, {
      message: 'Número de caracteres exedido! Maxímo 90 caracteres',
    }),
  homeNumber: z
    .string()
    .trim()
    .min(1, {
      message: 'Este campo é obrigatório',
    })
    .max(11, {
      message: 'Número de caracteres exedido! Maxímo 11 caracteres',
    }),
  uf: z
    .string()
    .trim()
    .min(1, {
      message: 'Este campo é obrigatório',
    })
    .max(2, {
      message: 'Por favor digite conforme o exemplo (SP)',
    }),
  postalCode: z
    .string()
    .trim()
    .min(1, {
      message: 'Este campo é obrigatório',
    })
    .max(16, {
      message: 'Número de caracteres exedido! Maxímo 16 caracteres',
    }),
  country: z
    .string()
    .trim()
    .min(1, {
      message: 'Este campo é obrigatório',
    })
    .max(30, {
      message: 'Número de caracteres exedido! Maxímo 30 caracteres',
    }),
})

export function EarthForm() {
  const { updateStateEarthAddress } = useContext(AddressContext)

  const form = useForm<z.infer<typeof EarthFormSchema>>({
    resolver: zodResolver(EarthFormSchema),
    defaultValues: {
      street: '',
      homeNumber: '',
      country: '',
      postalCode: '',
      uf: '',
    },
  })

  function handleEarthAddressSubmit(data: z.infer<typeof EarthFormSchema>) {
    updateStateEarthAddress(data)
    toast({
      title: 'Sucesso!',
      description: 'Seu endereço do planeta marte foi adicionado!',
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
        <div className="flex items-center justify-between flex-wrap gap-2">
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
