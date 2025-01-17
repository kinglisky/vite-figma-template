export const PLUGIN_NAME = 'Figma Plugin Template';

export interface Message {
  type: string;
  payload?: any;
}

export function createMessage(type: string, payload?: any): Message {
  return { type, payload };
} 