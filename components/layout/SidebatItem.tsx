import { IconType } from "react-icons";

interface SidebatItemProps {
  label: String;
  href?: String;
  icon: IconType;
  onClick?: () => void;
}

const SidebatItem: React.FC<SidebatItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      {/* mobile */}
      <div
        className="
      relative
      rounded-full
      h-14
      w-14
      flex
      items-center
      justify-center
      p-4
      hover:bg-slate-300
      hover:bg-opacity-10
      cursor-pointer
      lg:hidden
      "
      >
        <Icon size={28} color="white" />
      </div>
      {/* desktop */}
      <div
        className="
          relative
          hidden
          lg:flex
          items-center
          gap-4
          p-4
          rounded-full
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          "
      >
        <Icon size={24} color="white" />
              <p className="hidden lg:block text-white text-base">{label}</p>
      </div>
    </div>
  );
};

export default SidebatItem;
