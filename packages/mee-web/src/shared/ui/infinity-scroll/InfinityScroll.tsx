import { AxiosError } from '@mee/api'
import { useConnectionStore } from '@mee/entities/connection'
import { Loading } from '@mee/shared/ui/loading'
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface QueryData<T> {
  data: T[]
}

type Query<T> = UseInfiniteQueryResult<InfiniteData<QueryData<T>>, unknown>

interface InfinityScrollProps<T> {
  keys: string[]
  query: Query<T>
  renderItem: (item: T) => React.ReactNode
}

export const InfinityScroll = <T,>({
  keys,
  query,
  renderItem,
}: InfinityScrollProps<T>) => {
  const { ref, inView } = useInView()
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = query

  const addIssue = useConnectionStore((state) => state.addIssue)
  const removeIssue = useConnectionStore((state) => state.removeIssue)

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  useEffect(() => {
    if (status === 'error' && error instanceof AxiosError) {
      const errorKeys = ['infinity-scroll'].concat(keys)
      addIssue({
        name: errorKeys.join('_'),
        message: error.message ?? 'Failed to load data.',
        code: error.code ?? 'NETWORK_ERROR',
      })
    } else {
      removeIssue('infinity-scroll')
    }
  }, [status, error, addIssue, removeIssue, keys])

  return (
    <div className="relative h-full">
      {data && status === 'success' ? (
        data.pages.map((page, i) => (
          <Fragment key={i}>
            {page.data.map((item) => renderItem(item))}
          </Fragment>
        ))
      ) : (
        <Loading className="absolute inset-0 m-auto size-16" />
      )}

      {/* <div ref={ref} className="p-2 text-center">
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Scroll down to load more'
            : 'No more items to load'}
      </div>
      {isFetching && !isFetchingNextPage && <p>Background Updating...</p>} */}
    </div>
  )
}
