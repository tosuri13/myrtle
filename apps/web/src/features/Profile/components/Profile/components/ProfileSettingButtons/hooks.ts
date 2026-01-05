import { useTheme } from "next-themes";
import { useCallback } from "react";

export const useProfileSettingButtons = () => {
  const { theme, setTheme } = useTheme();

  const onClickSwitchTheme = useCallback(() => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  }, [theme, setTheme]);

  return { theme, onClickSwitchTheme };
};
