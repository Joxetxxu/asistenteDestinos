import { create } from 'zustand'
import type { GlobalInfo } from '../ts/interfaces'
export const contextoStore = create<GlobalInfo>((set) => ({
    user: 'jose',
    pass: 'miguel',
    isLogin: true
}))  