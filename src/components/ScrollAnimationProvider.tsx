"use client";

import { useScrollAnimationMultiple } from "@/hooks/useScrollAnimation";

export default function ScrollAnimationProvider() {
  useScrollAnimationMultiple();
  return null;
}
