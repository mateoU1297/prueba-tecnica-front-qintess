/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import OriginPage from './OriginPage';

jest.mock('axios'); // Mockear axios

describe('OriginPage', () => {
  test('should render origin page with data', async () => {
    const mockLocation = {
      state: {
        name: 'TestName',
        image: 'test.jpg',
        status: 'TestStatus',
        species: 'TestSpecies',
        gender: 'TestGender',
      },
    };
    
    // Mockear useLocation para simular el estado de la ubicación
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <OriginPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const nameElement = screen.queryByText('TestName');
      const imageElement = screen.queryByAltText('TestName');
      const statusElement = screen.queryByText(/TestStatus/i);
      const speciesElement = screen.queryByText(/TestSpecies/i);
      const genderElement = screen.queryByText(/TestGender/i);

      expect(nameElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(statusElement).toBeInTheDocument();
      expect(speciesElement).toBeInTheDocument();
      expect(genderElement).toBeInTheDocument();
    });

    expect(axios.get).not.toHaveBeenCalled(); // Verificar que axios.get no haya sido llamado
  });
});
