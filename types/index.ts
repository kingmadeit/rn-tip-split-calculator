import { Dispatch, SetStateAction } from 'react'

type CalculatorType = 'tip' | 'split';


type TabsProp = {
  tabs: CalculatorType[],
  activeTab: string,
  setActiveTab: Dispatch<SetStateAction<CalculatorType>>
  
}


type CustomPickerProps = {
  pickers: PickerProps[]
}

type PickerProps = {
  data: string[];
  icon?: string;
  active: string;
  onValueChange: (value: string) => void,
}
type NumberPadProps = {
  amount: string;
  setAmount:Dispatch<SetStateAction<string>>
  
}
export {
  CalculatorType,
  TabsProp,
  CustomPickerProps,
  PickerProps,
  NumberPadProps
}

