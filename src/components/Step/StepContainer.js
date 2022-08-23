import React, { useState } from 'react'
import StepProgress from './StepProgress'
import StepForm from './StepForm1'
import ProgressControl from './ProgressControl'
// import styles from './App.module.css'

const StepContainer = () => {
  const [nowPage, setNowPage] = useState('address')

  const ClickHandler = (nowForm) => {
    setNowPage(nowForm)
  }

  return (
    <>
      <StepProgress />
      <StepForm nowForm={nowPage} />
      <ProgressControl nowForm={nowPage} onClick={ClickHandler} />
    </>
  )
}

export default StepContainer
