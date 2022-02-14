import { Button } from '@mui/material';
import { FC, useState } from 'react';

export interface Props {
  body: string;
  sliceEnd: number;
}

export const RMRLHtml: FC<Props> = ({ body, sliceEnd }) => { 

  const [show, setShow] = useState(false);

  const showMore = () => {
    setShow(!show);
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: !show ? body.slice(0, sliceEnd)+'...' : body }} />
      <Button color='success' style={{ paddingLeft: '0px' }} onClick={showMore} id="myBtn">Read {!show ? 'more' : 'less'}</Button>
    </>
  );
}