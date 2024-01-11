import Image from "next/image";

export const Header = () => {
  return (
    <>
      {" "}
      <div className="fixed top-0 z-10 w-full mx-auto items-center justify-between font-mono text-sm">
        <div className="flex px-8 items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
          <p className="flex items-center">
            This is the&nbsp;
            <code className="font-mono font-bold">header</code>
          </p>
          <div className="ml-auto">
            <Image
              src="/burger-menu-svgrepo-com.svg"
              alt="burgerMenu"
              width="50"
              height="50"
            />
          </div>
        </div>
      </div>
    </>
  );
};
