import { useState } from 'react'
import { createStyles, rem, Button, Input, Select } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconPlus, IconX } from '@tabler/icons-react'
import { isAddress } from 'viem'


const useStyles = createStyles((theme) => ({
    outer: {
        flex: 1,
        display: 'flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
        borderRadius: theme.radius.sm,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    addressColumn: {
        width: rem(320),
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`
    },
    networkColumn: {
        width: rem(320),
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`
    },
    tokenColumn: {
        flex: 1
    },
    columnHeader: {
        display: 'flex',
        gap: theme.spacing.md,
        justifyContent: 'space-between',
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`
    },
    columnContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
        padding: theme.spacing.md,
        overflowY: 'auto'
    },
    address: {
        width: '100%',
        overflow: 'hidden',
        marginRight: theme.spacing.md,
        textOverflow: 'ellipsis'
    },
    iconHover: {
        '&:hover': {
            scale: '1.2',
        }
    }
}))

export default function Create_old() {
    const { classes } = useStyles()
    const [address, setAddress] = useState('')
    const [network, setNetwork] = useState('')
    const [token, setToken] = useState('')
    const [addresses, setAddresses] = useState([])
    const [networks, setNetworks] = useState([])
    const [tokens, setTokens] = useState([])

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (address === '') return

            if (!isAddress(address)) {
                notifications.show({
                    title: 'Invalid Address',
                    message: 'Please enter a valid address',
                    color: 'red'
                })
                return
            }

            setAddresses([...addresses, address])
            setAddress('')
        }
    }

    return (
        <div className={classes.outer}>
            <div className={classes.addressColumn}>
                <div className={classes.columnHeader}>
                    Addresses
                </div>

                <div className={classes.columnContent}>
                    <Input
                        icon={<IconPlus size={18} />}
                        placeholder='0x0000000000000000000000000000000000000000'
                        width='100%'
                        variant='filled'
                        onKeyDown={onKeyDown}
                        value={address}
                        onChange={(event) => setAddress(event.currentTarget.value)}
                    />

                    {addresses.map((address) => (
                        <Button variant='subtle' key={address}>
                            <p className={classes.address}>
                                {address}
                            </p>

                            <IconX size={18} className={classes.iconHover} onClick={() => {
                                setAddresses(addresses.filter((a) => a !== address))
                            }} />
                        </Button>
                    ))}
                </div>
            </div>

            <div className={classes.networkColumn}>
                <div className={classes.columnHeader}>
                    Networks
                </div>

                <div className={classes.columnContent}>
                    <Select
                        placeholder='Select Network'
                        variant='filled'
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' }
                        ]}
                    />
                </div>
            </div>

            <div className={classes.tokenColumn}>
                <div className={classes.columnHeader}>
                    Tokens
                </div>

                <div className={classes.columnContent}>
                    <Select
                        placeholder='Select Token'
                        variant='filled'
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}