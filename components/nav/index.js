import React, { useState } from "react";

import { Drawer } from "antd";
import Image from "next/image";
import styles from "./nav.module.css";
import Button from "@/components/button";
import Logo from "@/public/svg/Logo.svg";
import Search from "@/public/svg/Search.svg";
import { MenuOutlined } from "@ant-design/icons";

import fb from "@/public/svg/socialNetwork/fb.svg";
import tw from "@/public/svg/socialNetwork/tw.svg";
import inSvg from "@/public/svg/socialNetwork/in.svg";
import yt from "@/public/svg/socialNetwork/yt.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.iconMoblie}>
        <MenuOutlined onClick={() => showDrawer()} />

        <div className={styles.boxLogoMB}>
          <Image src={Logo} alt="" width={160} height={38} />
        </div>
      </div>
      <div className={styles.boxLogo}>
        <Image src={Logo} alt="" width={160} height={38} />
      </div>
      <div className={styles.option}>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>About Us</li>
          <li>Tokenomics</li>
          <li>Roadmap</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.search}>
        <Image src={Search} alt="" width={18} height={18} />
        <Button>Join Now</Button>
      </div>
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        className={styles.drawer}
        width={320}
      >
        <div className={styles.optionMB}>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About Us</li>
            <li>Tokenomics</li>
            <li>Roadmap</li>
            <li>Contact</li>
          </ul>
        </div>
        <Image src={Search} alt="" width={18} height={18} />
        <div className={styles.boxMedia}>
          <Image src={fb} alt="" width={38} height={38} />
          <Image src={tw} alt="" width={38} height={38} />
          <Image src={inSvg} alt="" width={38} height={38} />
          <Image src={yt} alt="" width={38} height={38} />
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
