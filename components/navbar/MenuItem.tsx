"use client";

import { useCallback } from "react";

interface MenuItemProps {
  onClick: () => void;
  setOpen: () => void;
  setOpenId: (id: string) => void;
  id: number;
  order: number;
  label: string;
  menuSubgroup: any[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  id,
  order,
  menuSubgroup,
  setOpen,
  setOpenId,
}) => {
  const onMouseOver = useCallback(() => {
    setOpen();
    setOpenId(id.toString());
  }, [setOpen, setOpenId, id]);
  return (
    <div>
      <div
        onClick={onClick}
        id={id.toString()}
        className="px-4 font-extralight text-slate-100 text-xs cursor-pointer whitespace-nowrap"
      >
        <div
          onMouseOver={onMouseOver}
          className="hover:bg-neutral-900 transition"
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
