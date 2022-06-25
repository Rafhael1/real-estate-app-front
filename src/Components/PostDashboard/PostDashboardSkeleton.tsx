import React from 'react';

import { Box, Skeleton } from '@mui/material';

const PostDashboardSkeleton = () => {
  return (
    <Box margin={2}>
      <Skeleton
        sx={{ margin: '5px auto', borderRadius: '12px' }}
        variant="rectangular"
        width={345}
        height={200}
      />
      <Skeleton
        sx={{ margin: '5px auto', borderRadius: '12px' }}
        variant="rectangular"
        width={345}
        height={25}
      />
      <Skeleton
        sx={{ margin: '5px auto', borderRadius: '12px' }}
        variant="rectangular"
        width={345}
        height={25}
      />
    </Box>
  );
};

export default PostDashboardSkeleton;
