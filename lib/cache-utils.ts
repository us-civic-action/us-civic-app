import { unstable_cache } from 'next/cache';

/**
 * Wraps a data fetching function with Next.js unstable_cache.
 * @param fetcher The function to cache
 * @param keyParts Unique cache keys
 * @param revalidateSeconds Time in seconds before cache is stale (default 1 hour)
 */
export const cachedData = <T>(
    fetcher: () => Promise<T>,
    keyParts: string[],
    revalidateSeconds: number = 3600
): Promise<T> => {
    const cachedFn = unstable_cache(
        fetcher,
        keyParts,
        { revalidate: revalidateSeconds }
    );
    return cachedFn();
};
