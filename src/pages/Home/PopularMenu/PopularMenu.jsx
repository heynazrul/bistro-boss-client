import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === 'popular');
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="max-w-7xl mx-auto my-10">
      <SectionTitle
        heading={'From our menu'}
        subHeading={'popular menu'}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem
            key={item.Id}
            item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
