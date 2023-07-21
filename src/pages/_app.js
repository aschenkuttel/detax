import Head from 'next/head'
import { createStyles, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon, mantle } from 'wagmi/chains'
import Header from '@/components/Header'


const useStyles = createStyles((theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw'
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
    }
}))


function Wrapper({ children }) {
    const { classes } = useStyles()

    return (
        <div className={classes.app}>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
        </div>
    )
}

const chains = [polygon, mainnet, mantle]
const projectId = '31d48bb15ffbbdcebebc9aa3420c6d00'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                    primaryColor: 'grape'
                }}
            >
                <WagmiConfig config={wagmiConfig}>
                    <Notifications position='top-right' />
                    <Wrapper>
                        <Component {...pageProps} />
                    </Wrapper>
                </WagmiConfig>
            </MantineProvider>

            <Web3Modal projectId={projectId}
                       ethereumClient={ethereumClient}
                       themeVariables={{
                           '--w3m-accent-color': '#f8f0fc',
                           '--w3m-background-color': '#f8f0fc',
                           '--w3m-accent-fill-color': '#be4bdb'
                       }} />
        </>
    )
}