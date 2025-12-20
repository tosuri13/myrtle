import { useEffect, useRef } from "react";

import { useGetLaments } from "@/features/Lament/hooks/useGetLaments";
import { useGetUser } from "@/hooks/useGetUser";

const MAX_TIMELINE_LIMIT = 5;

export const useTimeline = () => {
  const { data: user } = useGetUser();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetLaments({ limit: MAX_TIMELINE_LIMIT });

  const laments = data?.pages.flatMap((page) => page.laments) ?? [];

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) fetchNextPage();
      },
      { threshold: 0.1 },
    );
    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    user,
    laments,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    loadMoreRef,
  };
};
