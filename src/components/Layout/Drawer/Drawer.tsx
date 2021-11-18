import { useState } from 'react';

import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';

import { IDrawerProps } from './types';

const DrawerSection = (props: IDrawerProps) => {
  const [state, setState] = useState(false);
  return (
    <>
      <button
        type="button"
        className={props.className}
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
          // sx={{` width: ${props.size}` }}
          role="presentation"
          onClick={() => setState(false)}
          // onKeyDown={() => setState(false)}
        >
          {props.children}
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerSection;
