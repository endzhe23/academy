import React from "react";
import Topbar from "@/app/components/Topbar";

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <>
        <Topbar />
        {children}
      </>
  )
}

export default HomeLayout