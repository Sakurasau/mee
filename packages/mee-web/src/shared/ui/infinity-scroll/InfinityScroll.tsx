import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface QueryData<T> {
  data: T[]
}

type Query<T> = UseInfiniteQueryResult<InfiniteData<QueryData<T>>, unknown>

interface InfinityScrollProps<T> {
  query: Query<T>
  renderItem: (item: T) => React.ReactNode
}

const InfinityScroll = <T,>({ query, renderItem }: InfinityScrollProps<T>) => {
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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error')
    return (
      <p>
        Error: {error instanceof Error ? error.message : 'An error occurred'}
      </p>
    )

  return (
    <div>
      {data.pages.map((page, i) => (
        <Fragment key={i}>{page.data.map((item) => renderItem(item))}</Fragment>
      ))}
      <div ref={ref} className="p-2 text-center">
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Scroll down to load more'
            : 'No more items to load'}
      </div>
      {isFetching && !isFetchingNextPage && <p>Background Updating...</p>}
    </div>
  )
}

export default InfinityScroll
