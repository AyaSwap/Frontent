import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 9,
    lpSymbol: 'DEKO-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x1ea1ae8ee68d6cbe1cd4d668B7Ceb8cE0cA94f3C',
    },
    token: tokens.deko,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 1,
    lpSymbol: 'DEKO-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x11225831074F10Ea25486Df84B0f1c8DC4C96BE8',
    },
    token: tokens.deko,
    quoteToken: tokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'DEKO-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x788a3A1c1A98e35716a8D8A52851dC30CBF709e6',
    },
    token: tokens.deko,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'DEKO-ETH LP',
    lpAddresses: {
      97: '',
      137: '0x7e6fAB5d9c736A5110476F5D2Ec898D318b1Cb0e',
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
