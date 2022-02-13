import { FC } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TagButton } from './TagButton';

export interface PaperProps {
  paperWidth: number;
  title: string;
  position: string;
  iconNames: string[] | null;
  paperType: "elevation" | "outlined" | undefined;
}

// adding a static height using the paperHeight props makes the text inside paper un-responsive
export const ExpSkillPaper: FC<PaperProps> = ({ paperWidth, 
                                                title, 
                                                position,
                                                iconNames, 
                                                paperType,
                                                children 
}) => {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& > :not(style)': {
              marginLeft: '10px',
              marginBottom: '20px',
              padding: '20px',
              width: paperWidth,
            },
          }}
        >
          <Paper variant={paperType} elevation={4} className='papereText'>
            <div>
              <h4>{title} — <span style={{ fontSize: '18px' }}>{position}</span></h4>
              {
                paperType === 'elevation' ?
                  iconNames!.map((name, i) => {
                    return (
                      <TagButton key={i} icon={null} name={name} />
                    )
                  })
                :
                <TagButton icon={null} name={null} />
              }
            </div>
            {children}
          </Paper>
        </Box>
      </>
    );
}