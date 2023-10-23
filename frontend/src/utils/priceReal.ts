export function priceConvertedToReal(price: number) {
    if (typeof price !== 'number') {
      return 'Valor inválido';
    }
  
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  }
  