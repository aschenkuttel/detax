import { useState } from 'react'
import { createStyles, Container, Button, Text } from '@mantine/core'
import {
    IconSquareRoundedChevronLeftFilled,
    IconSquareRoundedChevronRightFilled
} from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    navigation: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default function Create() {
    const { classes } = useStyles()
    const [step, setStep] = useState(0)

    const getStep = () => {
        if (step === 0) {

        } else if (step === 1) {

        } else if (step === 2) {

        }
    }

    return (
        <Container>

            <div className={classes.navigation}>
                <Button variant='light'>
                    <IconSquareRoundedChevronLeftFilled/>
                    <Text ml={12}>
                        Back
                    </Text>
                </Button>

                <Button variant='light'>
                    <Text mr={12}>
                        Continue
                    </Text>
                    <IconSquareRoundedChevronRightFilled/>
                </Button>
            </div>
        </Container>
    )
}