import { render, screen } from '@testing-library/react';
import App from './App';
import Education from '../../frontend/src/landing_page/home/Education'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

 test('renders holdings', () => {
    render(<Education/>)
    const EducationImage = screen.getByAltText( "Education Image" )
    expect(EducationImage).toHaveAttribute("src",'/media/images/education.svg')
})
