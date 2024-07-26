import Link from "next/link";

export const LinkButton = ({ artist }) => {
  return (
    <Link href={`/artist/${artist}`} className="font-medium text-#8289a1">
      +
    </Link>
  );
};
