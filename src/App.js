import { useState } from 'react'
import Tab from './components/Tab'

const tabs = ['Hesabım', 'Şirket', 'Ekip Üyeleri', 'Faturalama']

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('Hesabım')

  return (
    <>
      <h1 className="flex justify-center my-8">
        {`Şu anda ${currentTab} sekmesindesiniz`}
      </h1>
      <div className="flex justify-center my-8">
        <div className="flex space-x-10" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setCurrentTab(tab)
              }}
              className={`${
                tab === currentTab
                  ? 'bg-indigo-200 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700 hover:scale-105'
              } rounded-md px-3 py-2 text-sm font-medium`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        <Tab tab={currentTab} />
      </div>
    </>
  )
}
