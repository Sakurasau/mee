import { FC } from 'react'

type LoadingProps = Omit<React.SVGProps<SVGSVGElement>, 'viewBox' | 'xmlns'>

const Loading: FC<LoadingProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}>
      <circle
        className="origin-center animate-loading animate-alternate"
        cx="400"
        cy="400"
        fill="none"
        r="200"
        stroke-width="40"
        stroke="#E387FF"
        stroke-dasharray="700 1400"
        stroke-linecap="round"
      />
      <circle
        className="origin-center animate-loading animate-alternate-reverse"
        cx="400"
        cy="400"
        fill="none"
        r="125"
        stroke-width="40"
        stroke="#E387FF"
        stroke-dasharray="700 1400"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default Loading
