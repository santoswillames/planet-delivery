import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CreateAddress() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-50">
          Cadastre seu endereço
        </h2>
      </div>
      <Tabs defaultValue="earth" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="earth">Planeta Terra</TabsTrigger>
          <TabsTrigger value="mars">Planeta Marte</TabsTrigger>
        </TabsList>
        <TabsContent value="earth">
          <form action="#" className="mt-8 space-y-6" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Label className="sr-only" htmlFor="street">
                  Rua
                </Label>
                <Input
                  autoComplete="address-level1"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="street"
                  name="street"
                  placeholder="Rua / Avenida"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="home-number">
                  Número
                </Label>
                <Input
                  autoComplete="address-level2"
                  className="relative block w-full appearance-none rounded-none border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="home-number"
                  name="home-number"
                  placeholder="Número"
                  required
                  type="number"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="uf">
                  UF
                </Label>
                <Input
                  autoComplete="address-level3"
                  className="relative block w-full appearance-none rounded-none border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="uf"
                  name="uf"
                  placeholder="UF (ex.: SP)"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="postal-code">
                  CEP
                </Label>
                <Input
                  autoComplete="postal-code"
                  className="relative block w-full appearance-none rounded-none border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="postal-code"
                  name="postal-code"
                  placeholder="CEP"
                  required
                  type="number"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="country">
                  País
                </Label>
                <Input
                  autoComplete="country-name"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="country"
                  name="country"
                  placeholder="País"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <Button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-600 py-2 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
                type="submit"
              >
                Salvar
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="mars">
          <form action="#" className="mt-8 space-y-6" method="POST">
            <input defaultValue="true" name="remember" type="hidden" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Label className="sr-only" htmlFor="lote">
                  Lote
                </Label>
                <Input
                  className="relative block w-full appearance-none rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-zinc-50 placeholder-zinc-400 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-zinc-500 sm:text-sm"
                  id="lote"
                  name="lote"
                  placeholder="Número do lote"
                  required
                  type="lote"
                />
              </div>
            </div>
            <div>
              <Button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-600 py-2 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
                type="submit"
              >
                Salvar
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>{' '}
    </div>
  )
}
