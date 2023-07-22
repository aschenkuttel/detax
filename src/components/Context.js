import { MetaMaskSDK } from '@metamask/sdk'
import { createContext, useRef, useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'


const Context = createContext()

function ContextProvider({ children }) {
    const [address, setAddress] = useState(null)

    const connect = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            setAddress(window.ethereum.selectedAddress)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    useEffect(() => {
        if (!window.ethereum) return

        window.ethereum.on('accountsChanged', (accounts) => {
            setAddress(accounts[0])
        })

        window.ethereum.on('chainChanged', (_) => {
            window.location.reload()
        })
    }, [])

    return (
        <Context.Provider
            value={{
                address: address,
                connect: connect
            }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }