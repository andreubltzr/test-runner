import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { suma, resta, multiplicacion, division, modulo } from './index.js';

describe('test de funciones', () => {
  it('debe sumar dos numeros', () => {
    const a = 5;
    const b = 5;
    assert.strictEqual(suma(a, b), 10);
  });

  it('debe restar dos numeros', () => {
    const a = 8;
    const b = 4;
    assert.strictEqual(resta(a, b), 4);
  });

  it('debe multiplicar dos numeros', () => {
    const a = 6;
    const b = 2;
    assert.strictEqual(multiplicacion(a, b), 12);
  });

  it('debe dividir dos numeros', () => {
    const a = 20;
    const b = 2;
    assert.strictEqual(division(a, b), 10);
  });

  it('debe calcular modulo entre dos numeros', () => {
    const a = 10;
    const b = 2;
    assert.strictEqual(modulo(a, b), 0);
  });
});
