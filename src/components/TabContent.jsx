import React from 'react'

function TabContent(props) {
    const {getAllTabs, currentTab} = props;
  return (
    <div className="tab-content">
        {getAllTabs[currentTab].content}
    </div>
  )
}

export default TabContent