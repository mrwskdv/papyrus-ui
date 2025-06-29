import { useId as useFallbackId } from "react";

export function useId(customId?: string): string {
  const fallbackId = useFallbackId();
  return customId || fallbackId;
}
