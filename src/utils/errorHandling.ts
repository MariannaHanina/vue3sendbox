import { ComponentPublicInstance } from 'vue';
import { AxiosError } from 'axios';

export function errorHandler (err: unknown, vm: ComponentPublicInstance | null, info: string): void {
  console.log('EH!:', err, vm, info);
}

export function warnHandler (msg: string, vm: ComponentPublicInstance | null, trace: string): void {
  console.log('WRN!:', msg, vm, trace);
}

export function httpErrorHandler (error: AxiosError): Promise<AxiosError> {
  const errorCode = error.response?.status;
  const errorData = error.response?.data;

  if (errorCode) {
    console.log('HTTP! response error:', errorData, errorCode);
  }

  return Promise.reject(error);
}
