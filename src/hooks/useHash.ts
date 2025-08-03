import { useEffect, useState } from 'react';

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);

  const setHashHandler = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener('hashchange', setHashHandler);

    return () => {
      window.removeEventListener('hashchange', setHashHandler);
    };
  }, []);

  return {
    hash,
    setHash,
  };
};

export default useHash;
