import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 30px;
`

export const StepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position:relative;
    &:before {
        content: '';
        position: absolute;
        background: #ccc;
        height: 4px;
        width: 100%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    &:after {
        content: '';
        position: absolute;
        background: orange;
        height: 4px;
        width: ${props => props.$step}%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`

export const StepWrapper = styled.div`
    position: relative;
    z-index: 1;
`

export const StepStyle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee;
    border: 2px solid ${props => props.step > props.activeStep ? "#ddd" : "orange"};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StepLabelContainer = styled.div`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const StepLabel = styled.div`
    text-wrap: nowrap;
    font-size: 19px;
    color: #777;
`

export const CheckMark = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: tomato;
    transform: scaleX(-1) rotate(-46deg);
`

