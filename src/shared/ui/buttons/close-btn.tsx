import { CloseIcon } from '../icons/close/close';
interface iCloseBtnProps {
  onClick: () => void;
}
export function CloseBtn({ onClick }: iCloseBtnProps) {
  return (
    <button
      data-testid="close-icon-btn"
      onClick={onClick}
      className="cursor-pointer py-2 px-4 self-end"
    >
      <CloseIcon />
    </button>
  );
}
