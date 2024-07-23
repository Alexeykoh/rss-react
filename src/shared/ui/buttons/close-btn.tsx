import { CloseIcon } from '../icons/close';
interface iCloseBtnProps {
  onClick: () => void;
}
export function CloseBtn({ onClick }: iCloseBtnProps) {
  return (
    <button onClick={onClick} className="cursor-pointer py-2 px-4 self-end">
      <CloseIcon />
    </button>
  );
}
