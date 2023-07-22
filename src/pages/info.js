import {ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem} from '@mantine/core';
import {IconGauge, IconCookie, IconUser, IconMessage2, IconLock} from '@tabler/icons-react';

export const MOCKDATA = [
    {
        icon: IconGauge,
        title: 'Easy to Use',
        description:
            'Like a master craftsman\'s tool, DeTax is designed with simplicity and efficiency in mind. Its intuitive interface and step-by-step guidance eliminate complexity, making crypto tax filing as straightforward as possible.',
    },
    {
        icon: IconUser,
        title: 'Country Specific',
        description:
            'Like a global tax consultant, DeTax provides jurisdiction-specific advice. It adapts to your location, offering personalized insights and guidance tailored to your country\'s crypto tax regulations.',
    },
    {
        icon: IconCookie,
        title: 'Tax Optimization',
        description:
            'Acting as your personal financial strategist, DeTax offers tax-saving recommendations. By analyzing your transaction history and current holdings, it provides practical tips that could potentially lower your tax liability.',
    },
    {
        icon: IconLock,
        title: 'Up to Date',
        description:
            'DeTax operates like a well-tuned timepiece, always synced with the latest information. Whether it\'s real-time asset values, updated tax laws, or newly listed tokens, DeTax ensures you have the most accurate and current data at your fingertips.',
    },
    {
        icon: IconMessage2,
        title: 'Expanding',
        description:
            'Much like the ever-expanding universe, DeTax continually broadens its scope. We are dedicated to adding support for more chains over time, accommodating the evolving landscape of the crypto ecosystem.',
    },
    {
        icon: IconMessage2,
        title: 'Dynamic Tracking',
        description:
            'Mimicking the precision of radar technology, DeTax will soon provide dynamic, real-time tracking. This upcoming feature will offer daily guidance, enabling you to make informed, timely decisions about your crypto assets.',
    },
];


export function Feature({icon: Icon, title, description}) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size="1.1rem" stroke={1.5}/>
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" color="dimmed" sx={{lineHeight: 1.6}}>
                {description}
            </Text>
        </div>
    );
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            textAlign: 'left',
        },
    },
}));

export default function FeaturesGrid({data = MOCKDATA}) {
    const {classes} = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index}/>);

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>
                Our Features
            </Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    Learn more about us and what is soon to come.
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={3}
                spacing={50}
                breakpoints={[
                    {maxWidth: 980, cols: 2, spacing: 'xl'},
                    {maxWidth: 755, cols: 1, spacing: 'xl'},
                ]}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}
