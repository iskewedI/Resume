import React, { useState } from 'react';
import Loading from '../global/Loading';

const WithLoading = (Wrapped, message) => {
  return function HOC(props) {
    const [loaded, setLoaded] = useState(false);

    const setLoadedState = isLoaded => setLoaded(isLoaded);

    return (
      <>
        {!loaded && <Loading message={message} />}
        {<Wrapped {...props} isLoaded={loaded} setLoaded={setLoadedState} />}
      </>
    );
  };
};

export default WithLoading;
