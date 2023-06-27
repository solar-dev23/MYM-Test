import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material';
import { fetchWrapper } from '../../helpers';
import { NASA_API_KEY, NASA_API_URL } from '../../constants';

function Home() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      setLoading(true);
      const res = await fetchWrapper.get(`${NASA_API_URL}/?api_key=${NASA_API_KEY}`);
      setImageData(res);
      setLoading(false);
    };

    getImage();
  }, []);

  if (!imageData) return <></>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {loading && <LinearProgress />}
      <Container maxWidth="xl">
        <Grid container py={3} spacing={3}>
          <Grid item xs={7}>
            <img src={imageData?.url || ''} alt="apod" width={'100%'} />
          </Grid>
          <Grid item xs={5}>
            <Grid item sx={{ display: 'flex' }}>
              <Typography variant="h5" mr={1}>
                Title:{' '}
              </Typography>
              <Typography variant="h5">{imageData?.title || ''}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex' }} mt={1}>
              <Typography variant="body1" mr={1}>
                Date:{' '}
              </Typography>
              <Typography variant="body1">{imageData?.date || ''}</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex' }} mt={2}>
              <Typography>{imageData?.explanation || ''}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
