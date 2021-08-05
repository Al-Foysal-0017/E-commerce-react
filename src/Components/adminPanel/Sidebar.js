import React from 'react'
import cookies from 'js-cookie'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa';
import { IoRadioButtonOnOutline, IoMdRadioButtonOff} from 'react-icons/io';
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()
    return (
        <>
           <div className="bg-violetBlack w-80 font-thin hidden md:inline">
                <div className="">
                    {/* Search Box */}
                    <div className="pt-16 flex justify-center text-sm">
                        <input 
                            placeholder={t('searchInMenu')} 
                            class="border w-52 py-2 px-3 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>
                    
                    {/* Dashboard */}
                    <div className={currentLanguageCode==="sa"?"cursor-pointer pr-7 lg:pr-10 pl-5 text-white":"cursor-pointer pl-7 lg:pl-10 pr-5 text-white"}>
                    <div className="pt-6 pb-2 font-semibold">
                        {t('Dashboard')}
                    </div>
                    
                    <div className="">
                    {/* Product */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Product')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> }</div>
                    </div>
                    <div className="">
                        {/* <div className="flex items-center px-3 text-sm">
                            <div className="px-2"><IoMdRadioButtonOff/></div>
                            dsadasd
                        </div>
                        <div className="flex items-center px-3 text-sm pt-1">
                            <div className="px-2"><IoMdRadioButtonOff/></div>
                            dsadasd
                        </div> */}
                    </div>
                    
                    {/* Sales */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Sales')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Customers */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Customers')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Sellers */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Sellers')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Uploading Files */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Uploading_files')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Reports */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Reports')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Marketing */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Marketing')}</div>
                        <div className="flex items-center"> {currentLanguageCode==="sa"? <FaAngleLeft/> : <FaAngleRight/> } </div>
                    </div>
                    {/* Addon Manager */}
                    <div className="py-2 flex justify-between cursor-pointer">
                        <div className="">{t('Addon_Manager')}</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Sidebar
