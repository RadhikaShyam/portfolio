import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('renders title and description', () => {
  render(<ProjectCard title="Test" description="Desc" link="#" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('Desc')).toBeInTheDocument();
});
