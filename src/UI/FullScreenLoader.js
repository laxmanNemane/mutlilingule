import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import loader from "../assets/Loader1.svg";
import { Box } from "@mui/material";

const FullscreenLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const showLoaderHandler = () => {
    setShowLoader(true);
  };
  const hideLoaderHandler = () => {
    setShowLoader(false);
  };
  useEffect(() => {
    document.addEventListener("showLoader", showLoaderHandler, false);
    document.addEventListener("hideLoader", hideLoaderHandler, false);
  }, []);
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.modal + 1,
        transition: "all .5s ease-in-out",
      }}
      open={showLoader}
    >
      <Box sx={{ width: "300px" }}>
        <img alt="Spinner Loader" src={loader} className="mt-auto mb-auto" />
      </Box>
    </Backdrop>
  );
};

export default FullscreenLoader;
