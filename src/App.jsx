import React, { useState } from 'react'
import Tabs from './components/Tabs'
import TabContent from './components/TabContent';
import './App.css'

function App() {
  const tabsArr = [
    {label: "Tab 1", content:"Go Bills!"},
    {label: "Tab 2", content: "Go Sabres"},
    {label: "Tab 3", content: "Chicken wings and bleu Cheese, frick ranch"},
  ];

  const [getAllTabs, setAllTabs] = useState(tabsArr);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
    <div className="App">
        <Tabs
          getAllTabs = {getAllTabs}
          currentTab = {currentTab}
          setCurrentTab = {setCurrentTab}
        />

        <TabContent
        getAllTabs = {getAllTabs}
        currentTab = {currentTab} 
        />
    </div>
    </>
  )
}

export default App
