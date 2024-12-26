"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * TODO: どこに配置するべきか迷う(一旦Componentsに配置)
 */
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retryOnMount: false,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
