import Head from "next/head";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";
import styles from "./Layout.module.css";

// interface IProps {
//   children: JSX.Element[] | JSX.Element;
// }
interface IProps {
  children: ReactNode;
}

export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Yesid</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>{children}</div>
      </main>
    </>
  );
};
