import brookie from "../images/brookie.jpeg"

export type DogResponse = {
    url: string;
}

export type DogResponseArray = DogResponse[];

export const DogResponseInitState: DogResponseArray = [
        {
            url: brookie
        }
    ]

