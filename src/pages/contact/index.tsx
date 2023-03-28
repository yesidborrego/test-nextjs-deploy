import { Inter } from "next/font/google";
import Link from "next/link";
import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

const ContactPage: NextPage = () => {
  return (
    <MainLayout>
      <Link href="/" className="card" rel="noopener noreferrer">
        <h2 className={inter.className}>Contact Page</h2>
        <h3 className={inter.className}>
          Go to Home page <span>-&gt;</span>
        </h3>
        <p className={inter.className}>
          Get started by editing{" "}
          <code className="code">pages/contact/index.tsx</code>
        </p>
      </Link>
    </MainLayout>
  );
};

export default ContactPage;
