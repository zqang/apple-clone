import { AppDirectoryConstant } from "@/constant/app-directory/AppDirectoryConstant";

const Directory = () => {
  const directoryConstant = AppDirectoryConstant;
  const columns = [];
  for (let i = 1; i < 6; i++) {
    const list = directoryConstant.filter(({ column }) => column == i);
    columns.push(list);
  }

  return (
    <nav className="flex flex-nowrap pt-[20px]">
      {columns.map((value, index) => {
        return (
          <div key={index} className="basis-3/12">
            {value.map(({ directoryList, title, order }) => {
              return (
                <div
                  key={order}
                  className={`${
                    order != 1 ? "pt-[24px]" : ""
                  } pointer-events-none`}
                >
                  <h3 className="text-[#1d1d1f] font-semibold block mb-[0.8em]">
                    {title}
                  </h3>
                  <ul className="mr-[20px] list-none p-0">
                    {directoryList.map(({ name, url }, index) => {
                      return (
                        <li
                          className="pointer-events-auto block mb-[0.8em]"
                          key={index}
                        >
                          <a
                            className="text-[#424245] no-underline hover:underline"
                            href={url}
                          >
                            {name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
};

export default Directory;
