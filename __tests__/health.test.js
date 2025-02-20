import getHealthStatus from '../src/health';

describe('Health Status', () => {
  test('>50 = healthy', () => {
    expect(getHealthStatus({ health: 90 })).toBe('healthy');
  });

  test('15-50 = wounded', () => {
    expect(getHealthStatus({ health: 50 })).toBe('wounded');
    expect(getHealthStatus({ health: 15 })).toBe('wounded');
  });

  test('<15 = critical', () => {
    expect(getHealthStatus({ health: 10 })).toBe('critical');
  });
});