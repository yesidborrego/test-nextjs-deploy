import { Inter } from "next/font/google";
// import type { ReactElement } from "react"; //* opción 1
import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";
import type { NextPageWithLayout } from "../_app";

const inter = Inter({ subsets: ["latin"] });

// const AboutPage: NextPage = () => {
const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/" className="card" rel="noopener noreferrer">
        <h2 className={inter.className}>About Page</h2>
        <h3 className={inter.className}>
          Go to Home page <span>-&gt;</span>
        </h3>
        <p className={inter.className}>
          Get started by editing{" "}
          <code className="code">pages/about/index.tsx</code>
        </p>
      </Link>
    </>
  );
};

export default AboutPage;

// AboutPage.getLayout = function getLayout(page: ReactElement) {
AboutPage.getLayout = function getLayout(page: JSX.Element) {
  //* opción 2
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
