import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'fire',
  apiKey: process.env.API_KEY,
});