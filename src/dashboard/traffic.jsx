import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Dot } from 'recharts';
import { useTheme } from '@mui/material/styles';
import { TimelineDot } from '@mui/lab';
import CardLayout from '../components/card-layout';
import TypographyWithDot from '../components/typography-with-dot';

const data = [
  { name: 'Facebook', value: 33 },
  { name: 'Youtube', value: 55 },
  { name: 'Direct Search', value: 12 },
];

export default function Traffic() {
  const theme = useTheme();

  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    // @ts-ignore
    theme.palette.custom1.main,
  ];

  return (
    <CardLayout title='Traffic'>
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              fill='#8884d8'
              paddingAngle={0}
              dataKey='value'
              stroke='none'
              startAngle={0}
              endAngle={360}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Grid container spacing={2}>
        {data.map((di, i) => (
          <Grid item xs={4}>
            <Box>
              <Typography variant='h3'>{di.value}%</Typography>
              <TypographyWithDot color={colors[i]}>{di.name}</TypographyWithDot>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CardLayout>
  );
}
