import { render, fireEvent, waitFor } from '@testing-library/react-native';
import FormItem from '../FormItem'; // Ajusta esta ruta según la ubicación real del componente

describe('FormItem Component', () => {
  it('renders inputs and submit button correctly', () => {
    const { getByPlaceholderText, getByText } = render(<FormItem />);

    expect(getByPlaceholderText('First name')).toBeTruthy();
    expect(getByPlaceholderText('Last name')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();
  });

  it('allows typing in both inputs', () => {
    const { getByPlaceholderText } = render(<FormItem />);

    const firstNameInput = getByPlaceholderText('First name');
    const lastNameInput = getByPlaceholderText('Last name');

    fireEvent.changeText(firstNameInput, 'Juan');
    fireEvent.changeText(lastNameInput, 'Pérez');

    expect(firstNameInput.props.value).toBe('Juan');
    expect(lastNameInput.props.value).toBe('Pérez');
  });

  it('shows error when submitting without first name', async () => {
    const { getByText, findByText } = render(<FormItem />);

    fireEvent.press(getByText('Submit'));

    expect(await findByText('This is required.')).toBeTruthy();
  });

  it('does not show error when first name is filled', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<FormItem />);

    fireEvent.changeText(getByPlaceholderText('First name'), 'María');
    fireEvent.press(getByText('Submit'));

    await waitFor(() => {
      expect(queryByText('This is required.')).toBeNull();
    });
  });

  it('calls console.log on valid submit with correct values', async () => {
    const { getByPlaceholderText, getByText } = render(<FormItem />);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.changeText(getByPlaceholderText('First name'), 'Ana');
    fireEvent.changeText(getByPlaceholderText('Last name'), 'Ramírez');
    fireEvent.press(getByText('Submit'));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith({
        firstName: 'Ana',
        lastName: 'Ramírez',
      });
    });

    consoleSpy.mockRestore();
  });
});