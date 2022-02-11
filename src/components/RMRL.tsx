import { Button } from '@mui/material';
import { FC, useState } from 'react';

export interface RMRLProps {
  body: string;
}

export const RMRL: FC<RMRLProps> = ({ body }) => {
  
  const [show, setShow] = useState(false);

  const showMore = () => {
    setShow(!show);
  }

  return (
    <>
      <div>
        {!show ? body.slice(0, 70)+'...' : body}
      </div>
      <Button style={{ paddingLeft: '0px' }}onClick={showMore} id="myBtn">Read {!show ? 'more' : 'less'}</Button>
    </>
  );
}