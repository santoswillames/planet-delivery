import { ReactNode, createContext, useState } from 'react'

interface TabsContextProviderProps {
  children: ReactNode
}

type Tabs = 'earth' | 'mars'

interface TabsContextType {
  tabs: Tabs
  onChangeTabs: (state: Tabs) => void
}

export const TabsContext = createContext({} as TabsContextType)

export function TabsContextProvider({ children }: TabsContextProviderProps) {
  const [tabs, setTabs] = useState<Tabs>('earth')

  function onChangeTabs(state: Tabs) {
    setTabs(state)
  }

  return (
    <TabsContext.Provider
      value={{
        tabs,
        onChangeTabs,
      }}
    >
      {children}
    </TabsContext.Provider>
  )
}
