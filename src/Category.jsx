import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFoodTruck } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


 const Categories=[
    {
        id:1,
        name:"All",
        icone:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,

    },
      {
        id:2,
        name:"Breakfast",
        icone:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />,


    },
      {
        id:3,
        name:"soups",
        icone:<TbSoup className="w-[60px] h-[60px] text-green-600"/>,


    },
      {
        id:4,
        name:"pasta",
        icone:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,


    },
      {
        id:5,
        name:"main_course",
        icone:<GiFoodTruck className="w-[60px] h-[60px] text-green-600" />,


    },
      {
        id:6,
        name:"pizza",
        icone:<GiFullPizza className="w-[60px] h-[60px] text-green-600" />,


    },
      {
        id:7,
        name:"burger",
        icone:<GiHamburger  className="w-[60px] h-[60px] text-green-600"/>,


    }
]
export default Categories