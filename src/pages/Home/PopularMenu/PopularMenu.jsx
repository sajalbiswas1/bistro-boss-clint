import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu]= useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            
            const popularItems = data.filter( item => item.category === "popular")
          
            setMenu(popularItems)
        })
    },[])

    return (
        <section>
            <SectionTitle heading={"Click it out"} subHeading={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 md:gap-10 mb-5">
                {
                    menu.map(item => <MenuItem 
                        key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;