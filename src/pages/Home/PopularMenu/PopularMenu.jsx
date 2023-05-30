
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  
  return (
    <section className="max-w-7xl mx-auto my-10">
      <SectionTitle
        heading={'From our menu'}
        subHeading={'popular menu'}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item, idx) => (
          <MenuItem
            key={idx}
            item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
