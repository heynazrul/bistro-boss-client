import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, subTitle, coverImg }) => {
  return (
    <div className="space-y-12 mt-12">
      {title && (
        <Cover
          img={coverImg}
          title={title}
          subTitle={subTitle}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto ">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="max-w-7xl mx-auto flex justify-center pb-6">
        <button className=" btn btn-outline text-[#BB8506] border-0 border-b-2 hover:border-[#BB8506] hover:border-b-2 hover:text-[#BB8506]">
          Order your favorite {title }
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
