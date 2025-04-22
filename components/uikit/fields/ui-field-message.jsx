import clsx from 'clsx';

/**
 *
 * @param {{
 * helperText?: string,
 * errorText?: string,
 * }} props
 */

export function UiFieldMessage({ helperText, errorText }) {
  const isError = !errorText;
  const messageText = errorText || helperText;

  return (
    <p
      className={clsx(
        'mt-1 text-sm',
        isError ? 'text-orange-600' : 'text-slate-400',
      )}
    >
      {messageText}
    </p>
  );
}
