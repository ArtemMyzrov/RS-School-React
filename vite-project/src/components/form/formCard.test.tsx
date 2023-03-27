import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FormCards from './formCards';
import React from 'react';

describe('formCard test', () => {
  test('Should show title', () => {
    render(<FormCards items={[]} />);

    expect(<h2>Name :</h2>).toBeDefined();
  });
});
