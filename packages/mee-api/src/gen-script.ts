import path from 'path'

import { generateApi } from 'swagger-typescript-api'

generateApi({
  name: 'api',
  output: path.resolve(process.cwd(), './src/gen'),
  url: 'http://localhost:5000/swagger/json',
  httpClientType: 'axios',
  // extractEnums: true,
  modular: true,
  cleanOutput: true,

  // types
  primitiveTypeConstructs: () => ({
    string: {
      $default: "string",
      "date-time": "Date",
    },
  }),
}).catch((error) => {
  console.error('Error generating API:', error);
});
