import { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import scss from './Drawer.module.scss';
import { IDrawerProps } from './types';

const DrawerSection = (props: IDrawerProps) => {
  const [state, setState] = useState(false);
  return (
    <>
      <button
        type="button"
        className={scss.buttonDrawer}
        onClick={() => setState(true)}
      >
        {props.buttonContent}
      </button>
      <Drawer
        anchor={props.direction}
        open={state}
        onClose={() => setState(false)}
      >
        <Box
          sx={{ width: props.size }}
          role="presentation"
          onClick={() => setState(false)}
          // sx={{` width: ${props.size}` }}
        >
          {props.children}
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerSection;
