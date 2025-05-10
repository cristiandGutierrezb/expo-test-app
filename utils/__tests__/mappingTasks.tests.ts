// clearInformationTasks.test.ts
import { clearInformationTasks } from '../mappingTasks';

describe('clearInformationTasks', () => {
  it('should transform task objects correctly', () => {
    const input = [
      { id_task: 1, description: 'Test Task 1', state_id: 1 },
      { id_task: 2, description: 'Test Task 2', state_id: 2 },
    ];

    const expectedOutput = [
      { id: 1, text: 'Test Task 1', completed: true },
      { id: 2, text: 'Test Task 2', completed: false },
    ];

    const result = clearInformationTasks(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when input is empty', () => {
    expect(clearInformationTasks([])).toEqual([]);
  });

  it('should handle undefined or null state_id', () => {
    const input = [
      { id_task: 3, description: 'No State', state_id: null },
    ];

    const expected = [
      { id: 3, text: 'No State', completed: false },
    ];

    expect(clearInformationTasks(input)).toEqual(expected);
  });
});