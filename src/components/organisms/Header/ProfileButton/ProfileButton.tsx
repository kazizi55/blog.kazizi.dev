import { FaHome } from "@/components/atoms/Icons";

export const ProfileButton: React.FC = () => {
  // TODO: kazizi.devを作ったらリンク先を変更する
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <FaHome />
    </a>
  );
};
