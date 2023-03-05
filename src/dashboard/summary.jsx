import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';
import {
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { TimelineDot } from '@mui/lab';
import StarIcon from '@mui/icons-material/Star';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import TypographyWithDot from '../components/typography-with-dot';
import CardLayout from '../components/card-layout';

const data = [
  {
    name: 'Jan',
    store: 4000,
    online: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    store: 3000,
    online: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    store: 2000,
    online: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    store: 2780,
    online: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    store: 1890,
    online: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    store: 2390,
    online: 3800,
    amt: 2500,
  },
];

function Chart() {
  const theme = useTheme();
  const color1 = theme.palette.primary.main;
  const color2 = theme.palette.secondary.main;
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={color1} stopOpacity={0.1} />
              <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id='gradient2' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={color2} stopOpacity={0.1} />
              <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.2} />
          <XAxis dataKey='name' opacity={0.6} />
          <YAxis opacity={0.6} />
          <Tooltip />
          {/* <Legend
            align='right'
            verticalAlign='top'
            iconType='circle'
          /> */}
          <Area
            type='natural'
            dataKey='online'
            stroke={color1}
            strokeWidth={3}
            fillOpacity={1}
            fill='url(#gradient)'
          />
          <Area
            type='natural'
            dataKey='store'
            stroke={color2}
            strokeWidth={3}
            fillOpacity={1}
            fill='url(#gradient2)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// https://codepen.io/LeanyLabs/pen/jOWYpJx
export default function Dashboard() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CardLayout
      title='Dashboard'
      subtitle='Overview of Latest Month'
      headerContent={
        <Fragment>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='DAILY' {...a11yProps(0)} />
              <Tab label='WEEKLY' {...a11yProps(1)} />
              <Tab label='MONTHLY' {...a11yProps(2)} />
              <Tab label='YEARLY' {...a11yProps(3)} />
            </Tabs>
          </Box>

          <Stack direction='row'>
            <TypographyWithDot color='primary.main'>Online</TypographyWithDot>
            <TypographyWithDot color='secondary.main'>Store</TypographyWithDot>
          </Stack>
        </Fragment>
      }
    >
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={4}>
              <Box>
                <Typography variant='h3'>$3468.58</Typography>
                <Typography variant='caption'>
                  Current Month Earnings
                </Typography>
              </Box>
              <Box>
                <Typography variant='h3'>82</Typography>
                <Typography variant='caption'>Current Month Sales</Typography>
              </Box>
              <Button variant='contained'>Last Month Summary</Button>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Chart />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <TimelineDot color='primary'>
              <StarIcon />
            </TimelineDot>
            <Box>
              <Typography variant='body2' color='text.secondary'>
                Wallet Balance
              </Typography>
              <Typography>$4,567.53</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <TimelineDot color='secondary'>
              <AutoFixHighIcon />
            </TimelineDot>
            <Box>
              <Typography variant='body2' color='text.secondary'>
                Referral Earning
              </Typography>
              <Typography>$1689.53</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <TimelineDot color='custom1'>
              <PaymentIcon />
            </TimelineDot>
            <Box>
              <Typography variant='body2' color='text.secondary'>
                Estimate Sales
              </Typography>
              <Typography>$2851.53</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <TimelineDot color='custom2'>
              <FavoriteIcon />
            </TimelineDot>
            <Box>
              <Typography variant='body2' color='text.secondary'>
                Earning
              </Typography>
              <Typography>$52.567.53</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </CardLayout>
  );
}
