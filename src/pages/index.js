import Image from 'next/image'
import Link from 'next/link'
import {
    createStyles,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem
} from '@mantine/core'
import {IconCheck} from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    content: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0
        }
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28)
        }
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1
        }
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none'
        }
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`
    }
}))

export default function Hero() {
    const {classes} = useStyles()
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Let <span className={classes.highlight}>DeTax</span> keep track of your transactions
                        </Title>
                        <Text color='dimmed' mt='md'>
                            Crypto taxes made simple. Aggregate transactions across all chains to enjoy a headache
                            free tax filing.
                        </Text>

                        <List
                            mt={30}
                            spacing='sm'
                            size='sm'
                            icon={
                                <ThemeIcon size={20} radius='xl'>
                                    <IconCheck size={rem(12)} stroke={1.5}/>
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>Easy to use</b>
                            </List.Item>
                            <List.Item>
                                <b>Instantly create reports</b>
                            </List.Item>
                            <List.Item>
                                <b>Fully open source</b>
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Link rel="stylesheet" href="/create">
                                <Button radius='xl' size='md' className={classes.control}>
                                    Get started
                                </Button>
                            </Link>
                            <Link rel="stylesheet" href="/info">
                            <Button variant='default' radius='xl' size='md' className={classes.control}>
                                Learn more
                            </Button>
                            </Link>
                        </Group>
                    </div>
                    <Image src='/hero.png' width={420} height={420}
                           className={classes.image} alt='whatever'/>
                </div>
            </Container>
        </div>
    )
}