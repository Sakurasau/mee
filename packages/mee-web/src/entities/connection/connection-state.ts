import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface ConnectionIssue {
  name: string
  message: string
  code: string
}

interface ConnectionStore {
  issues: ConnectionIssue[]
  addIssue: (issue: ConnectionIssue) => void
  removeIssue: (id: string) => void
}

export const useConnectionStore = create(
  immer<ConnectionStore>((set, get) => ({
    issues: [],
    addIssue: (issue) =>
      set((state) => {
        const existingIssue = state.issues.find((i) => i.name === issue.name)
        if (existingIssue) {
          Object.assign(existingIssue, issue)
        } else {
          state.issues.push(issue)
        }
      }),
    removeIssue: (name) =>
      set((state) => ({
        issues: state.issues.filter((issue) => issue.name !== name),
      })),
  })),
)
