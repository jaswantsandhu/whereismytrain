import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-neutral-400 relative md:fixed bottom-0 bg-black left-0 right-0 p-4">
      &copy; Copyright Where is my Train {new Date().getFullYear()} |{" "}
      <Link href="/terms-and-conditions">Terms and Conditions</Link>
    </footer>
  );
};

export default Footer;
