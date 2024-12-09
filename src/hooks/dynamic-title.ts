import { useEffect } from "react";

export const useDynamicTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};