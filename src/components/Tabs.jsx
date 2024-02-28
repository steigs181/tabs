import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Tabs = (props) => {
    const {getAllTabs, currentTab, setCurrentTab} = props;

    
    const tabStyling = (index) => {
        if (index === currentTab) {
            return "selectedTab";
        }
        else {
            return "unSelectedTab";
        }
    }
    
    const setSelectedTab = (index) => {
        setCurrentTab(index);
    }

    return (
        <div style={{textAlign: "left", display: "flex", justifyContent: "space-between"}}>
            {
                getAllTabs.map((item, index) =>(
                    <motion.div 
                    className={`tab ${tabStyling(index)}`} onClick={ (e) => setSelectedTab(index) }
                    whileHover={{ scale: 1.2, rotate: 25 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -45,
                        
                    }}
                    >
                        {item.label}
                    </motion.div>
                ))
            }
        </div>
    )
}
export default Tabs