import { getGreeting } from '../support/app.po';

describe('styleguide-static', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to styleguide-static!');
  });
});
