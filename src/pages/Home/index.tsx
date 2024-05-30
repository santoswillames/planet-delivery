import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Plus } from 'lucide-react'

import { TabsContext } from '@/contexts/TabsContext'

import { ListEarth } from './components/ListEarth'
import { ListMars } from './components/ListMars'

export function Home() {
  const { tabs, onChangeTabs } = useContext(TabsContext)

  return (
    <div>
      <h2 className=" text-center text-3xl font-bold tracking-tight text-slate-50">
        Olá 👋, abaixo estão seus endereços cadastrados
      </h2>
      <Tabs defaultValue={tabs} className="mt-8 relative">
        <TabsList className="flex justify-between h-9 items-center text-muted-foreground w-full rounded-none border-b bg-transparent p-0 border-slate-700">
          <div>
            <TabsTrigger
              value="earth"
              className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-inherit relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
              onClick={() => onChangeTabs('earth')}
            >
              Planeta Terra
            </TabsTrigger>
            <TabsTrigger
              value="mars"
              className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-inherit relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
              onClick={() => onChangeTabs('mars')}
            >
              Planeta Marte
            </TabsTrigger>
          </div>
          <Link to="/create-address">
            <Button
              variant="ghost"
              className="flex gap-2 border-b-2 border-b-transparent rounded-none hover:bg-inherit hover:text-foreground hover:border-b-foreground"
            >
              <Plus size={16} />
              Adicionar
            </Button>
          </Link>
        </TabsList>
        <TabsContent value="earth">
          <ScrollArea className="h-[400px] w-full p-4">
            <ListEarth />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="mars">
          <ScrollArea className="h-[400px] w-full p-4">
            <ListMars />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
