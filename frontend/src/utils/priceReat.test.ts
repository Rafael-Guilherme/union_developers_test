import { priceConvertedToReal } from './priceReal';

describe('priceConvertedToReal', () => {
  it('deve formatar um número para uma string no formato monetário brasileiro', () => {
    const price = 1234.56;

    const formattedPrice = priceConvertedToReal(price);

    const expectedPrice = parseFloat('1234.56');
    expect(parseFloat(formattedPrice.replace('R$', '').replace(/\./g, '').replace(',', '.'))).toBeCloseTo(expectedPrice);
  });

  it('deve retornar "Valor inválido" se o valor não for um número', () => {
    const invalidPrice = '1234.56';

    const formattedPrice = priceConvertedToReal(invalidPrice as unknown as number);

    expect(formattedPrice).toBe('Valor inválido');
  });
});
