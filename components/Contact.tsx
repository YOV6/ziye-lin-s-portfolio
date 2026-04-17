"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const socialLinks = [
  {
    name: "WeChat",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.219c0 1.587.463 3.071 1.259 4.365L3.5 17.5l4.5-2.25c1.192.412 2.506.686 3.191.686 1.39 0 2.5-.375 3.284-.813C12.18 17.318 15.21 19 18 19c4.799 0 8.691-3.287 8.691-7.031C26.691 5.476 22.8 2.188 18 2.188c-.476 0-.944.027-1.403.078A11.08 11.08 0 0 0 8.691 2.188M8.309 5.625c.402-.027.812-.038 1.382-.038 3.521 0 6.364 2.176 6.364 4.844 0 .219-.016.433-.047.645a15.02 15.02 0 0 0-1.176 4.41c-.075.44-.13.881-.224 1.309l-.039.184a1.235 1.235 0 0 1-1.047.842l-.086.009c-.406.05-.832.087-1.259.087-.621 0-1.209-.074-1.76-.197a15.04 15.04 0 0 1-3.007-4.322 11.9 11.9 0 0 1-1.416-4.586C6.091 8.271 7.055 6.003 8.31 5.624m4.355 2.719c1.23 0 2.23.938 2.23 2.094 0 1.145-1 2.083-2.23 2.083-1.23 0-2.23-.938-2.23-2.083 0-1.156 1-2.094 2.23-2.094m-5.416 0c1.23 0 2.23.938 2.23 2.094 0 1.145-1 2.083-2.23 2.083-1.23 0-2.23-.938-2.23-2.083 0-1.156 1-2.094 2.23-2.094m10.777 8.719c-.192-.046-1.939-.191-3.625-.191-1.686 0-3.433.145-3.625.191-.09.02-.18-.027-.211-.103-.027-.08-.009-.17.059-.231l.125-.125c1.307-1.307 3.433-1.306 3.675-1.306.242 0 2.368-.001 3.675 1.306l.125.125c.068.061.086.15.059.231-.03.075-.122.123-.212.103z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [showWechatQR, setShowWechatQR] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>联系我</h2>
          <p className={styles.description}>欢迎联系！</p>

          <div className={styles.links}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={styles.link}
                onClick={(e) => {
                  if (link.name === "WeChat") {
                    e.preventDefault();
                    setShowWechatQR(true);
                  } else if (link.name === "Email") {
                    e.preventDefault();
                    setShowEmailModal(true);
                  }
                }}
              >
                <span className={styles.linkIcon}>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {showWechatQR && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowWechatQR(false)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setShowWechatQR(false)}
              aria-label="关闭"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/images/contact/wechat.jpg"
              alt="微信二维码"
              className={styles.wechatQR}
            />
          </div>
        </div>
      )}

      {showEmailModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowEmailModal(false)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setShowEmailModal(false)}
              aria-label="关闭"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className={styles.emailModalBody}>
              <span className={styles.emailLabel}>邮箱</span>
              <span className={styles.emailAddress}>linzy@smail.nju.edu.cn</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
