import { useCallback, useRef } from "react";

import { useGetLaments } from "@/features/Lament/hooks/useGetLaments";
import { useGetUser } from "@/hooks/useGetUser";
import { useGetAuth } from "@/features/Auth/hooks/useGetAuth";

const MAX_TIMELINE_LIMIT = 10;

export const useTimeline = () => {
  const { data: auth } = useGetAuth();
  const userId = auth?.username;

  const { data: user, isLoading: isUserLoading } = useGetUser({ userId });
  const {
    data: results,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLamentsLoading,
  } = useGetLaments({ userId, limit: MAX_TIMELINE_LIMIT });
  const laments = results?.pages.flatMap((page) => page.laments) ?? [];

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
    isLoading: isUserLoading || isLamentsLoading,
    hasNextPage,
    isFetchingNextPage,
    sentinelRef,
  };
};
