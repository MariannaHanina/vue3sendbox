import { ComponentPublicInstance } from 'vue';
import { AxiosError } from 'axios';
import store from '@/store';
import { TError } from './types';

function setError (error: TError) {
  store.dispatch('errors/addError', error);
}

export function errorHandler (err: unknown, vm: ComponentPublicInstance | null, info: string): void {
  const error: TError = {
    type: 'component',
    details: `${err} in ${vm?.$options.name} -> ${info}`,
  }

  setError(error);
}

export function warnHandler (msg: string, vm: ComponentPublicInstance | null, trace: string): void {
  const error: TError = {
    type: 'warning',
    details: `${msg} in ${vm?.$options.name} -> ${trace}`,
  }

  setError(error);
}

export function httpErrorHandler (err: AxiosError): void {
  const config = err.config;
  const error: TError = {
    type: 'http',
    details: `${err.message} for ${config.method?.toUpperCase()}: ${config.baseURL}${config.url}`,
  };

  setError(error);
}

export function codeErrorHandler (err: Error): void {
  const error: TError = {
    type: 'code',
    details: `${err}`,
  };

  setError(error);
}
