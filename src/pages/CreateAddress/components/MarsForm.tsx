import { useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { AddressContext } from '@/contexts/AddressContext'

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

const MarsFormSchema = z.object({
  lote: z
    .string()
    .trim()
    .min(1, {
      message: 'O Lote precisa ter no mínimo um dígito',
    })
    .max(4, { message: 'O Lote precisa ter no máximo 4 dígitos' })
    .toUpperCase(),
})

export function MarsForm() {
  const { updateStateMarsAddress } = useContext(AddressContext)

  const form = useForm<z.infer<typeof MarsFormSchema>>({
    resolver: zodResolver(MarsFormSchema),
    defaultValues: {
      lote: '',
    },
  })

  function handleMarsAddressSubmit(data: z.infer<typeof MarsFormSchema>) {
    updateStateMarsAddress(data)
    toast({
      title: 'Sucesso!',
      description: 'Seu endereço do planeta marte foi adicionado!',
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
