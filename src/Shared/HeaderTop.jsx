
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
export default function HeaderTop() {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className='container py-4'>
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:flex gap-1'>
                        <div className="header_top__icon_wrapper">
<BsFacebook/>
                        </div>
                        <div className="header_top__icon_wrapper">
<BsTwitter/>
                        </div>
                        <div className="header_top__icon_wrapper">
<BsInstagram/>
                        </div>
                        <div className="header_top__icon_wrapper">
<BsLinkedin/>
                        </div>
                    </div>

                    <div className='text-gray-500 text-[12px]'>
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER- $100
                    </div>

                    <div className='flex gap-4 '>
                        <select
                        className='text-gray-500 text-[12px] w-[70px]'
                        name='currency'
                        id="currency"
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="TK">TK</option>
                            

                        </select>
                        <select className='text-gray-500 text-[12px] w-[80px]' name="language" id="language">
                            <option value="English">English</option>
                            <option value="Bangla">Bangla</option>
                        </select>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim incidunt? Quasi dicta eligendi numquam facere possimus, fuga accusantium temporibus.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}