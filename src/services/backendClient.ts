import { TMethod, TOptions } from './d';

export const handleCall = async (
  endpoint: string,
  method: TMethod,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bodyObejct?: Record<string, any>
) => {
  let options: TOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method
  };

  if (bodyObejct) {
    options = {
      ...options,
      body: JSON.stringify(bodyObejct)
    };
  }
  const response = await fetch(endpoint, options);

  const result = await response.json();
  return result;
};
