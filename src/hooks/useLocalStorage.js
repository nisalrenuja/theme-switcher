import { useSyncExternalStore } from "react";

const LOCAL_STORAGE_KEY = "theme";

function getSnapshot() {
  return localStorage.getItem(LOCAL_STORAGE_KEY) || "light";
}

function subscribe(callback) {
  const handler = () => callback();
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener("storage", handler);
  };
}

export function useLocalStorage() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
