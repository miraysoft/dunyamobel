import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import App from "@/App";

const CACHE_EXPIRY_MS = 60_000;

const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: CACHE_EXPIRY_MS,
          refetchOnWindowFocus: false,
        },
      },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
