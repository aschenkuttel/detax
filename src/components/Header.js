import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createStyles, Header, Container, Group, Burger, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Web3Button } from '@web3modal/react'

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
        <Header height={72} zIndex={2}>
            <Container className={classes.header} size='xl'>
                <p>LOGO</p>

                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Web3Button/>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
            </Container>
        </Header>
    )
}