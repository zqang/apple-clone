import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

interface CardProps {
  title: string;
  subtitle: string;
  subLinkLeft: string;
  subLinkRight: string;
  subLinkLeftLabel: string;
  subLinkRightLabel: string;
  imageAlt: string;
  imageSrc: string;
  textColor?: string;
  secondarySection?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  subLinkLeft,
  subLinkLeftLabel,
  subLinkRight,
  subLinkRightLabel,
  imageAlt,
  imageSrc,
  textColor,
  secondarySection = false,
}) => {
  return (
    <div
      className={` max-h-[775px] w-full mb-[-56px]  text-lg font-normal ${textColor}`}
    >
      <div className="h-[580px] relative overflow-hidden flex flex-col pt-[44px] ">
        <div className="mt-0 pt-[47px] text-center flex flex-grow-0 flex-col z-[4]">
          {secondarySection && (
            <div className=" w-[88%] max-w-[430px] mx-auto">
              <h4 className="text-[40px] z-[4] font-semibold leading-none mt-[53px] ">
                {title}
              </h4>
              <h5 className="mt-[3px]  text-[21px] leading-tight">
                {subtitle}
              </h5>
            </div>
          )}
          {!secondarySection && (
            <>
              <h2 className="text-[56px] z-[4] font-semibold leading-none w-full my-auto flex-shrink m-0 p-0">
                {title}
              </h2>
              <h3 className="text-[28px] z-[4] leading-none font-normal mt-[6px] w-full my-auto flex-shrink m-0 p-0">
                {subtitle}
              </h3>
            </>
          )}
          <div
            className={`z-[4] ${
              secondarySection ? "text-[17px]" : "text-xl"
            }  w-full flex flex-row items-center justify-center text-[#2997ff] font-normal mt-3`}
          >
            <a
              className="ml-[-4px] flex-row flex items-center "
              href={subLinkLeft}
            >
              {subLinkLeftLabel} <BsChevronRight size={13} />
            </a>
            <a
              className="ml-[35px] flex-row flex items-center "
              href={subLinkRight}
            >
              {subLinkRightLabel} <BsChevronRight size={13} />
            </a>
          </div>
        </div>
        <div className="z-1 overflow-visible flex-grow w-full h-full absolute top-0 left-0">
          <Image
            alt={imageAlt}
            src={imageSrc}
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
