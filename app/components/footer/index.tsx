import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-neutral-400 relative md:fixed bottom-0 bg-black left-0 right-0 p-4 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2">
        &copy; Copyright Where is my Train {new Date().getFullYear()} |{" "}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
      <div className="flex w-full lg:w-1/2 justify-end align-top gap-2">
        <Image
          width={198} height={40}
          src={"/images/NRE_Powered_logo.png"}
          alt="Powered by National Rail Enquiries"
        />
        <Link href="https://www.nationalrail.co.uk" target="_blank">
          Powered by National Rail Enquiries
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
