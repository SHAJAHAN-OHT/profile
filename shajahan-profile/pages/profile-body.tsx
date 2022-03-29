import { useState } from "react"


const tabs = [
    { id: 0, name: 'About', current: false },
    { id: 1, name: 'Experience', current: false },
    { id: 2, name: 'Personal Projects', current: false },
    { id: 3, name: 'Qualification', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfileBody() {
    const [index, setIndex] = useState(0)
    const handler = (id) => {
        setIndex(id)
    }

    return (
        <div>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    // defaultValue={tabs.find((tab) => tab.current).name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name} >{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <a
                                    key={tab.name}
                                    
                                    className={classNames(
                                        tab.id == index
                                            ? 'border-indigo-500 text-indigo-600 hover:cursor-pointer'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:cursor-pointer hover:border-gray-300','whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                    )}
                                    onClick={() => handler(tab.id)}
                                >
                                    {tab.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            {
                index == 0 ? <div>
                    Home Page Info
                </div> : null
            }
            {
                index == 1 ? null : null
            }
            {
                index == 2 ? null : null
            }
            {
                index == 3 ? null : null
            }
        </div>
    )
}
