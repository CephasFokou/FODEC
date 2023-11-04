"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/footer";

const DefaultLayout = ({
  children,
  age,
}: {
  children: React.ReactNode;
  age: number;
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-in-cubic",
    });
  }, []);

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
