import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuBg from '../../../assets/menu/banner3.jpg';
import dessertCover from '../../../assets/menu/dessert-bg.jpeg';
import pizzaCover from '../../../assets/menu/pizza-bg.jpg';
import saladCover from '../../../assets/menu/salad-bg.jpg';
import soupCover from '../../../assets/menu/soup-bg.jpg';

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu, loading] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const offered = menu.filter((item) => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover
        img={menuBg}
        title={'Our Menu'}
        subTitle={'would you like to try a dish'}></Cover>

      {/* Todays offer  */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert Menu Item */}
      <MenuCategory
        items={dessert}
        title={'Desserts'}
        subTitle={'Try out the best dessert in our house. You will love them'}
        coverImg={dessertCover}></MenuCategory>

      {/* Pizza menu item */}
      <MenuCategory
        items={pizza}
        title={'Pizza'}
        subTitle={'Try out the best Pizza made for you. You will love them'}
        coverImg={pizzaCover}></MenuCategory>

      {/* Salad menu item */}
      <MenuCategory
        items={salad}
        title={'Salads'}
        subTitle={'Get Healthy with us'}
        coverImg={saladCover}></MenuCategory>
      <MenuCategory
        items={soup}
        title={'Soups'}
        subTitle={'Try out the best Soups made for you. You will love them'}
        coverImg={soupCover}></MenuCategory>
    </div>
  );
};

export default Menu;
