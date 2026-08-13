// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinDendrite title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinDendrite/i);
    expect(titleElement).toBeInTheDocument();
});
