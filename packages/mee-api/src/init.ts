interface InitialAPIType {
  server_url: string
}

let values: InitialAPIType | null = null

const InitialAPI = ({ server_url }: InitialAPIType) => {
  values = {
    server_url,
  }
}

const getValue = (val: keyof InitialAPIType) => {
  if (!values) {
    throw new Error('⚠️ InitialAPI is not initialized')
  }

  return values[val]
}

export { getValue, type InitialAPIType }
export default InitialAPI