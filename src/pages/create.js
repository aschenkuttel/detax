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
const supportedNetworks = [
    {
        name: 'Ethereum',
        chainId: 1,
        checked: false
    },
    {
        name: 'Binance Smart Chain',
        chainId: 56,
        checked: false
    }
]

const CheckboxWrapper = ({ key, network }) => {
    const { classes } = useStyles()
    const [checked, setChecked] = useState(false)

    return (
        <div key={key} className={classes.selectableNetwork}
             onClick={() => {
                 console.log('clicked')
                 setChecked(!checked)
             }}>
            <Checkbox
                onChange={() => {}}
                checked={checked}
                className={classes.unselectable}
                label={network.name}
            />
        </div>
    )
}


export default function Create() {
    const { classes } = useStyles()
    const [values, handlers] = useListState(supportedNetworks)
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
                        icon={<IconPlus size={18} />}
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
                            {values.map((network) => (
                                <CheckboxWrapper key={network.chainId}
                                                 network={network} />
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
            <Paper p='sm'>
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