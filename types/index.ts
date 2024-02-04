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

type TTipResult = {
  tip: string;
  amount: string;
}

type ResultProps = {
  results: TTipResult[] | number;
}

enum ETabs {
  tip='tip',
  split='split'
}

export {
  /// TYPES
  CalculatorType,
  TabsProp,
  CustomPickerProps,
  PickerProps,
  NumberPadProps,
  TTipResult,
  ResultProps,

  /// ENUMS
  ETabs
}

