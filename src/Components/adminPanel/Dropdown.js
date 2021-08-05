import React from 'react'
import { GiSplitCross} from 'react-icons/gi';
import { useTranslation } from 'react-i18next'

const Dropdown = ({setShowDropdown, showDropdown}) => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col md:hidden fixed bg-backgroundDB w-screen h-screen z-10">
            <div className="cursor-pointer w-full flex justify-end p-10">
                <div onClick={()=>setShowDropdown(!showDropdown)} className="mx-8">
                <GiSplitCross style={{width:"30px", height:"30px"}}/>
                </div>
            </div>

            <div className="">
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Dashboard')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Product')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Sales')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Customers')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Sellers')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Uploading_files')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Reports')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Marketing')}
                    </div>
                    <div onClick={()=>setShowDropdown(!showDropdown)} className="flex py-1 font-bold justify-center cursor-pointer">
                        {t('Addon_Manager')}
                    </div>
            </div>
        </div>
    )
}

export default Dropdown
