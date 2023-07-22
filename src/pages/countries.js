import { useState } from 'react'
import { Stack, Button, Group, createStyles } from '@mantine/core'
import { countriesData, flags } from '@/data/countries'


const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        width: '100%'
    },
    menu: {
        height: 'auto',
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`
    },

    display: {
        flex: 1,
        display: 'flex',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md
    },

    fullWidthLabel: {
        '& span': {
            width: '100%'
        }
    }
}))

const countryTaxData = {
    'US': 'Don\'t pay taxes'
}

export default function Countries() {
    const { classes } = useStyles()
    const [selectedCountry, setSelectedCountry] = useState('US')

    return (
        <div className={classes.root}>
            <Stack className={classes.menu} spacing={0}>
                {countriesData.map((country) => {
                    const Flag = flags[country.value]

                    return (
                        <Button key={country.value} variant='subtle'
                                className={classes.fullWidthLabel} onClick={() => {
                            setSelectedCountry(country.value)
                        }}>
                            <Group>
                                <Flag />
                                <p>{country.label}</p>
                            </Group>
                        </Button>
                    )
                })}
            </Stack>

            <div className={classes.display}>
                {countryTaxData[selectedCountry]}
            </div>
        </div>
    )
}
