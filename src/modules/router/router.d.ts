type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Page = { path: string; component: any };
