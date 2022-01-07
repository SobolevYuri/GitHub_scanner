export type ResolverMethod<T> = (root: Object, args: Record<string, any>) => Promise<T>;
