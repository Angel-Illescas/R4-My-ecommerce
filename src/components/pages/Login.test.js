import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './Cerrar_page';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))
jest.mock('axios');

test('submits form with valid credentials', async () => {
  const mockedNavigate = jest.fn();
  const mockedDispatch = jest.fn();

  useNavigate.mockReturnValue(mockedNavigate);
  useDispatch.mockReturnValue(mockedDispatch);
  axios.get.mockResolvedValue({ data: [{ nombre: 'Angel Illescas' }] });

  const { getByLabelText, getByText } = render(<Login />);
  fireEvent.change(getByLabelText('correo'), { target: { value: 'a-a-ic@hotmail.com' } });
  fireEvent.change(getByLabelText('contraseña'), { target: { value: '123456' } });
  fireEvent.click(getByText('Iniciar Sesión'));

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  expect(mockedDispatch).toHaveBeenCalledWith({ type: 'INICIAR_SESION', payload: 'Angel Illescas' });
  expect(mockedNavigate).toHaveBeenCalledWith('/');
});
