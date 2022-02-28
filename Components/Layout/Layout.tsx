import React, { createContext, FC } from "react";
import { useMeasure } from "react-use";

import Footer from "./Footer";

export const initialDimensionObject = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  x: 0,
  y: 0,
  right: 0,
  bottom: 0,
};
export const DimensionContext = createContext<Omit<DOMRect, "toJSON">>(initialDimensionObject);

const Layout: FC = ({ children }) => {
  const [pageContainerRef, dimensions] = useMeasure<HTMLElement>();

  return (
    <DimensionContext.Provider value={dimensions}>
      <main
        className="flex flex-col min-h-screen w-screen overflow-x-hidden overflow-y-auto items-center relative z-10"
        ref={pageContainerRef}
      >
        <article className="flex-1 w-full max-w-screen-2xl p-4 relative items-center">{children}</article>
        <Footer />
      </main>
    </DimensionContext.Provider>
  );
};

export default Layout;
