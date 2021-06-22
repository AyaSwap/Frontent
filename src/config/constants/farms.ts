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
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
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
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    },
    token: tokens.weth,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'LINK-ETH LP',
    lpAddresses: {
      97: '',
      137: '0x5cA6CA6c3709E1E6CFe74a50Cf6B2B6BA2Dadd67',
    },
    token: tokens.link,
    quoteToken: tokens.weth,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
   
  
]

export default farms
