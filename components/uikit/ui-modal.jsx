import clsx from 'clsx';
import { createPortal } from 'react-dom';

/**
 * @param{{
 * className: string,
 * width: 'md'| 'full',
 * isOpen: boolean,
 * onClose: Function
 * }} props
 * @returns
 */

export function UiModal({
  width = 'full',
  className,
  children,
  isOpen = false,
  onClose,
}) {
  if (!isOpen) return null;

  const handleClick = (e) => {
    const inModal = e.target.closest('[data-id=modal]');
    if (inModal) return;
    onClose();
  };

  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        'fixed inset-0 bg-slate-900/60 backdrop:blur pt-10 pb-10 overflow-y-auto',
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          'flex flex-col min-h-[320px] mx-auto rounded-lg bg-white relative',
          {
            md: 'max-w-[640px] w-full',
            full: 'mx-5',
          }[width],
        )}
      >
        <button
          className="
            w-8 h-8 rounded flex items-center justify-center
            bg-white/10 hover:bg-white/40 transition-colors 
            absolute top-0 left-[calc(100%+12px)]"
          onClick={onClose}
        >
          <CrossLightIcon className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById('modals'));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, 'px-6 pt-6 pb-4 text-2xl')}>{children}</div>
  );
};

UiModal.Body = function UiModalHeader({ children, className }) {
  return <div className={clsx(className, 'px-6')}>{children}</div>;
};

UiModal.Footer = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, 'flex justify-end gap-4 mt-auto p-6')}>
      {children}
    </div>
  );
};

function CrossLightIcon({ className }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.332067 0.332059C-0.110689 0.774816 -0.110689 1.49265 0.332067 1.93541L4.39665 5.99997L0.332067 10.0646C-0.110689 10.5074 -0.110689 11.2252 0.332067 11.668C0.774812 12.1107 1.49266 12.1107 1.9354 11.668L5.99998 7.6033L10.0646 11.668C10.5074 12.1107 11.2252 12.1107 11.668 11.668C12.1107 11.2252 12.1107 10.5074 11.668 10.0646L7.6033 5.99997L11.668 1.93542C12.1107 1.49267 12.1107 0.774827 11.668 0.332082C11.2251 -0.110675 10.5074 -0.110675 10.0646 0.332082L5.99998 4.39665L1.9354 0.332059C1.49266 -0.110686 0.774812 -0.110686 0.332067 0.332059Z"
        fill="currentColor"
      />
    </svg>
  );
}
