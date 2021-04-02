import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/svelte';

import App from './App';

describe('The App component ', () => {
  test('renders without crashing', () => {
    render(App)
  });

  test('renders some number of produce checkboxes', () => {
    const { getAllByRole } = render(App);
    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  test('renders data attribution in footer', () => {
    const { getByText } = render(App);
    const link = getByText('Ontario.ca');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.ontario.ca/foodland/page/availability-guide');
  });
});
