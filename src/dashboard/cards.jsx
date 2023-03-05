import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// const CardContainer = ({num}) => {

// //  const theme = useTheme()
//     return (
//     <Card
//         sx={(theme) => ({
// background: theme.palette.primary.main,
// background: `linear-gradient(135deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`,
//         })}

//     ></Card>
// )}

export const Card1 = () => {
  return (
    <Card
      sx={(theme) => ({
        // background: theme.palette.primary.main,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`,
        width: '100%',
        height: 160,
        color: theme.palette.common.white,
      })}
      variant='outlined'
    >
      <CardHeader title='Revenue Status' />
      <CardContent>
        <Typography variant='h3'>$432</Typography>
        <Typography variant='body2'>2023</Typography>
      </CardContent>
    </Card>
  );
};

export const Card2 = () => {
  return (
    <Card
      sx={(theme) => ({
        // background: theme.palette.primary.main,
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 60%, ${theme.palette.secondary.dark} 100%)`,
        width: '100%',
        height: 160,
        color: theme.palette.common.white,
      })}
      variant='outlined'
    >
      <CardHeader title='Page View' />
      <CardContent>
        <Typography variant='h3'>54510</Typography>
        <Typography variant='body2'>2023</Typography>
      </CardContent>
    </Card>
  );
};

export const Card3 = () => {
  return (
    <Card
      sx={(theme) => ({
        // background: theme.palette.primary.main,
        background: `linear-gradient(135deg, ${theme.palette.custom1.main} 60%, ${theme.palette.custom1.dark} 100%)`,
        width: '100%',
        height: 160,
        color: theme.palette.common.white,
      })}
      variant='outlined'
    >
      <CardHeader title='Bonus Rate' />
      <CardContent>
        <Typography variant='h3'>94%</Typography>
        <Typography variant='body2'>2023</Typography>
      </CardContent>
    </Card>
  );
};
export const Card4 = () => {
  return (
    <Card
      sx={(theme) => ({
        // background: theme.palette.primary.main,
        background: `linear-gradient(135deg, ${theme.palette.custom2.main} 60%, ${theme.palette.custom2.dark} 100%)`,
        width: '100%',
        height: 160,
        color: theme.palette.common.white,
      })}
      //   variant='outlined'
    >
      <CardHeader title='Revenue Status' />
      <CardContent>
        <Typography variant='h3'>$432</Typography>
        <Typography variant='body2'>2023</Typography>
      </CardContent>
    </Card>
  );
};
