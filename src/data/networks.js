const supportedNetworks = [
    {
        name: 'Ethereum',
        chainId: 1,
        rpcUrl: 'https://mainnet.infura.io/v3/',
        supportedTokens: [
            {
                name: 'Tether',
                symbol: 'USDT',
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
            }
        ]
    }
    ,
    {
        name: 'Polygon',
        chainId: '137',
        rpcUrl: 'https://polygon-mainnet.infura.io/v3/',
    }
    ,
    {
        name: 'BNB',
        chainId: '56'
    }
    ,
    {
        name: 'Aurora',
        chainId: '1313161554',
        rpcUrl: 'https://aurora-mainnet.infura.io/v3/'
    }
    ,
    {
        name: 'Gnosis',
        chainId: '100'
    }
    ,
    {
        name: 'Mantle',
        chainId: '5000'
    }
    ,
    {
        name: 'ZetaChain',
        chainId: '7000'
    }
    ,
    {
        name: 'Celo',
        chainId: '42220',
        rpcUrl: 'https://celo-mainnet.infura.io/v3/'
    }
    ,
    {
        name: 'OP',
        chainId: '10',
        rpcUrl: 'https://optimism-mainnet.infura.io/v3/'
    }
    ,
    {
        name: 'Cronos',
        chainId: '25'
    },
    {
        name: 'Linea',
        chainId: '59144',
        rpcUrl: 'https://linea-mainnet.infura.io/v3/'
    }
]

export default supportedNetworks