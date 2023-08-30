import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { charracterResponse } from '../mocks/responses';
import CharacterPage from './CharacterPage';



describe('CharacterPage', () => {
    test('should render characters', async () => {

        const spyAxios = jest.spyOn(axios, 'get').mockResolvedValue(charracterResponse)

        render(
            <CharacterPage />
        )

        await waitFor(() => {
            const rick = screen.queryByText('Rick Sanchez')
            expect(rick).toBeDefined()
        });

        const agency =  screen.queryByText('Agency Director')
        expect(agency).toBeDefined()
        expect(spyAxios).toBeCalledWith('http://localhost:8080/api/characters')
        
    })

})
