/**
 * @class useMediaQuery
 * @description Purpose of this hook is to get screen size state
 * @author Nawod Madhuvantha
*/

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string, serverFallback: boolean): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => {
        mediaQueryList.removeEventListener("change", onStoreChange);
      };
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => serverFallback,
  );
}