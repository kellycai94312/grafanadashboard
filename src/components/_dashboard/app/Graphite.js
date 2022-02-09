import { useEffect } from 'react';
// material
import { Card, CardHeader, Box } from '@mui/material';

export default function Graphite(props) {
  return (
    <Card>
      <CardHeader title="Graphite Data" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} maxHeight="300">
        {props.text}
      </Box>
    </Card>
  );
}
