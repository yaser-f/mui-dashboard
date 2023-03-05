import { Box, Stack, Typography } from '@mui/material';

export default function TypographyWithDot({ children, color }) {
  return (
    <Stack direction='row' alignItems='center'>
      <Box
        sx={{
          height: 8,
          width: 8,
          borderRadius: '50%',
          margin: '6px',
          backgroundColor: color || 'primary.main',
        }}
      />
      <Typography variant='body2' color='text.secondary'>
        {children}
      </Typography>
    </Stack>
  );
}
