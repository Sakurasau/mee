import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IOAuthUser {
  id: string
  created_a: string
  updated_at: string
  email: string
  last_name: string
  first_ame: string
  avatar_url: string
}

interface IAuthStateProps {
  user: IOAuthUser | null
  setUser: (data: IOAuthUser) => void
  removeUser: () => void
  isLoggedIn: () => boolean
}

export const useAuthStore = create(
  persist<IAuthStateProps>(
    (set, get) => ({
      user: null,
      setUser: (user: IOAuthUser) => {
        set({ user: user })
      },
      removeUser: () => {
        set({ user: null })
      },
      isLoggedIn: () => {
        return get().user !== null
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
