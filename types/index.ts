import { Dispatch, SetStateAction } from 'react'

type CalculatorType = 'tip' | 'split';


type TabsProp = {
  tabs: CalculatorType[],
  activeTab: string,
  setActiveTab: Dispatch<SetStateAction<CalculatorType>>
  
}

export {
  CalculatorType,
  TabsProp
}