import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #cecece;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 100%;
    }


`

export const LoginWrapper = styled.div`
    width: 500px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding: 30px;
    margin: 100px 0;

    @media (max-width: 768px) {

        padding-top: 80px;
        width: 100vw;
        justify-content: center;
    }
`

export const Title = styled.div`
    font-size: 2em;
    font-weight: semi-bold;
    margin-bottom: 10px;
`

export const RegisterWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Text = styled.div`
    font-size: 1.2em;
    font-weight: semi-bold;
    margin-bottom: 10px;
`

export const LoadingWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Loader = styled.div`

    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        position: absolute;
        border: 4px solid #050505;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
    }
}
`

export const WrongCredentials = styled.span`
    color: red;
`