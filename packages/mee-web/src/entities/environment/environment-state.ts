import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { IOAuthConfig } from './configs/oauth-config.type'

export type IInitialState = Omit<IEnvironmentStateProps, 'setInitialState'>

interface IEnvironmentStateProps {
  isTauri: boolean
  oauth: IOAuthConfig
  // setInitialState: (initialState: IInitialState) => void
}

export const useEnvironmentStore = create<IEnvironmentStateProps>()(
  immer((set) => ({
    isTauri: false,
    oauth: {
      jwtToken: undefined,
      startOAuthServer: undefined,
    },

    // setInitialState: (initialState: IInitialState) => {
    //   console.log('setInitialState', initialState)
    //   set((_state) => initialState)
    // },
  })),
)
