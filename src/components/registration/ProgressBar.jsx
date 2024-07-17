import {Main, StepContainer, StepWrapper, StepStyle, CheckMark, StepLabelContainer, StepLabel } from "./ProgressBar.styled.js"




const ProgressBar = ({steps, active}) => {

    
    
    return (
        <Main>
            <StepContainer $step={(100/(steps.length - 1))*(active - 1)}>
                {
                    steps.map((step, idx) => {
                        return (
                            <StepWrapper key={idx}>
                                <StepStyle $step={step.stepNumber} $active={active}>
                                    {step.stepNumber >= active ? <div>{step.stepNumber}</div> : <CheckMark>L</CheckMark>}   
                                </StepStyle>
                                <StepLabelContainer>
                                    <StepLabel>{step.label}</StepLabel>
                                </StepLabelContainer>
                            </StepWrapper>
                        )
                    })
                }
            </StepContainer>
        </Main>
    )
}

export default ProgressBar;