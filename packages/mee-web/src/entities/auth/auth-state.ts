import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IOAuthUser {
  id: string
  created_a: string
  updated_at: string
  email: string
  last_name: string
  first_name: string
  avatar_url: string
}

interface IAuthState {
  user: IOAuthUser | null
  setUser: (data: IOAuthUser) => void
  removeUser: () => void
}

export const useAuthState = create(
  persist<IAuthState>(
    (set, get) => ({
      user: null,
      setUser: (user: IOAuthUser) => {
        set({ user: user })
      },
      removeUser: () => {
        set({ user: null })
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
