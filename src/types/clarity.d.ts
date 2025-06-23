
declare global {
  interface Window {
    clarity: (action: string, ...args: any[]) => any;
  }
}

export {};
