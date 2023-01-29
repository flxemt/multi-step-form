import { useContext } from 'react'

import { StepContext } from '../context/StepContext'
import forms from '../data/forms'

function Buttons() {
  const { step, dispatchStep } = useContext(StepContext)
  const isLastStep = step.current === forms.length

  function goNext() {
    if (isLastStep) {
      dispatchStep({ type: 'COMPLETE' })
      return
    }

    dispatchStep({ type: 'GO_NEXT' })
  }

  function goBack() {
    dispatchStep({ type: 'GO_BACK' })
  }

  if (step.isCompleted) return

  return (
    <div className="px-4 flex bg-white p-4 font-medium text-body-m w-full fixed bottom-0 left-0 desktop:static desktop:p-0">
      {step.current > 1 && (
        <button className="text-gray hover:text-denim transition-colors" onClick={goBack} type="button">
          Go Back
        </button>
      )}
      <button
        className={`${
          isLastStep ? 'bg-purple hover:bg-purple-hover' : 'bg-denim hover:bg-denim-hover'
        } text-white px-4 py-3 ml-auto transition-colors rounded-small desktop:rounded-large desktop:px-6 desktop:py-[0.875rem]`}
        onClick={goNext}
        type="button"
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  )
}

export default Buttons
