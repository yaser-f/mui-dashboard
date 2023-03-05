import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  timelineOppositeContentClasses,
} from '@mui/lab';
import {
  Update as UpdateIcon,
  FlashOn as FlashOnIcon,
  Article as ArticleIcon,
  Comment as CommentIcon,
} from '@mui/icons-material';
import CardLayout from '../components/card-layout';

const activities = [
  {
    title: 'Task Updated',
    date: '9m',
    name: 'Nikoli',
    description: 'Updated a Task',
    icon: <UpdateIcon />,
    color: 'primary',
  },
  {
    title: 'Deal Added',
    date: '1h',
    name: 'Panshi',
    description: 'Updated a Task',
    icon: <FlashOnIcon />,
    color: 'secondary',
  },
  {
    title: 'Published Article',
    date: '5h',
    name: 'Rasel',
    description: 'Published an Article',
    icon: <ArticleIcon />,
    color: 'custom1',
  },
  {
    title: 'Dock Updated',
    date: '1d',
    name: 'Reshmi',
    description: 'Updated a Dock',
    icon: <FlashOnIcon />,
    color: 'custom2',
  },
  {
    title: 'Commented',
    date: '2d',
    name: 'Jenathon',
    description: 'Added a Comment',
    icon: <CommentIcon />,
    color: 'custom3',
  },
];

function CustomizedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    >
      {activities.map((activity, i) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            {activity.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            {i !== 0 && <TimelineConnector />}
            {/* @ts-ignore */}
            <TimelineDot color={activity.color}>{activity.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant='h6' component='span'>
              {activity.title}
            </Typography>
            <Typography>
              {activity.name + ' ' + activity.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default function Activities() {
  return (
    <CardLayout title='Recent Activities'>
      <CustomizedTimeline />
    </CardLayout>
  );
}
