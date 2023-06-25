interface SubMenuGroupProps {
  id: number;
  subheader: string;
  submenuItems: any;
}

const SubMenuGroup: React.FC<SubMenuGroupProps> = ({
  id,
  subheader,
  submenuItems,
}) => {
  return (
    <div key={id} className="flex flex-col gap-3 bg-neutral-900">
      <h2 className="text-[#86868b] text-xs p-0 m-0 font-normal">
        {subheader}
      </h2>
      <ul className="max-w-[50%] pe-[88px] mb-[-4px] text-start m-0 p-0 text-base">
        {submenuItems.map((value: any) => {
          const { id, subMenuLabel, url, isCustomizedText } = value;
          return (
            <li
              key={id}
              className=" transition text-slate-100 mt-[6px] ms-[-11px] me-[-11px]"
            >
              <a
                href={url}
                className={`py-[7px] pt-[9px] px-[11px] cursor-pointer whitespace-nowrap mb-[-6px] 
                  ${
                    isCustomizedText
                      ? "font-semibold text-2xl"
                      : "font-normal text-xs"
                  }`}
              >
                {subMenuLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenuGroup;
