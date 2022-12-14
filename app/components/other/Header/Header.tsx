import React, { FC, useState } from "react";

import { useAdaptive } from "@/hooks/useAdaptive";

import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

import styles from "./Header.module.scss";
import ModalWrapper from "@/components/other/ModalWrapper/ModalWrapper";
import { AnimatePresence } from "framer-motion";
import LoginModal from "@/components/other/ModalWrapper/LoginModal/LoginModal";
import RegisterModal from "@/components/other/ModalWrapper/RegisterModal/RegisterModal";

const Header: FC = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const { isMobile } = useAdaptive();
  return (
    <div className={styles.header}>
      {isMobile ? (
        <HeaderMobile setIsModalShow={setIsModalShow} />
      ) : (
        <HeaderDesktop setIsModalShow={setIsModalShow} />
      )}
      <AnimatePresence>
        {isModalShow && (
          <ModalWrapper
            className={styles.modal}
            isShow={isModalShow}
            setIsShow={setIsModalShow}
          >
            {modalType === "login" ? (
              <LoginModal
                setModalType={setModalType}
                setIsModalShow={setIsModalShow}
              />
            ) : (
              <RegisterModal
                setModalType={setModalType}
                setIsModalShow={setIsModalShow}
              />
            )}
          </ModalWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
