import React from 'react'
import { useTranslation } from 'react-i18next'

const CloselyGraph = () => {
    const { t } = useTranslation()
    return (
        <>
           <div className="bg-white shadow-xl rounded mt-5">
                <div className="pt-6 px-5 pb-3 border-b border-black">
                    {t('Closely_Graph_Analysis')}
                </div>
                <div className="bg-white rounded-b h-96"></div>
            </div> 
        </>
    )
}

export default CloselyGraph
