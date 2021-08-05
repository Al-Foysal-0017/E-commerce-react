import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const RecentServey = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="pt-5">
                       <div className="flex flex-col lg:flex-row">
                           {/* Order Activity */}
                           <div className="w-full lg:w-4/12">
                               <div className="bg-white shadow-xl rounded h-52">
                                   <div className="flex px-5 py-3 border-b border-black justify-between">
                                       <div className="">{t('Order_Activity')}</div>
                                       <div className="">...</div>
                                   </div>
                                   <div className="mt-3 flex px-8 py-3 text-sm justify-between">
                                       <div className="">{t('Delevered')}</div>
                                       <div className="text-xs text-gray-400 flex items-center">25 {t('min_ago')}</div>
                                   </div>
                                   <div className="flex px-8 py-3 text-sm justify-between">
                                       <div className="">{t('Ongoing')}</div>
                                       <div className="text-xs text-gray-400 flex items-center">1 {t('hour_to_the_end')}</div>
                                   </div>
                                   <div className="flex px-8 py-3 text-sm justify-between">
                                       <div className="">{t('Starting')}</div>
                                       <div className="text-xs text-gray-400 flex items-center">{t('In')} 24 {t('hours')}</div>
                                   </div>
                               </div>
                           </div>
                           {/* Recent Products */}
                           <div className="w-full lg:w-4/12 my-5 lg:my-0 mx-0 lg:mx-4">
                               <div className="bg-white shadow-xl rounded h-52">
                                    <div className="flex px-5 py-3 border-b border-black justify-between">
                                       <div className="">{t('Recent_Products')}</div>
                                       <div className="">...</div>
                                   </div>

                                   <div className="">
                                       <div className="flex">
                                           <div className={currentLanguageCode==="sa"? "h-16 w-1/2 bg-gray-300 ml-1 mr-7 mt-2 rounded":"h-16 w-1/2 bg-gray-300 ml-7 mr-1 mt-2 rounded"}></div>
                                           <div className={currentLanguageCode==="sa"?"h-16 w-1/2 bg-gray-300 mr-1 ml-7 mt-2 rounded":"h-16 w-1/2 bg-gray-300 mr-7 ml-1 mt-2 rounded"}></div>
                                       </div>
                                       <div className="flex">
                                           <div className={currentLanguageCode==="sa"?"h-16 w-1/2 bg-gray-300 ml-1 mr-7 mt-2 rounded":"h-16 w-1/2 bg-gray-300 ml-7 mr-1 mt-2 rounded"}></div>
                                           <div className={currentLanguageCode==="sa"?"h-16 w-1/2 bg-gray-300 mr-1 ml-7 mt-2 rounded":"h-16 w-1/2 bg-gray-300 mr-7 ml-1 mt-2 rounded"}></div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           {/* Recent Buyers */}
                           <div className="w-full lg:w-4/12">
                               <div className="bg-white shadow-xl rounded h-52">
                                   <div className="flex px-5 py-3 border-b border-black justify-between">
                                       <div className="">{t('Recent_Buyers')}</div>
                                       <div className="">...</div>
                                   </div>
                                   <div className="mt-3 flex px-8 py- text-sm justify-between">
                                       <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                                       {/* <div className="text-xs text-gray-400 flex items-center">25 min ago</div> */}
                                   </div>
                                   <div className="flex px-8 py-2 text-sm justify-between">
                                       <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                                       {/* <div className="text-xs text-gray-400 flex items-center">1 hour to the end</div> */}
                                   </div>
                                   <div className="flex px-8 py- text-sm justify-between">
                                       <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                                       {/* <div className="text-xs text-gray-400 flex items-center">In 24 hours</div> */}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
        </>
    )
}

export default RecentServey
