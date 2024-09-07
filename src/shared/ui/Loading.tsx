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
        strokeWidth="40"
        stroke="#E387FF"
        strokeDasharray="700 1400"
        strokeLinecap="round"
      />
      <circle
        className="origin-center animate-loading animate-alternate-reverse"
        cx="400"
        cy="400"
        fill="none"
        r="125"
        strokeWidth="40"
        stroke="#E387FF"
        strokeDasharray="700 1400"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Loading
