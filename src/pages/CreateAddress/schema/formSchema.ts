import { z } from 'zod'

export const EarthFormSchema = z.object({
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
    .max(4, {
      message: 'Digite conforme o exemplo (SP)',
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

export const MarsFormSchema = z.object({
  lote: z
    .string()
    .trim()
    .min(1, {
      message: 'O Lote precisa ter no mínimo um dígito',
    })
    .max(4, { message: 'O Lote precisa ter no máximo 4 dígitos' })
    .toUpperCase(),
})
