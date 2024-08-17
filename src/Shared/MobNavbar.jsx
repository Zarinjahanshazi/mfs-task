
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillProfile, AiOutlineHome } from "react-icons/ai";
import { FiHeart } from 'react-icons/fi';
import { BiLogIn } from "react-icons/bi";
export default function MobNavbar() {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar z-[9999] px-8 '>
    <div className='flex justify-between text-[28px] py-2'>
{/* < IoMenuOutline/> */}
<div className="flex flex-col text-center justify-center">
<AiOutlineHome />
<h6 className="font-thin text-sm">Home</h6>
</div>

<div className='relative'>
  <div className="flex flex-col text-center justify-center">
  <HiOutlineShoppingBag />
  <h6 className="font-thin text-sm">Cart</h6>
  </div>
<div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
0
</div>
</div>
<div className="flex flex-col text-center justify-center">
  <BiLogIn />
  <h6 className="font-thin text-sm">Cart</h6>
  </div>
<div className='relative'>
< AiFillProfile/>
<div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
0
</div>
</div>
    </div>
    </div>
  )
}