import React from 'react';
import { styled } from '@mui/styles';
import House from 'Assets/Images/house.jpg';
import { Container, Typography } from '@mui/material';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

interface HouseImgProps {
  isMobile?: boolean;
}

export const HouseImg = styled('div')((props: HouseImgProps) => ({
  width: '100%',
  height: props.isMobile ? '30vh' : '75vh',
  backgroundImage: `url(${House})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginTop: '-10vh',
  zIndex: 0
}));

const StyledTitleText = styled(Typography)({
  position: 'absolute',
  top: '20vh',
  //left: '25vh',
  color: 'white',
  marginTop: '15px',
  fontWeight: '900 !important'
});

const StyledSubTitleText = styled(Typography)({
  position: 'absolute',
  fontWeight: '900 !important',
  top: '26vh',
  //left: '26vh',
  color: 'white',
  marginTop: '15px'
});

export const StyledHouseImg = () => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <HouseImg isMobile={isMobile}>
        <Container sx={{ textAlign: isMobile && 'center' }}>
          {!isMobile && (
            <>
              <StyledTitleText variant="h3">Welcome to Namai</StyledTitleText>
              <StyledSubTitleText variant="h4">
                homes built for you
              </StyledSubTitleText>
            </>
          )}
        </Container>
      </HouseImg>
    </>
  );
};
