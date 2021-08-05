import React from 'react'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

const SummaryAndSelling = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()
    const [summaryItem, setSummaryItem] = React.useState("Product")
    return (
        <>
          <div className="flex mt-5 flex-col lg:flex-row">
              {/* SUMMERY */}
                       <div className={currentLanguageCode==="sa"?"w-full lg:w-1/2 pr-0 lg:pl-2":"w-full lg:w-1/2 pr-0 lg:pr-2"}>
                           <div className="bg-white shadow-xl rounded">
                               <div className="pt-4 pb-6 px-5 border-b border-black">{t('Summary')}</div>
                               <div style={{paddingTop:"13px", paddingBottom:"14px"}} className="rounded-b px-5 bg-white">
                                   <div style={{display:"flex", flexWrap:"wrap",}} className="justify-center grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                                   {/* Product */}
                                   <div onClick={()=>{setSummaryItem("Product")}} className={summaryItem==="Product" ? "cursor-pointer shadow-md py-4 px-5 border-t-2 border-red-500 bg-gray-100 rounded" : "cursor-pointer py-4 px-5 rounded border-t-2 border-white"}>
                                        <div className="items-center ">
                                        <div className="text-sm font-semibold">$12,920</div>
                                        <div className="text-xs text-gray-400">{t('Product')}</div>
                                        </div>
                                    </div>
                                    {/* Sales */}
                                    <div onClick={()=>{setSummaryItem("Sales")}} className={summaryItem==="Sales" ? "cursor-pointer shadow-md py-4 px-5 border-t-2 border-red-500 bg-gray-100 rounded" : "cursor-pointer py-4 px-5 rounded border-t-2 border-white"}>
                                        <div className="items-center ">
                                        <div className="text-sm font-semibold">64,54M</div>
                                        <div className="text-xs text-gray-400">{t('Sales')}</div>
                                        </div>
                                    </div>
                                    {/* Cost */}
                                    <div onClick={()=>{setSummaryItem("Cost")}} className={summaryItem==="Cost" ? "cursor-pointer shadow-md py-4 px-5 border-t-2 border-red-500 bg-gray-100 rounded" : "cursor-pointer py-4 px-5 rounded border-t-2 border-white"}>
                                        <div className="items-center ">
                                        <div className="text-sm font-semibold">2,439 B</div>
                                        <div className="text-xs text-gray-400">{t('Cost')}</div>
                                        </div>
                                    </div>
                                    {/* Revenue */}
                                    <div onClick={()=>{setSummaryItem("Revenue")}} className={summaryItem==="Revenue" ? "cursor-pointer shadow-md py-4 px-5 border-t-2 border-red-500 bg-gray-100 rounded" : "cursor-pointer py-4 px-5 rounded border-t-2 border-white"}>
                                        <div className="items-center ">
                                        <div className="text-sm font-semibold">3,672 M</div>
                                        <div className="text-xs text-gray-400">{t('Revenue')}</div>
                                        </div>
                                    </div>

                                   </div>
                               </div>
                               <div className="rounded-b pt-4 pb-6 px-5 h-60 bg-gray-100">
                                   {/* CHART */}
                               </div>
                           </div>
                       </div>
                {/* Top Selling */}
                       <div className={currentLanguageCode==="sa"?"w-full lg:w-1/2 pl-0 pt-5 lg:pt-0 lg:pr-2":"w-full lg:w-1/2 pl-0 pt-5 lg:pt-0 lg:pl-2"}>
                            <div className="bg-white shadow-xl rounded">
                               <div className="pt-4 pb-6 px-5 border-b border-black">{t('Top_Selling')}</div>
                               <div className="flex text-xs text-gray-400 flex-col">
                                   {/* Product-01 */}
                                   <div className="flex h-28 border-b border-black items-center px-5 justify-between">
                                       <div className="flex">
                                           <div className="h-20 rounded w-24 bg-gray-200"></div>
                                           <div className="px-5 flex flex-col justify-center">
                                               <div className="text-base font-medium text-black">{t('Product_name')}</div>
                                               <div className="">{t('feature_of_product')}</div>
                                               <div className="">{t('specifation_of_the_product')}</div>
                                           </div>
                                       </div>
                                       <div className="">
                                           <div className="text-base font-medium text-black">$129.00</div>
                                           <div className="">{t('Sales')}</div>
                                       </div>
                                   </div>
                                   {/* Product-02 */}
                                   <div className="flex h-28 border-b border-black items-center px-5 justify-between">
                                       <div className="flex">
                                           <div className="h-20 rounded w-24 bg-gray-200"></div>
                                           <div className="px-5 flex flex-col justify-center">
                                               <div className="text-base font-medium text-black">{t('Product_name')}</div>
                                               <div className="">{t('feature_of_product')}</div>
                                               <div className="">{t('specifation_of_the_product')}</div>
                                           </div>
                                       </div>
                                       <div className="">
                                           <div className="text-base font-medium text-black">$129.00</div>
                                           <div className="">{t('Sales')}</div>
                                       </div>
                                   </div>
                                   {/* Product-03 */}
                                   <div className="flex h-28 items-center px-5 justify-between">
                                       <div className="flex">
                                           <div className="h-20 rounded w-24 bg-gray-200"></div>
                                           <div className="px-5 flex flex-col justify-center">
                                               <div className="text-base font-medium text-black">{t('Product_name')}</div>
                                               <div className="">{t('feature_of_product')}</div>
                                               <div className="">{t('specifation_of_the_product')}</div>
                                           </div>
                                       </div>
                                       <div className="">
                                           <div className="text-base font-medium text-black">$129.00</div>
                                           <div className="">{t('Sales')}</div>
                                       </div>
                                   </div>
                               </div>
                              
                           </div>
                       </div>
                   </div>  
        </>
    )
}

export default SummaryAndSelling

