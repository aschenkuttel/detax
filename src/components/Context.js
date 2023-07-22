import { MetaMaskSDK } from '@metamask/sdk'
import { createContext, useRef, useEffect, useState } from 'react'
import { notifications } from '@mantine/notifications'


const Context = createContext()

function ContextProvider({ children }) {
    const [address, setAddress] = useState(null)
    const [reports, setReports] = useState([])

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

        if (typeof window !== 'undefined') {
            const rawReports = localStorage.getItem('reports')

            if (rawReports) {
                setReports(JSON.parse(rawReports))
            }
        }
    }, [])

    const addReport = (report) => {
        const newReports = [...reports, report]
        setReports(newReports)
        localStorage.setItem('reports', JSON.stringify(newReports))
    }

    const removeReport = (report) => {
        const newReports = reports.filter((r) => r !== report)
        setReports(newReports)
        localStorage.setItem('reports', JSON.stringify(newReports))
    }

    return (
        <Context.Provider
            value={{
                address: address,
                connect: connect,
                reports: reports,
                addReport: addReport,
                removeReport: removeReport
            }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }