import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Tabs.css';
import useMenu from '../../hooks/useMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  console.log(category);
  const defaultIndex = categories.indexOf(category)
  console.log(defaultIndex);
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const drinks = menu.filter((item) => item.category === 'drinks');

  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title="Order Food"
        subTitle="Would you like to try a dish?"></Cover>
      <Tabs
        className={'max-w-7xl mx-auto py-4'}
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className={'text-center'}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
