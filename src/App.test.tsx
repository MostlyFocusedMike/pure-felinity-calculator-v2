import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App';

describe('Test', () => {
  it('Renders an App', () => {
    render(<App />)
    expect(screen.queryByText('Pure Felinity Cat Breed Calculator')).toBeInTheDocument();
    expect(screen.queryByText('Calculate the best match ups!')).toBeInTheDocument();
  })
})