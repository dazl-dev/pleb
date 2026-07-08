import { green, yellow, red } from 'colorette';

export const log = (message: unknown): void => console.log(`${green('#')} ${String(message)}`);
export const logWarn = (message: unknown): void => console.log(`${yellow('#')} ${String(message)}`);
export const logError = (message: unknown): void => console.log(red(`# ${String(message)}`));
