import { ReactNode, createContext, useState, useEffect } from 'react'

interface EarthAddress {
  id: string
  street: string
  homeNumber: string
  uf: string
  postalCode: string
  country: string
}

interface MarsAddress {
  id: string
  lote: string
}

interface AddressContextType {
  earthAddress: EarthAddress[]
  marsAddress: MarsAddress[]
  updateStateEarthAddress: (data: EarthAddress) => void
  deleteEarthAddress: (id: string) => void
  updateStateMarsAddress: (data: MarsAddress) => void
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
  const [earthAddress, setEarthAddress] = useState<EarthAddress[]>(() =>
    getStorageEarthAddress(),
  )
  const [marsAddress, setMarsAddress] = useState<MarsAddress[]>(() =>
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

  function updateStateEarthAddress(data: EarthAddress) {
    const existEarthAddress = earthAddress.some(
      (address) => address.id === data.id,
    )

    if (existEarthAddress) {
      const newEarthAddress = earthAddress.map((address) => {
        if (address.id === data.id) {
          return data
        } else {
          return address
        }
      })

      setEarthAddress(newEarthAddress)
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

  function updateStateMarsAddress(data: MarsAddress) {
    const existMarsAddress = marsAddress.some(
      (address) => address.id === data.id,
    )

    if (existMarsAddress) {
      const newMarsAddress = marsAddress.map((address) => {
        if (address.id === data.id) {
          return data
        } else {
          return address
        }
      })

      setMarsAddress(newMarsAddress)
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
