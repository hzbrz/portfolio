import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { TagButton } from './TagButton';
import { RMRLHtml } from './RMRLhtml';


export interface CardProps {
  icons: IconName[];
  iconNames: string[];
  circle: IconName;
  title: string;
  body: string;
  mediaLink: string;
  href: string;
}

export const ProjectCard: FC<CardProps> = ({ icons, circle, title, body, mediaLink, iconNames, href }) => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }} className='cardStyle' style={{ position: 'relative' }}>
        <CardMedia
          height={200}
          component="iframe"
          src={mediaLink}
        />
        <CardContent style={{ marginBottom: '50px' }}>
          {icons.map((icon, i) => {
            return (
              <TagButton key={i} icon={icon} name={iconNames[i]}/>
            )
          })}
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <RMRLHtml body={body} sliceEnd={200} />
          </Typography>
        </CardContent>
        <CardActions style={{ position: 'absolute', bottom: 0 }}>
          <Button className='cardBtn' size='medium' variant='contained' href={href} target='_blank'>Github</Button >
          <Button className='cardBtn' size='medium' variant='contained'>Demo</Button >
        </CardActions>
      </Card>
    </>
    );
}