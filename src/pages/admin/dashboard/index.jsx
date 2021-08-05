import React from 'react'
import Bottom from '../../../Components/adminPanel/allComptDashboardPg/Bottom'
import CloselyGraph from '../../../Components/adminPanel/allComptDashboardPg/CloselyGraph'
import Header from '../../../Components/adminPanel/allComptDashboardPg/Header'
import RecentServey from '../../../Components/adminPanel/allComptDashboardPg/RecentServey'
import SummaryAndSelling from '../../../Components/adminPanel/allComptDashboardPg/SummaryAndSelling'
import Top4items from '../../../Components/adminPanel/allComptDashboardPg/Top4items'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../Components/adminPanel/Dropdown'

const Dashboard = () => {
    const [showDropdown, setShowDropdown]= React.useState(false)
    return (
        <div className="flex">
            {/* SetDropdown */}
            {showDropdown?<Dropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>:""}
     
            {/* Sidebar Component */}
            <Sidebar/>        


            <div className="bg-backgroundDB w-full px-8">
                {/* Navbar Component */}
                <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>

                {/* Header */}
                <Header/>
                     
                {/* Top 4 items- NewOrders, TotalIncomes, Total Sales, Total Customers */}
                <Top4items/>

                {/* Summary & Top Selling */}
                <SummaryAndSelling/>

                {/* OrderActivity RecentProduct RecentBuyers */}
                <RecentServey/>
       
                {/* Closely graph analysis */}
                <CloselyGraph/>

                {/* Bottom */}
                <Bottom/>

            </div>
        </div>
    )
}

export default Dashboard

