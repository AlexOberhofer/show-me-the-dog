import styled from "styled-components";
import {ReactElement, useState} from "react";

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
  
`

export const HomePage = (): ReactElement => {

    const [dogObject, setDogObject] = useState({});

    const onClickBtn = (): void => {
        getDogURL();
    }

    const getDogURL = async (): Promise<void> => {
        const rDog = await fetch(`https://api.thedogapi.com/v1/images/search`)
            .then(res => res.json())

        setDogObject(rDog);
        console.log(rDog);
    }

    return (
        <AppContainer>

            <HeaderContainer>
                <h1>Show Me The Dog</h1>
                <h3>...and do it now</h3>
            </HeaderContainer>

            <ContentContainer>
                <p>Dog Picture Here....</p>
                <DogImage src={`https://cdn2.thedogapi.com/images/zHwi3vVju.jpg`} />
                <DogButton onClick={getDogURL}>SHOW ME THE DOG</DogButton>

            </ContentContainer>

        </AppContainer>


    )
}

export default HomePage