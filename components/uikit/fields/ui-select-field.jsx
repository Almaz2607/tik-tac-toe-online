import { UiFieldLabel } from './ui-field-label';
import { UiFieldMessage } from './ui-field-message';
import { UiSelect } from './ui-select';

/**
 *  Select field component with label and error/helper message
 *
 * @param {{
 * label: string,
 * required: boolean,
 * helperText: string,
 * errorText: string,
 * className: string,
 * options: Array
 * }} props
 * @returns {JSX.Element} The select field component
 */

export function UiSelectField({
  label,
  required,
  helperText,
  errorText,
  className,
  options,
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiSelect className="mt-1" options={options} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
