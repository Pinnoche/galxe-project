import data from "@/components/Footer/footer.json";

function Footer() {
  return (
    <footer className="bg-my-color px-7 lg:px-12 xl:px-20">
      <div className="py-12 flex flex-wrap justify-between md:py-16 xl:py-20">
        <div className="mb-12 w-full xl:w-fit">
          <img className="h-5" src={data.logo} alt="Galxe Logo" />
          <p className="mt-5 max-w-lg leading-6 text-left text-sm font-normal text-footer-color">
            {data.content}
          </p>
          <button className="w-fit mt-6 py-3 px-7 border border-footer-button-color cursor-pointer text-footer-button-color rounded-lg font-bold text-base ">
            {data.latest}
          </button>
        </div>
        <div className="flex flex-wrap w-full xl:w-6/12 xl:justify-between">
          {data.link_head.map((head: String, index: number) => (
            <div key={index} className="w-1/2 mb-4  md:w-1/4 lg:w-1/5 xl:w-fit">
              <p className="text-sm leading-6 text-white mb-3 font-bold ">
                {head}
              </p>
              {data.links[index].map((link: String, index: number) => (
                <a
                  key={index}
                  href="/"
                  className="block text-sm leading-6 font-normal text-footer-color mb-3 hover:text-footer-button-color cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex py-6 flex-wrap border-footer2-bgx border-t lg:justify-between lg:py-8">
        <div className="flex flex-wrap justify-center w-full lg:w-2/3 lg:justify-normal">
          {data.policies.map((policy: String, index: number) => (
            <a
              key={index}
              href="/"
              className="w-fit cursor-pointer text-xs block leading-5 text-footer-light mx-3 underline"
            >
              {policy}
            </a>
          ))}
        </div>
        <div className="w-full lg:w-fit">
          <p className="w-full text-center text-xs leading-5 text-footer-light mt-8 lg:w-fit lg:mt-0">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
