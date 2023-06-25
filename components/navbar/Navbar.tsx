"use client";

import { MenuConstant } from "@/constant/menu/MenuConstants";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { BsBag } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import Container from "../Container";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import SubMenuGroup from "./SubMenuGroup";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState("");
  const menuConstant = MenuConstant;
  const menuList: any = [];

  const setOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const setClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setOpenById = useCallback((id: string) => {
    setOpenId(id);
  }, []);

  menuConstant.forEach(({ id, order, label, url, menuSubgroup }) => {
    menuList.push(
      <MenuItem
        setOpenId={setOpenById}
        setOpen={setOpen}
        key={id.toString()}
        id={id}
        order={order}
        menuSubgroup={menuSubgroup}
        label={label}
        onClick={() => router.push(url)}
      ></MenuItem>
    );
  });

  return (
    <div
      onMouseLeave={setClose}
      className={`h-auto fixed w-full z-10 saturate-[180%] ${
        isOpen
          ? "bg-neutral-900"
          : "bg-[rgba(22,22,23,.8)] transition-all duration-500 ease-in-out"
      }`}
    >
      <Container>
        <div>
          <ul className="flex flex-row items-center gap-3 justify-between mx-[-8px] h-[44px]">
            <li className="flex-none px-2">
              <Logo />
            </li>
            <li className="flex-none">
              <div className="flex flex-row gap-2 ">{menuList}</div>
            </li>
            <li className="flex-auto px-2">
              <HiSearch size={15} color="white" />
            </li>
            <li className="flex-auto px-2">
              <BsBag size={15} color="white" />
            </li>
          </ul>
          {isOpen && (
            <div className="h-auto w-full bg-neutral-900 mx-auto px-5 pt-[40px] pb-[84px] flex flex-row transition-all duration-500 ease-in-out">
              <>
                {menuConstant.map(({ id, menuSubgroup }) => {
                  return (
                    <>
                      {openId == id.toString() && (
                        <>
                          {menuSubgroup.map((value: any) => {
                            return (
                              <SubMenuGroup
                                key={id}
                                id={value.id}
                                subheader={value.subheader}
                                submenuItems={value.submenuItems}
                              />
                            );
                          })}
                        </>
                      )}
                    </>
                  );
                })}
              </>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
