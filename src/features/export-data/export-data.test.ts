// exportData.test.ts
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { iPerson } from '../../shared/interfaces/start-wars.interface';
import exportData from './export-data';

// Mock data for testing
const mockData: iPerson[] = [
  {
    name: 'Luke Skywalker',
    gender: 'male',
    height: '172',
    mass: '77',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: ''
  },
  {
    name: 'Darth Vader',
    gender: 'male',
    height: '202',
    mass: '136',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: ''
  }
  // Add more mock data as needed
];

describe('exportData', () => {
  let originalCreateObjectURL: typeof URL.createObjectURL;

  beforeAll(() => {
    // Save the original method
    originalCreateObjectURL = URL.createObjectURL;
    // Mock the method
    URL.createObjectURL = vi.fn();
  });

  afterAll(() => {
    // Restore the original method
    URL.createObjectURL = originalCreateObjectURL;
  });

  it('should export data to CSV format', () => {
    const spyCreateElement = vi.spyOn(document, 'createElement');
    const spyCreateObjectURL = vi.spyOn(URL, 'createObjectURL');
    const spyAppendChild = vi.spyOn(document.body, 'appendChild');
    const spyRemoveChild = vi.spyOn(document.body, 'removeChild');
    const spyClick = vi.spyOn(HTMLElement.prototype, 'click');

    exportData(mockData);

    // Check if functions were called with the correct arguments
    expect(spyCreateElement).toHaveBeenCalled();
    expect(spyCreateElement.mock.calls[0][0]).toBe('a');
    expect(spyCreateObjectURL).toHaveBeenCalled();
    expect(spyAppendChild).toHaveBeenCalled();
    expect(spyRemoveChild).toHaveBeenCalled();
    expect(spyClick).toHaveBeenCalled();

    // Additional assertions for content validation can be added based on your needs

    // Cleanup
    spyCreateElement.mockRestore();
    spyCreateObjectURL.mockRestore();
    spyAppendChild.mockRestore();
    spyRemoveChild.mockRestore();
    spyClick.mockRestore();
  });
});
