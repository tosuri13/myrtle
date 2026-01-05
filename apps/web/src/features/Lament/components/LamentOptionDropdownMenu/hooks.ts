import { useState } from "react";

export const useLamentOptionDropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return { dropdownOpen, setDropdownOpen };
};
