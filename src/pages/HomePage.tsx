import styled from "styled-components";
import {ReactElement, useState} from "react";
import {DogResponseInitState} from "../types/types";
import axios from "axios";
import Button from '@material-ui/core/Button';

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

const DogButton = styled(Button)`
  width: fit-content;
  align-self: center;
  padding-bottom: 5rem;
`

const DogImage = styled.img`
  display: flex;
  max-width:640px;
  max-height:400px;
  width: auto;
  height: auto;
  margin-top: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const HomePage = (): ReactElement => {

    const [dogObject, setDogObject] = useState(DogResponseInitState);

    const getDogURL = async (): Promise<void> => {
        await axios.get(`https://api.thedogapi.com/v1/images/search`)
            .then(res => {
                const rDog = res.data;
                setDogObject(rDog);
            })
    }

    return (
        <AppContainer>

            <HeaderContainer>
                <h1>Show Me The Dog</h1>
                <h3>...and do it now</h3>
            </HeaderContainer>

            <DogButton variant="contained" color="primary" onClick={getDogURL}>SHOW ME THE DOG</DogButton>

            <ContentContainer>
                <DogImage src={dogObject[0].url} />
            </ContentContainer>

        </AppContainer>
    )
}

export default HomePage