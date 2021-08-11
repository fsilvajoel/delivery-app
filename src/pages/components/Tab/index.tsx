import { useState } from 'react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CarrrouselCategories from '~components/CarouselCategories/CarouselCategories';

import classes from './Tab.module.scss';
import { ITabPanelProps } from './type';

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function TabCategories() {
  // const { food } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.main}
        // indicatorColor="primary"
        // textColor="primary"
        // centered
      >
        <Tab label="Produtos" />
        <Tab label="Bebidas" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* <h1>teste1</h1> */}
        <CarrrouselCategories data={categories} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>teste2</h1>
        {/* <CarrrouselCategories data={drink} /> */}
      </TabPanel>
    </>
  );
}
