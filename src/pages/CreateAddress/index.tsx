import { Link } from 'react-router-dom'

import { MoveLeft } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { EarthForm } from './components/EarthForm'
import { MarsForm } from './components/MarsForm'

export function CreateAddress() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <Link to="/">
          <MoveLeft size={24} className="text-zinc-50" />
        </Link>
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-50">
          Cadastre seu endereço
        </h2>
      </div>
      <Tabs defaultValue="earth" className="md:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="earth">Planeta Terra</TabsTrigger>
          <TabsTrigger value="mars">Planeta Marte</TabsTrigger>
        </TabsList>
        <TabsContent value="earth">
          <EarthForm />
        </TabsContent>
        <TabsContent value="mars">
          <MarsForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
