import { ReactNode, createContext, useState, useEffect } from 'react'

export interface EarthAddressInterface {
  id: string
  street: string
  city: string
  homeNumber: string
  uf: string
  postalCode: string
  country: string
}

export interface MarsAddressInterface {
  id: string
  lote: string
}

interface AddressContextType {
  earthAddress: EarthAddressInterface[]
  marsAddress: MarsAddressInterface[]
  updateStateEarthAddress: (data: EarthAddressInterface) => void
  deleteEarthAddress: (id: string) => void
  updateStateMarsAddress: (data: MarsAddressInterface) => void
  deleteMarsAddress: (id: string) => void
}

interface AddressContextProviderProps {
  children: ReactNode
}

function getStorageEarthAddress() {
  const storedStateAsJSON = localStorage.getItem(
    '@planet-delivery:earth-address-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  } else {
    return []
  }
}

function getStorageMarsAddress() {
  const storedStateAsJSON = localStorage.getItem(
    '@planet-delivery:mars-address-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  } else {
    return []
  }
}

export const AddressContext = createContext({} as AddressContextType)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [earthAddress, setEarthAddress] = useState<EarthAddressInterface[]>(
    () => getStorageEarthAddress(),
  )
  const [marsAddress, setMarsAddress] = useState<MarsAddressInterface[]>(() =>
    getStorageMarsAddress(),
  )

  useEffect(() => {
    const stateEarthJSON = JSON.stringify(earthAddress)
    const stateMarsJSON = JSON.stringify(marsAddress)

    localStorage.setItem(
      '@planet-delivery:earth-address-state-1.0.0',
      stateEarthJSON,
    )

    localStorage.setItem(
      '@planet-delivery:mars-address-state-1.0.0',
      stateMarsJSON,
    )
  }, [earthAddress, marsAddress])

  function updateStateEarthAddress(data: EarthAddressInterface) {
    const existEarthAddress = earthAddress.some(
      (address) => data.id !== undefined && address.id === data.id,
    )

    if (existEarthAddress) {
      const newEarthAddress = earthAddress.filter((address) => {
        return address.id !== data.id
      })

      setEarthAddress([...newEarthAddress, data])
    } else {
      setEarthAddress((prev) => [...prev, data])
    }
  }

  function deleteEarthAddress(id: string) {
    const newEarthAddress = earthAddress.filter((address) => {
      return address.id !== id
    })

    setEarthAddress(newEarthAddress)
  }

  function updateStateMarsAddress(data: MarsAddressInterface) {
    const existMarsAddress = marsAddress.some(
      (address) => data.id !== undefined && address.id === data.id,
    )

    if (existMarsAddress) {
      const newMarsAddress = marsAddress.filter((address) => {
        return address.id !== data.id
      })
      setMarsAddress([...newMarsAddress, data])
    } else {
      setMarsAddress((prev) => [...prev, data])
    }
  }

  function deleteMarsAddress(id: string) {
    const newMarsAddress = marsAddress.filter((address) => {
      return address.id !== id
    })

    setMarsAddress(newMarsAddress)
  }

  return (
    <AddressContext.Provider
      value={{
        earthAddress,
        marsAddress,
        updateStateEarthAddress,
        deleteEarthAddress,
        updateStateMarsAddress,
        deleteMarsAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
