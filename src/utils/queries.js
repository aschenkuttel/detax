export const tokensQuery = `query GetERC20TransfersFromAddress($address: Identity, $tokens: [Address!]) {
  ethereumTransfers: TokenTransfers(
    input: {filter: {_or: [{from: {_eq: $address}}, {to: {_eq: $address}}], tokenType: {_eq: ERC20}, tokenAddress: {_in: $tokens}}, blockchain: ethereum, limit: 50}
  ) {
    TokenTransfer {
      amount
      blockNumber
      blockTimestamp
      from {
        addresses
      }
      to {
        addresses
      }
      tokenAddress
      transactionHash
      tokenId
      tokenType
      blockchain
    }
  }
}`