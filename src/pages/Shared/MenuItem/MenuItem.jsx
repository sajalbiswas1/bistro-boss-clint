

const MenuItem = ({item}) => {
    const {menu, name, image,recipe,category, price} = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h4 className="uppercase">{name}...........</h4>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;