import { render, screen } from '@testing-library/react'
import Home from '../pages/strona_glowna'

describe('Home', () => {
  it('Header powienien zawierać Döner Kebab', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Döner Kebab/i,
    })

    expect(heading).toBeInTheDocument()
  })
  it('Header powienien zawierać Galeria Produktów', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Galeria Produktów/i,
    })

    expect(heading).toBeInTheDocument()
  })
  it('Header powienien zawierać ZOSTAŃ PRACOWNIKIEM', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /ZOSTAŃ PRACOWNIKIEM/i,
    })

    expect(heading).toBeInTheDocument()
  })
})