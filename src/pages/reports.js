import { useState, useEffect, useContext } from 'react'
import { Button, createStyles, Input, Paper, rem, Select } from '@mantine/core'
import { Context } from '@/components/Context'
import { IconPlus, IconX } from '@tabler/icons-react'

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
    countryColumn: {
        width: rem(200),
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`
    },
    networkColumn: {
        width: rem(200),
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

export default function Reports() {
    const { classes } = useStyles()
    const { reports, addReport, removeReport } = useContext(Context)

    return (
        <div className={classes.outer}>
            <div className={classes.addressColumn}>
                <div className={classes.columnHeader}>
                    Addresses
                </div>

                <div className={classes.columnContent}>
                    {reports.map((report) => (
                        <Button variant='subtle' key={report.address}>
                            <p className={classes.address}>
                                {report.address}
                            </p>

                            <IconX size={18} className={classes.iconHover} onClick={() => {
                                // setAddresses(addresses.filter((a) => a !== address))
                            }} />
                        </Button>
                    ))}
                </div>
            </div>

            <div className={classes.countryColumn}>
                <div className={classes.columnHeader}>
                    Country
                </div>

                <div className={classes.columnContent}>
                </div>
            </div>

            <div className={classes.networkColumn}>
                <div className={classes.columnHeader}>
                    Networks
                </div>

                <div className={classes.columnContent}>
                </div>
            </div>

            <div className={classes.tokenColumn}>
                <div className={classes.columnHeader}>
                    Tokens
                </div>

                <div className={classes.columnContent}>

                </div>
            </div>
        </div>
    )
}