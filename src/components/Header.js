import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { createStyles, Header, Container, Group, Burger, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import ConnectButton from '@/components/Connect'

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none'
        }
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none'
        }
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        }
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
        }
    },

    logoTitle: {
        fontWeight: 700,
        fontSize: theme.fontSizes.xl,
        lineHeight: 1,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    }
}))

const links = [
    { label: 'Home', link: '/' },
    { label: 'Create', link: '/create' },
    { label: 'Reports', link: '/reports' },
    { label: 'Info', link: '/info' },
    { label: 'Countries', link: '/countries' }
]

export default function HeaderSimple() {
    const pathname = usePathname()
    const [opened, { toggle }] = useDisclosure(false)
    const { classes, cx } = useStyles()

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: pathname === link.link })}
        >
            {link.label}
        </Link>
    ))

    return (
        <Header height={60} zIndex={2}>
            <Container className={classes.header} size='xl'>
                <Group spacing='sm' align='end'>
                    <Image src='/favicon.png' width={24} height={24} />
                    <Text className={classes.logoTitle}>DeTax</Text>
                </Group>

                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <ConnectButton />
                <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
            </Container>
        </Header>
    )
}