import { create } from 'zustand';

type UserStore = {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  authenticated: false,
  setAuthenticated: (authenticated) => set({ authenticated }),
}));
