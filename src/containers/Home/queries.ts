import { gql } from 'apollo-boost';
export const GET_FILMS = gql`
    {
        allFilms {
            films {
                characterConnection {
                    characters {
                        id
                        name
                        species {
                            name
                        }
                    }
                }
            }
        }
    }
`;
