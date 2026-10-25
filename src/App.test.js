// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Mosaic title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Mosaic/i);
    expect(titleElement).toBeInTheDocument();
});
