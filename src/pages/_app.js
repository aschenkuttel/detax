import Head from 'next/head'
import { createStyles, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { init } from '@airstack/airstack-react'
import Header from '@/components/Header'
import { ContextProvider } from '@/components/Context'


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

export default function App({ Component, pageProps }) {
    // (: TODO server component
    init('cf158c5c016a4372956cff76d697071a')

    return (
        <>
            <Head>
                <title>DeTax</title>
                <link rel='icon' href='/favicon.png' sizes='any' />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>

            <ContextProvider>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme: 'light',
                        primaryColor: 'grape'
                    }}
                >
                    <Notifications position='top-right' />
                    <Wrapper>
                        <Component {...pageProps} />
                    </Wrapper>
                </MantineProvider>
            </ContextProvider>
        </>
    )
}