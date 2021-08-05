import React from 'react'
import { FaAngleRight, FaAngleLeft, FaAngleDown } from 'react-icons/fa';
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
           <div className="pt-5 flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-col items-center lg:items-start mb-2 lg:mb-0">
                    {/* Tile- Ecommerce Dashboard */}
                    <div className="text-2xl font-bold"> 
                        {t('Ecommerce_Dashboard')} 
                    </div>
                    <div className="text-xs flex items-center"> {t('ecommerce')} <FaAngleRight/> {t('Dashboard')} </div>
                    </div>
                    <div className="flex sm:flex-row flex-col text-sm">
                    {/* Sans Fransisco */}
                    <div className="bg-white py-1.5 px-3 rounded flex justify-center shadow-md cursor-pointer"> 
                        {t('San_fransisco')}
                        <div className="pl-3 flex items-center"> <FaAngleDown/> </div>
                    </div>
                    {/* Day, Week, Month, Annual */}
                    <div className="bg-white mx-0 sm:mx-2 py-1.5 px-3 my-2 sm:my-0 rounded flex shadow-md ">
                        <div className="cursor-pointer"> {t('Day')} </div>
                        <div className="px-4 cursor-pointer"> {t('Week')} </div>
                        <div className={currentLanguageCode==="sa"?"pl-4 cursor-pointer":"pr-4 cursor-pointer"}>{t('Month')}  </div>
                        <div className="cursor-pointer"> {t('Annual')} </div>
                    </div>
                    {/* Date */}
                    <div className="bg-white py-1.5 px-3 rounded flex justify-center shadow-md"> 
                        <div className="pr-3 flex items-center cursor-pointer"> {currentLanguageCode==="sa"?<FaAngleRight/>:<FaAngleLeft/>}  </div>
                        <div className=""> 29 {t('Apr')} 2021 </div>
                        <div className="pl-3 flex items-center cursor-pointer"> {currentLanguageCode==="sa"?<FaAngleLeft/>:<FaAngleRight/>} </div>
                    </div>
                    </div>
                </div> 
        </>
    )
}

export default Header
