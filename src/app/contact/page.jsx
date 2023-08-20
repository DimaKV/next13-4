'use client'

import styles from "./page.module.css";
import Image from "next/image";
import Button from '../../components/Button/Button';


// works only with SSR
export const metadata = {
  title: "Contact | MyApp",
  description: "This is decription of contacts",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contacts"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(formData.get('name'));
        }}>
          <input type="text" placeholder="name" name="name" className={styles.input} />
          <input type="text" placeholder="email" name="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          {/* <Button url="#" text="Send"  /> */}
          <input type="submit" value="отправить"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;