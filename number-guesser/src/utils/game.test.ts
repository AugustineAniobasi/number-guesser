/// <reference types="vitest/globals"/>
// src/utils/game.test.ts
import { generateSecret, validateGuess } from './game';

describe('generateSecret', () => {
  test('generates numbers within range', () => {
    for (let i=0;i<100;i++){
      const s = generateSecret(1,100);
      expect(typeof s).toBe('number');
      expect(s).toBeGreaterThanOrEqual(1);
      expect(s).toBeLessThanOrEqual(100);
    }
  });
});

describe('validateGuess', () => {
  test('rejects non-number', () => {
    expect(validateGuess("abc").ok).toBe(false);
  });
  test('rejects float', () => {
    expect(validateGuess("12.5").ok).toBe(false);
  });
  test('rejects out of range', () => {
    expect(validateGuess(0).ok).toBe(false);
    expect(validateGuess(101).ok).toBe(false);
  });
  test('accepts valid integer', () => {
    const r = validateGuess("50");
    expect(r.ok).toBe(true);
    expect(r.value).toBe(50);
  });
});
