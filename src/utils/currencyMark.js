export default function currencyMark(currency) {
  switch (currency) {
    case 'KRW':
      return '₩';
    case 'USD':
      return '$';
    default:
      return '₩';
  }
}
