export type Difficulty = 'easy' | 'medium' | 'hard';

export const difficultyAttempts: Record<Difficulty, number> = {
  easy: 10,
  medium: 7,
  hard: 5,
};

export function generateSecret(min = 1, max = 100) {
  // inclusive random integer between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function validateGuess(value: string | number) {
  const n = typeof value === 'number' ? value : Number(value);
  if (Number.isNaN(n)) return { ok: false, reason: 'not-a-number' };
  if (!Number.isInteger(n)) return { ok: false, reason: 'not-integer' };
  if (n < 1 || n > 100) return { ok: false, reason: 'out-of-range' };
  return { ok: true, value: n };
}
