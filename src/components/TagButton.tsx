import { FC } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';


export interface TagProps {
  name: string | null;
  icon: IconName | null;

}

export const TagButton: FC<TagProps> = ({ icon, name }) => {
  if (icon) {
    return (
      <>
        <Button size='small' variant='outlined'
          startIcon={
            <FontAwesomeIcon
              icon={icon !== 'database' ? ['fab', icon] : ['fas', icon]}
              // mask={['fas', circle]}
              // transform="grow-7 left-3 up-5"
              size='1x'
              style={{ color: 'inherit', fontSize: '17px' }}
            // fixedWidth
            />
          }
          style={{ marginRight: '10px', marginBottom: '10px', borderColor: '#dd7729', color: 'inherit' }}
        >
          <Typography variant='caption' style={{ margin: 0, marginTop: '5px', fontSize: '10px', padding: '0px' }}>{name}</Typography>
        </Button>
      </>
    );
  } else if (!icon && name) {
    return (
      <>
        <Button size='small' variant='outlined'
          style={{ marginRight: '10px', marginBottom: '10px', padding: '1px 4px', borderColor: '#dd7729', color: 'inherit' }}
        >
          <p style={{ margin: 0, marginTop: '5px', fontSize: '10px' }}>{name}</p>
        </Button>
      </>
    )
  }
  return (
    <></>
  );

}