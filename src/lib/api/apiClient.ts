import axios from 'axios';
import { env } from '@/env';
import { safeSessionStorage } from '@toss/storage';

const storedBaseURL = safeSessionStorage.get('baseURL');
const storedXM2MRI = safeSessionStorage.get('X-M2M-RI');
const storedXM2MOrigin = safeSessionStorage.get('X-M2M-Origin');
const storedXM2MRVI = safeSessionStorage.get('X-M2M-RVI');
const interval = safeSessionStorage.get('interval');

if (!storedBaseURL) {
  safeSessionStorage.set('baseURL', env.NEXT_PUBLIC_APP_SERVER_URL);
}
if (!storedXM2MRI) {
  safeSessionStorage.set('X-M2M-RI', '12345');
}
if (!storedXM2MOrigin) {
  safeSessionStorage.set('X-M2M-Origin', 'CAdmin');
}
if (!storedXM2MRVI) {
  safeSessionStorage.set('X-M2M-RVI', '2a');
}

if (!interval) {
  safeSessionStorage.set('interval', '10000');
}

export const apiClient = axios.create({
  baseURL: storedBaseURL ?? '',
  headers: {
    Accept: 'application/json',
    'X-M2M-RI': storedXM2MRI,
    'X-M2M-Origin': storedXM2MOrigin,
    'X-M2M-RVI': storedXM2MRVI,
    'Content-Type': 'application/json; ty=4',
  },
});
