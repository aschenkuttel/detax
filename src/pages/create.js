import { useState } from 'react'
import {
    createStyles,
    Container,
    Button,
    Text,
    Title,
    Paper,
    Input,
    Group,
    Checkbox,
    ScrollArea,
    rem
} from '@mantine/core'
import { useListState } from '@mantine/hooks'
import {
    IconPlus,
    IconSquareRoundedChevronLeftFilled,
    IconSquareRoundedChevronRightFilled
} from '@tabler/icons-react'
import { isAddress } from 'viem'
import { notifications } from '@mantine/notifications'
import supportedNetworks from '@/data/networks'

const useStyles = createStyles((theme) => ({
    navigation: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    networkWrapper: {
        marginTop: theme.spacing.md
    },
    selectableNetwork: {
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: rem(7),
        borderRadius: theme.radius.md,
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        }
    },
    disabled: {
        '&:disabled': {
            backgroundColor: 'transparent'
        }
    },
    unselectable: {
        userSelect: 'none',
        pointerEvents: 'none'
    }
}))

const CheckboxWrapper = ({ key, network, networks, setNetworks }) => {
    const { classes } = useStyles()
    const [checked, setChecked] = useState(networks.some((item) => item.chainId === network.chainId))

    return (
        <div key={key} className={classes.selectableNetwork}
             onClick={() => {
                 setChecked(!checked)
                 setNetworks((prev) => {
                     if (checked) {
                         return prev.filter((item) => item.chainId !== network.chainId)
                     } else {
                         return [...prev, network]
                     }
                 })
             }}>
            <Checkbox
                onChange={() => {
                }}
                checked={checked}
                className={classes.unselectable}
                label={network.name}
            />
        </div>
    )
}


export default function Create() {
    const { classes } = useStyles()
    const [step, setStep] = useState(1)
    const [address, setAddress] = useState('')
    const [networks, setNetworks] = useState([])

    const stepBack = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const validateStep = () => {
        if (step === 0) {
            if (!isAddress(address)) {
                notifications.show({
                    title: 'Invalid address',
                    message: 'Please enter a valid address',
                    color: 'red',
                    icon: <IconPlus size={18} />,
                    autoClose: 5000
                })
            } else {
                setStep(1)
            }
        } else if (step === 1) {
            if (networks.length === 0) {
                notifications.show({
                    title: 'No networks selected',
                    message: 'Please select at least one network',
                    color: 'red'
                })
            } else {
                setStep(2)
            }
        }
    }

    const getStep = () => {
        if (step === 0) {
            return (
                <>
                    <Title order={2}>
                        The address
                    </Title>
                    <Text c='dimmed'>
                        Enter the address you want to create a report for
                    </Text>

                    <Input
                        mt={12}
                        variant='filled'
                        placeholder='0x0000000000000000000000000000000000000000'
                        width='100%'
                        value={address}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                validateStep()
                            }
                        }}
                        onChange={(event) => setAddress(event.currentTarget.value)}
                    />
                </>
            )
        } else if (step === 1) {
            return (
                <>
                    <Title order={2}>
                        Select your networks
                    </Title>
                    <Text c='dimmed'>
                        Select all networks you want to display
                    </Text>

                    <ScrollArea h={320}>
                        <div className={classes.networkWrapper}>
                            {supportedNetworks.map((network) => (
                                <CheckboxWrapper key={network.chainId}
                                                 network={network}
                                                 networks={networks}
                                                 setNetworks={setNetworks} />
                            ))}
                        </div>
                    </ScrollArea>
                </>
            )
        } else if (step === 2) {

        }
    }

    return (
        <Container size='xs' style={{ width: '100%' }}>
            <Paper p='sm' withBorder={true}>
                {getStep()}
            </Paper>

            <Group mt='sm' position='apart'>
                <Button variant='subtle' onClick={stepBack} className={classes.disabled}
                        disabled={step === 0}>
                    <IconSquareRoundedChevronLeftFilled />
                    <Text ml={6}>
                        Back
                    </Text>
                </Button>

                <Button variant='subtle' onClick={validateStep} className={classes.disabled}>
                    <Text mr={6}>
                        Continue
                    </Text>
                    <IconSquareRoundedChevronRightFilled />
                </Button>
            </Group>
        </Container>
    )
}