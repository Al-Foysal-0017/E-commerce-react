import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { FaRegBell } from 'react-icons/fa';
import { FaAngleDown} from 'react-icons/fa';
import { CgMenu} from 'react-icons/cg';

const languages = [
    { 
      key: '222',
      code: 'en',
      text: 'English',
      name: 'English',
      country_code: 'gb',
    },
    {
      key: '111',
      code: 'sa',
      text: 'Arabic',
      dir: 'rtl',
      country_code: 'sa',
      name: 'Arabic',
    },
  ]


const Navbar = ({showDropdown, setShowDropdown}) => {
    const [showLang, setShowLang] = React.useState(false);
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    // console.log("currentLanguageCode:>>>>",currentLanguageCode)
    
    useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        // document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <>
        <div className="pt-5">
            <div className="flex flex-col lg:flex-row bg-white py-3 rounded shadow-md">
                {/* Search Box*/}
                 <div className="w-full px-5 lg:w-1/2 flex justify-center items-center">
                        <input className={currentLanguageCode==="sa"? "text-sm flex w-full px-5 cursor-pointer border border-black rounded-r py-2":"text-sm flex w-full px-5 cursor-pointer border border-black rounded-l py-2"}/>
                        <div className="h-full flex items-center">
                            <div style={{marginRight:"-2px", marginLeft:"-3px",paddingTop:"9px", paddingBottom:"9px"}} className={currentLanguageCode==="sa"? "text-sm border-black rounded-l bg-gray-400 text-white px-6":"text-sm  border-black rounded-r bg-gray-400 text-white px-6"}>
                                {t('search')}
                            </div> 
                        </div>
                        {/* Set Dropdown */}
                        <div onClick={()=>{setShowDropdown(!showDropdown)}} className="flex md:hidden mx-2 cursor-pointer rounded-full p-2 shadow-md border border-black">
                            <div className=""><CgMenu style={{height:"22px", width:"22px"}}/></div>
                        </div>
                    </div>

                <div className="w-full pt-3 lg:pt-0 lg:w-1/2 flex justify-center lg:justify-end items-center">
                    {/* Notification Button */}
                    <div className="">
                        <div className={currentLanguageCode==="sa"?"h-12 w-12 rounded-full flex justify-center items-center cursor-pointer":"ml-5 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer"}>
                        <div className="h-2 bg-black animate-ping w-2 absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                        <div className="h-2 w-2 bg-black absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                        <FaRegBell className="" style={{height:"20px", width:"20px"}}/>
                        </div>
                    </div>
                        <div onClick={()=>{setShowLang(!showLang)}} className={currentLanguageCode==="sa"?"flex items-center cursor-pointer border px-1 py- ml-8 rounded":"flex items-center cursor-pointer border px-1 py- ml-2 mr-7 rounded"}>
                        {currentLanguageCode === "sa" ?
                            <>
                            <img src="https://www.countryflags.io/sa/flat/32.png" alt="" style={{width:"25px", height:"26px", borderRadius:"25px", marginRight:"3px"}} />
                            <div className="text-xs px-1">عربى</div>
                            <div className="mr-2"><FaAngleDown/></div>
                            </>
                            :
                            <>
                            <img src="https://www.countryflags.io/gb/flat/32.png" alt="" style={{width:"25px", height:"26px", borderRadius:"25px", marginRight:"3px"}} />
                            <div className="text-xs px-1">English</div>
                            <div className="ml-2"><FaAngleDown/></div>
                            </>
                        }
                        
                        {showLang &&
                            <div className="bg-white py-3 rounded text-black border border-black mt-32 shadow-2xl absolute">
                                <div onClick={()=>{i18next.changeLanguage("sa")} } className="flex h-8 items-center justify-center px-5 hover:bg-gray-100">
                                    <img src="https://www.countryflags.io/sa/flat/32.png" alt="" style={{width:"25px", height:"25px", borderRadius:"25px",  marginRight:"3px"}} />
                                    <div className="text-xs px-1">عربى</div>
                                </div>
                                <div onClick={()=>{i18next.changeLanguage("en")}} className="flex h-8 items-center justify-center px-5 hover:bg-gray-100">
                                    <img src="https://www.countryflags.io/gb/flat/32.png" alt="" style={{width:"25px", height:"25px", borderRadius:"25px",  marginRight:"3px"}} />
                                    <div className="text-xs px-1">English</div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="">
                    {/* User's Image */}
                    <img style={{height:"35px", width:"35px", objectFit:"cover"}} className="shadow-md  rounded-full " src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    </div>
                    {/* User's Name */}
                    <div className={currentLanguageCode==="sa"?"text-sm font-semibold pl-8 pr-3":"text-sm font-semibold pl-3 pr-8"}>
                        {t('userName')}
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Navbar
