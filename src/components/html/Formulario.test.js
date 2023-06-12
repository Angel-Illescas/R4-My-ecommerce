import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Formulario from './Formulario';

describe('Formulario', () => {
  test('renders Formulario component', () => {
    render(<Formulario />);
    const titulo = screen.getByText('Registro de nuevo usuario');
    expect(titulo).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(<Formulario />);
    const nombreInput = screen.getByLabelText('Nombre del usuario');
    const apellidoInput = screen.getByLabelText('Apellido del usuario');
    const areaInput = screen.getByLabelText('Área de trabajo');
    const numeroTrabajadorInput = screen.getByLabelText('N° de trabajador');
    const correoInput = screen.getByLabelText('Correo electrónico');
    const contraseñaInput = screen.getByLabelText('Contraseña');
    const confirmarContraseñaInput = screen.getByLabelText('Confirmar Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrar' });

    fireEvent.change(nombreInput, { target: { value: 'Don Silverio' } });
    fireEvent.change(apellidoInput, { target: { value: 'Gaitan' } });
    fireEvent.change(areaInput, { target: { value: 'IT' } });
    fireEvent.change(numeroTrabajadorInput, { target: { value: '123' } });
    fireEvent.change(correoInput, { target: { value: 'don@gmail.com' } });
    fireEvent.change(contraseñaInput, { target: { value: '987654' } });
    fireEvent.change(confirmarContraseñaInput, { target: { value: '987654' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = screen.getByText('El registro de John ha sido éxitoso.');
      expect(successMessage).toBeInTheDocument();
    });
  });

  test('displays error messages for required fields', async () => {
    render(<Formulario />);
    const submitButton = screen.getByRole('button', { name: 'Registrar' });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const nombreError = screen.getByText('El nombre es requerido');
      const apellidoError = screen.getByText('El apellido es requerido');
      const areaError = screen.getByText('El área es requerida');
      const numeroTrabajadorError = screen.getByText('El número de trabajador es requerido');
      const correoError = screen.getByText('El correo electrónico es requerido');
      const contraseñaError = screen.getByText('La contraseña es requerida');
      const confirmarContraseñaError = screen.getByText('Debes confirmar tu contraseña');

      expect(nombreError).toBeInTheDocument();
      expect(apellidoError).toBeInTheDocument();
      expect(areaError).toBeInTheDocument();
      expect(numeroTrabajadorError).toBeInTheDocument();
      expect(correoError).toBeInTheDocument();
      expect(contraseñaError).toBeInTheDocument();
      expect(confirmarContraseñaError).toBeInTheDocument();
    });
  });
});
