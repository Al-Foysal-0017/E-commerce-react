import React from 'react'
import { FaShopify, FaMoneyBillWave, FaDolly } from 'react-icons/fa';
import { ImManWoman } from 'react-icons/im';
import { useTranslation } from 'react-i18next'

const Top4items = () => {
    const { t } = useTranslation()
    return (
        <>
           <div className="pt-10">
                <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                            {/* NEW ORDERS*/}
                            <div className="bg-violetDB text-white shadow-xl py-4 px-5 rounded">
                                <div className="flex justify-between items-center ">
                                <div>
                                <div className="text-blue text-sm font-semibold">{t('NEW_ORDERS')}</div>
                                <div className="text-2xl font-semibold">35673</div>
                                <div className="text-xs">200% (30 {t('days')})</div>
                                </div>
                                <div><FaShopify style={{height:"35px", width:"35px"}}/></div>
                                </div>
                                <div className="w-full mt-2 h-20"></div>
                            </div>
                            {/* TOTAL INCOME */}
                            <div className="bg-greenDB text-white shadow-xl py-4 px-5 rounded">
                                <div className="flex justify-between items-center ">
                                <div>
                                <div className="text-blue text-sm font-bold">{t('TOTAL_INCOME')}</div>
                                <div className="text-2xl font-bold">$ 1,496</div>
                                <div className="text-xs">200% (30 {t('days')})</div>
                                </div>
                                <div><FaMoneyBillWave style={{height:"35px", width:"35px"}}/></div>
                                </div>
                                <div className="w-full mt-2 h-20"></div>
                            </div>
                            {/* TOTAL SALES */}
                            <div className="bg-blueDB text-white shadow-xl py-4 px-5 rounded">
                                <div className="flex justify-between items-center ">
                                <div>
                                <div className="text-blue text-sm font-bold"> {t('TOTAL_SALES')}</div>
                                <div className="text-2xl font-bold">84566</div>
                                <div className="text-xs">200% (30 {t('days')})</div>
                                </div>
                                <div><FaDolly style={{height:"35px", width:"35px"}}/></div>
                                </div>
                                <div className="w-full mt-2 h-20"></div>
                            </div>
                            {/* TOTAL CUSTOMER */}
                            <div className="bg-yellowDB text-white shadow-xl py-4 px-5 rounded">
                                <div className="flex justify-between items-center ">
                                <div>
                                <div className="text-blue text-sm font-bold">{t('TOTAL_CUSTOMER')}</div>
                                <div className="text-2xl font-bold">98545</div>
                                <div className="text-xs">200% (30 {t('days')})</div>
                                </div>
                                <div><ImManWoman style={{height:"35px", width:"35px"}}/></div>
                                </div>
                                <div className="w-full mt-2 h-20"></div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}

export default Top4items
