import Router from 'next/router';

import { useEffect } from 'react';

import MenuApp from '~components/Layout/Menu/Menu';

import { useLoginStore } from '~hooks/store/UseLoginStore';

export default function UserDetails() {
  const isLogged = useLoginStore((state) => state.isLogged);

  useEffect(() => {
    if (!isLogged) {
      Router.push('/login');
    }
  }, [isLogged]);

  return (
    <main>
      <MenuApp />
      <div>
        <h1>detalhes do usuário</h1>
      </div>
    </main>
  );
}
