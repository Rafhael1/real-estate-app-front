import useMediaQuery from '@mui/material/useMediaQuery';

const useMediaQueryHook = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1224px)');
  const isBigScreen = useMediaQuery('(min-width: 1824px)');
  const isTabletOrMobile = useMediaQuery('(max-width: 1224px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isRetina = useMediaQuery('(min-resolution: 2dppx)');

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina
  };
};

export default useMediaQueryHook;
