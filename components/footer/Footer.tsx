import Container from "../Container";

const Footer = () => {
  return (
    <Container>
      <section className="text-[0.75em] text-[#6e6e73] pt-[34px] border-t-0 pb-[21px]">
        <div className="mb-[7px] pb-[8px] border-b border-solid border-[#d2d2d7] ">
          More ways to shop:{" "}
          <a className="text-[#06c] underline" href="#">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a className="text-[#06c] underline" href="#">
            a retailer
          </a>{" "}
          near you.{" "}
          <span className="whitespace-nowrap">Or call 1800-692-7753.</span>
        </div>
        <div className="float-right mt-[5px] relative top-[-3px] z-2 whitespace-nowrap">
          <a
            className="ml-0 pl-0 border-l-0 text-[#424245] no-underline"
            href="#"
          >
            Singapore
          </a>
        </div>
        <div className="relative top-[-3px] z-1 ">
          <div className="mr-[30px] float-left mt-[5px]">
            Copyright © 2023 Apple Inc. All rights reserved.
          </div>
          <ul className="relative top-[-5px] ms-0 z-1 mr-[30px] float-left mt-[5px]">
            <li className="border-r-[1px] border-solid mr-[7px] inline-block mt-[5px]">
              <a
                className="pr-[10px] inline-block whitespace-nowrap text-[#424245] no-underline"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="border-r-[1px] border-solid mr-[7px] inline-block mt-[5px]">
              <a
                className="pr-[10px] inline-block whitespace-nowrap text-[#424245] no-underline"
                href="#"
              >
                Terms of Use
              </a>
            </li>
            <li className="border-r-[1px] border-solid mr-[7px] inline-block mt-[5px]">
              <a
                className="pr-[10px] inline-block whitespace-nowrap text-[#424245] no-underline"
                href="#"
              >
                Sales and Refunds
              </a>
            </li>
            <li className="border-r-[1px] border-solid mr-[7px] inline-block mt-[5px]">
              <a
                className="pr-[10px] inline-block whitespace-nowrap text-[#424245] no-underline"
                href="#"
              >
                Legal
              </a>
            </li>
            <li className="border-r-[1px] border-solid mr-[7px] inline-block mt-[5px]">
              <a
                className="pr-[10px] inline-block whitespace-nowrap text-[#424245] no-underline"
                href="#"
              >
                Site Map
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default Footer;
