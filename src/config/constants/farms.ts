import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'DEKO-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x704923893Eb29E989bB34f95cE57aC906613d907',
    },
    token: tokens.deko,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'DEKO-USDT LP',
    lpAddresses: {
      97: '',
      137: '0xC5dc3795B50750209e9b8ea0947b5371ce6e3574',
    },
    token: tokens.deko,
    quoteToken: tokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'MATIC-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.usdt,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 4,
    lpSymbol: 'DEKO-USDC LP',
    lpAddresses: {
      97: '',
      137: '0xB0EbFbf00707E2259525A1A546042bd109Cf7e6C',
    },
    token: tokens.deko,
    quoteToken: tokens.usdc,
  },
  {
    pid: 8,
    lpSymbol: 'DEKO-ETH LP',
    lpAddresses: {
      97: '',
      137: '0x704923893Eb29E989bB34f95cE57aC906613d907',
    },
    token: tokens.deko,
    quoteToken: tokens.weth,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.weth,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'LINK-ETH LP',
    lpAddresses: {
      97: '',
      137: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    },
    token: tokens.link,
    quoteToken: tokens.weth,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x7efaef62fddcca950418312c6c91aef321375a00',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
   
  
]

export default farms
