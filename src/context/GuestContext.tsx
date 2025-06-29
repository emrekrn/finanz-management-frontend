import { createContext, type ReactNode, useMemo, useState } from 'react';

interface GuestContext {
  isGuest: boolean;
  changeIsGuest: (isGuest: boolean) => void;
}

export const GuestContext = createContext<GuestContext>({
  isGuest: false,
  changeIsGuest: () => {},
});

export const GuestProvider = ({ children }: { children: ReactNode }) => {
  const [isGuest, setIsGuest] = useState(false);
  const changeIsGuest = (isGuest: boolean) => setIsGuest(() => isGuest);
  const value = useMemo(() => ({ isGuest, changeIsGuest }), [isGuest]);

  return <GuestContext value={value}>{children}</GuestContext>;
};
