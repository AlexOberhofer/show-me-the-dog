import styled from "styled-components";
import {ReactElement, useState} from "react";
import {DogResponseInitState} from "../types/types";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  align-content: center;
  text-align: center;
  align-self: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  align-content: center;
  
`

const DogButton = styled.button`
  width: fit-content;
  align-self: center;
  margin: 1rem;
  
`

const DogImage = styled.img`
  display: flex;
  max-width:640px;
  max-height:320px;
  width: auto;
  height: auto;
`

export const HomePage = (): ReactElement => {

    const [dogObject, setDogObject] = useState(DogResponseInitState);

    const getDogURL = async (): Promise<void> => {
        const rDog = await fetch(`https://api.thedogapi.com/v1/images/search`)
            .then(res => res.json())

        setDogObject(rDog);
    }

    return (
        <AppContainer>

            <HeaderContainer>
                <h1>Show Me The Dog</h1>
                <h3>...and do it now</h3>
            </HeaderContainer>

            <ContentContainer>
                <DogImage src={dogObject[0].url} />
            </ContentContainer>
            <DogButton onClick={getDogURL}>SHOW ME THE DOG</DogButton>
        </AppContainer>
    )
}

export default HomePage