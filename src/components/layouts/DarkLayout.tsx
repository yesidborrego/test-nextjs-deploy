// import { FC } from "react";
import { FC, PropsWithChildren } from "react";

// interface IProps {
//   children: JSX.Element[] | JSX.Element;
// }

// export const DarkLayout: FC<IProps> = ({ children }) => {
export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark layout</h3>
      <div>{children}</div>
    </div>
  );
};
