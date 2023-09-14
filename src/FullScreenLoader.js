import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import loader from '../../assets/images/infinityLoader.svg';

const FullscreenLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const showLoaderHandler = () => {
    setShowLoader(true);
  };
  const hideLoaderHandler = () => {
    setShowLoader(false);
  };
  useEffect(() => {
    document.addEventListener('showLoader', showLoaderHandler, false);
    document.addEventListener('hideLoader', hideLoaderHandler, false);
  }, []);
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.modal + 1,
        transition: 'all .5s ease-in-out',
      }}
      open={showLoader}
    >
      <img alt="Spinner Loader" src={loader} className="mt-auto mb-auto" />
    </Backdrop>
  );
};

export default FullscreenLoader;
