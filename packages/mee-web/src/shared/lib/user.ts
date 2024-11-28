import { Nullable } from "../types/nullable.type";

export function fullName(first?: Nullable<string>, last?: Nullable<string>): string
export function fullName(user?: Nullable<{
  first_name?: string
  last_name?: string
}>): string

export function fullName(
  arg1?: Nullable<string> | Nullable<{ first_name?: string; last_name?: string }>,
  arg2?: Nullable<string>,
): string {
  if (typeof arg1 === 'object') {
    if (!arg1) return ''
    return `${arg1.first_name ?? ''} ${arg1.last_name ?? ''}`.trim()
  }
  return `${arg1 ?? ''} ${arg2 ?? ''}`.trim()
}

export function initials(name?: string): string {
  if (!name) return ''

  const initials = name
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase());

  return initials.slice(0, 2).join('');
}
