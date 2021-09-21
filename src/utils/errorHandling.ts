import { ComponentPublicInstance } from 'vue';

export function errorHandler (err: unknown, vm: ComponentPublicInstance | null, info: string): void {
  console.log('EH!:', err, vm, info);
}

export function warnHandler (msg: string, vm: ComponentPublicInstance | null, trace: string): void {
  console.log('WRN!:', msg, vm, trace);
}
