import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, subTitle, coverImg}) => {
    return (
      <div className="space-y-16 mt-12">
        {title && (
          <Cover
            img={coverImg}
            title={title}
            subTitle={subTitle}></Cover>
        )}
        <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto pb-6">
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              item={item}></MenuItem>
          ))}
        </div>
      </div>
    );
};

export default MenuCategory;