import { SYMBOL_O, SYMBOL_X } from './constants';

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return 'text-[green]';
    if (symbol === SYMBOL_X) return 'text-[red]';
    return '';
  };

  return (
    <span className={`text-lg  ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
}
