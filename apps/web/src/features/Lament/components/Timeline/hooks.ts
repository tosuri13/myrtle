import { useCallback, useRef } from "react";

import { useGetLaments } from "@/features/Lament/hooks/useGetLaments";
import { useGetUser } from "@/hooks/useGetUser";

const MAX_TIMELINE_LIMIT = 10;

export const useTimeline = () => {
  const { data: user } = useGetUser();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetLaments({ limit: MAX_TIMELINE_LIMIT });

  const laments = data?.pages.flatMap((page) => page.laments) ?? [];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node || !hasNextPage || isFetchingNextPage) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) fetchNextPage();
        },
        { threshold: 0.1 },
      );

      observerRef.current.observe(node);
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  return {
    user,
    laments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    sentinelRef,
  };
};
