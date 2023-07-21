import { useState } from 'react'
import { createStyles, Container, Button, Text, Title, Paper, Input, Group } from '@mantine/core'
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
    disabled: {
        '&:disabled': {
            backgroundColor: 'transparent'
        }
    }
}))

export default function Create() {
    const { classes } = useStyles()
    const [address, setAddress] = useState('')
    const [step, setStep] = useState(0)

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
                return false
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