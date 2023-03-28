import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface IProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#000",
  // fontWeight: 600,
};

export const ActiveLink: FC<IProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
