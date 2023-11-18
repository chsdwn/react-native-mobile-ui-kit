import React from 'react';

import { useUserStore } from '@/store';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const BaseRoute = () => {
  const authenticated = useUserStore((store) => store.authenticated);

  if (authenticated) {
    return <PrivateRoute />;
  }

  return <PublicRoute />;
};
