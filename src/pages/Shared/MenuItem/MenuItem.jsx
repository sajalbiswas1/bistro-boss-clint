

const MenuItem = ({item}) => {
    const {menu, name, image,recipe,category, price} = item;
    return (
        <div className="flex gap-5">
            <img className="h-20 w-24 rounded-e-full rounded-b-full" src={image} alt="" />
            <div>
                <h4 className="uppercase text-xl">{name}...........</h4>
                <p className="text-sm">{recipe}</p>
            </div>
            <p className="font-bold text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItem;