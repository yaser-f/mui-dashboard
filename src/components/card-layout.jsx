import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

export default function CardLayout({
  title,
  subtitle,
  headerContent,
  children,
}) {
  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent
        sx={{
          height: '100%',
        }}
      >
        <Stack
          sx={{
            height: '100%',
          }}
          justifyContent='space-between'
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h6' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {subtitle}
              </Typography>
            </Box>
            {headerContent}
          </Stack>
          <Box>{children}</Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
