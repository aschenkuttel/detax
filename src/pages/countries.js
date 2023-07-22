import {useState} from 'react'
import {Stack, Button, Group, createStyles} from '@mantine/core'
import {countriesData, flags} from '@/data/countries'


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
        flexDirection: 'column',
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
    'US': (
        <>
            <h1>The US Cryptocurrency Tax Guide 2023</h1>
            <p>Welcome to the comprehensive guide on cryptocurrency taxes in the United States for the year 2023.</p>

            <h2>Cryptocurrency as Property</h2>
            <p>In the United States, the IRS views cryptocurrencies as property. Therefore, they are subject to capital
                gains tax. This means that profits from selling cryptocurrencies that were held for investment purposes
                are treated like capital assets and taxed accordingly.</p>

            <h2>Tax Rates</h2>
            <p>The tax rate can vary based on how long you&apos;ve held the cryptocurrency and can be anywhere from 0%
                to 20% for long-term investments (over 1 year) and from 10% to 37% for short-term investments. Please
                check with a tax professional for your specific circumstances.</p>

            <h2>Mining and Staking</h2>
            <p>Mining and staking crypto is also considered taxable by the IRS. When you mine or stake cryptocurrency,
                it is considered income and is subject to income tax. The amount of tax depends on the market value of
                the cryptocurrency at the time you gained control over it.</p>

            <h2>Crypto Gifts and Donations</h2>
            <p>If you receive a gift or donation in crypto, it is not treated as income and is not subject to tax.
                However, if you sell, trade, or use it, there may be tax consequences, and capital gains tax may
                apply.</p>

            <h2>Reporting Cryptocurrency on Taxes</h2>
            <p>Every American taxpayer is asked whether they sold, received, sent, or exchanged any virtual currency
                when filing their tax return. It is essential to keep accurate records of all your cryptocurrency
                transactions to ensure you are reporting and paying correctly.</p>
        </>
    ),
    'DE': (
        <>
            <>
                <h1>Understanding Crypto Taxation in Germany (2023)</h1>

                <p>In the German tax landscape, cryptocurrencies are viewed as &quot;alternative economic
                    assets,&quot; with the trading of these digital assets classified as &quot;private sale
                    transactions.&quot;</p>

                <p>Here&apos;s a clear-cut overview of how cryptocurrency taxation works in Germany:</p>

                <ol>
                    <li><strong>Taxation at Personal Income Tax Rate</strong>: The tax on your cryptocurrency profits
                        aligns with your personal income tax rate. The precise rate is determined by your overall
                        income.
                    </li>

                    <li><strong>Holding Period of One Year</strong>: By holding onto your cryptocurrencies for a span
                        exceeding one year, you effectively escape the need to pay taxes on any profit from their sale.
                    </li>

                    <li><strong>Annual Exemption Threshold</strong>: Remember that there&apos;s an annual exemption
                        limit of 600€. If your profits exceed this figure in a year, you&apos;re obligated to pay taxes
                        on the entire profit.
                    </li>

                    <li><strong>Tax on Crypto-Based Earnings</strong>: Earnings derived from crypto activities, such as
                        staking or lending, are also taxable if they exceed the yearly exemption limit of 256€.
                    </li>
                </ol>

                <p>Your tax liabilities arise under the following circumstances:</p>

                <ul>
                    <li><strong>Premature Sale</strong>: If you sell your cryptocurrencies within a year of acquisition,
                        and your profits exceed 600€, you&apos;re subject to tax. For instance, buying crypto on
                        01/03/2022 and selling it for a profit exceeding 600€ before 01/03/2023 will incur tax.
                    </li>

                    <li><strong>Commercial Transactions</strong>: Profits derived from commercial activities involving
                        cryptocurrencies, such as mining, are subject to tax.
                    </li>

                    <li><strong>Remuneration in Crypto</strong>: If you receive cryptocurrency as a form of payment from
                        your employer, it&apos;s taxable.
                    </li>

                    <li><strong>Income from Crypto Activities</strong>: Earnings from mining, lending, staking, forging,
                        masternodes, margin trading, and bounties are subject to taxation.
                    </li>
                </ul>

                <p>You&apos;re exempted from crypto taxes in these situations:</p>

                <ul>
                    <li><strong>One-Year Holding Rule</strong>: If your cryptocurrencies are held for more than a year,
                        and not received from capital gains activities (like margin trading), the profit from their
                        private sale is tax-free, irrespective of the profit margin.
                    </li>

                    <li><strong>Zero Profit or Below Exemption Limit</strong>: If there are no taxable events, or if
                        your profit stays below the stipulated exemption limits, you&apos;re not obligated to pay taxes.
                        Profits under 600€ from crypto trading and income under 256€ from crypto activities in a year
                        are tax-exempt.
                    </li>

                    <li><strong>Losses</strong>: If a loss is incurred within the one-year speculation period, it&apos;s
                        considered tax-relevant. This is the same principle applied to potential gains, which are also
                        tax-exempt after one year.
                    </li>
                </ul>
            </>

        </>
    )
}

export default function Countries() {
    const {classes} = useStyles()
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
                                <Flag/>
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
