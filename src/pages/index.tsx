import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { menuItems } from "@/components/navbar/MenuItems";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const { asPath } = useRouter();
  return (
    <MainLayout>
      {menuItems.map(({ text, href }) =>
        asPath !== href ? (
          <Link
            href={href}
            className="card"
            rel="noopener noreferrer"
            key={text}
          >
            <h2 className={inter.className}>
              Go to {text} page <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get started by editing{" "}
              <code className="code">pages/{text.toLowerCase()}/index.tsx</code>
            </p>
          </Link>
        ) : (
          <h2 className={inter.className} key={text}>
            Home Page
          </h2>
        )
      )}
    </MainLayout>
  );
}
