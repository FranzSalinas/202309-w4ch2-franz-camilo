import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserForm } from './userform';

describe('UserForm Component', () => {
  describe('when submitting the form with valid data', () => {
    beforeEach(() => {
      render(<UserForm></UserForm>);
    });

    test('it should render input and button', () => {
      const nameInput = screen.getByLabelText('Nombre') as HTMLFormElement;
      const submitButton = screen.getByText('Enviar');
      const form = screen.getByRole('form');
      expect(nameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(form).toBeInTheDocument();
    });
  });
});
