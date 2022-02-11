import { FC } from 'react';
import Button from '@mui/material/Button';
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
              style={{ color: 'black', fontSize: '17px' }}
            // fixedWidth
            />
          }
          style={{ marginRight: '10px', marginBottom: '10px' }}
        >
          <p style={{ margin: 0, marginTop: '5px', fontSize: '10px' }}>{name}</p>
        </Button>
      </>
    );
  } else if (!icon && name) {
    return (
      <>
        <Button size='small' variant='outlined'
          style={{ marginRight: '10px', marginBottom: '10px', padding: '1px 4px' }}
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