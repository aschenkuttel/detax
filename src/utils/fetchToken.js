import { JsonRpcProvider, Contract } from 'ethers'
import { ERC20 } from '@/data/abi'

export default async function fetchToken(network, tokenAddress) {
    try {
        // TODO: should be an api route
        const rpcUrl = network.rpcUrl + process.env.NEXT_PUBLIC_INFURA_API_KEY
        const provider = new JsonRpcProvider(rpcUrl)
        const contract  = new Contract(tokenAddress, ERC20, provider)

        const symbol = await contract.symbol()
        const name = await contract.name()

        return {
            symbol,
            name,
            address: tokenAddress
        }
    } catch (error) {
        return null
    }
}