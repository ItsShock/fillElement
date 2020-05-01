const fillElement = require('..');
const { toBeEmpty, toHaveTextContent } = require('@testing-library/jest-dom/matchers');

expect.extend({ toBeEmpty, toHaveTextContent });

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Funkcja fillElement', () => {
  it('powinna zwracać element HTML', async () => {
    const result = fillElement('test');

    expect(result instanceof HTMLElement).toBeTruthy();
  });

  it('powinna zwracać element HTML, który nie jest pusty', async () => {
    const span = fillElement('test');
    document.body.innerHTML += `
      <div id="test"></div>
    `;
    document.querySelector('#test').appendChild(span);
    const result = document.querySelector('#test > span');

    if (result.innerText) {
      expect(result.innerText).not.toEqual('');
    } else {
      expect(result).not.toBeEmpty();
    }
  });

  it('powinna zwracać element HTML z tekstem otrzymanym w parametrze funkcji', async () => {
    const span = fillElement('Ala ma kota');
    document.body.innerHTML += `
      <div id="test"></div>
    `;
    document.querySelector('#test').appendChild(span);
    const result = document.querySelector('#test > span');

    if (result.innerText) {
      expect(result.innerText).toEqual('Ala ma kota');
    } else {
      expect(result).toHaveTextContent('Ala ma kota');
    }
  });
});
