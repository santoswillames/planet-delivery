import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Login() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-50">
          Entre com sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Não tem uma conta?
          <a className="font-medium text-zinc-500 hover:text-zinc-400" href="#">
            {' '}
            Cadastre-se.
          </a>
        </p>
      </div>
      <form action="#" className="mt-8 space-y-6" method="POST">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <Label className="sr-only" htmlFor="email-address">
              E-mail
            </Label>
            <Input
              autoComplete="email"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
              id="email-address"
              name="email"
              placeholder="Seu e-mail"
              required
              type="email"
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              autoComplete="current-password"
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
              id="password"
              name="password"
              placeholder="Sua senha"
              required
              type="password"
            />
          </div>
        </div>

        <div>
          <Button
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-600 py-2 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </form>
    </div>
  )
}
