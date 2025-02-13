
import styles from "./HomePage.module.css";
import { Button } from "@/components/UI/Button/Button";
import introVideo from "@/assets/intro-video.mp4";
import introPoster from "@/assets/intro_poster.jpg";
import { SocialMediaList } from "@/components/UI/SocialMediaList/SocialMediaList";
import { PATH, SOCIALLIST } from "@/utils/constants";
import { useRef } from "react";
import { useNavigate } from "react-router";


export const HomePage = () => {
const socialListRef = useRef<HTMLHeadingElement|null>(null)
const navigate = useNavigate()
const hundlerButtonScroll = () =>{
  socialListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
}
const hundleButtonToSearch = () => {
  navigate(PATH.SEARCH)
}

  return (
    <>
      <section className={styles.lead}>
        <h1 className={styles.title}>Discover Art Effortlessly</h1>
        <p className={styles.subtitle}>
          Find and explore artworks from around the world
        </p>
        <div className={styles.lead_buttons}>
          <Button onClick={hundlerButtonScroll} className={styles.lead_button} mode="btn-violet">
            Join us now
          </Button>
          <Button onClick={hundleButtonToSearch} className={styles.lead_button} mode="btn-white">
            Request demo
          </Button>
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.intro_video_container}>
          <video
            className={styles.intro_video}
            poster={introPoster}
            autoPlay
            loop
            muted
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
        <div className={styles.socials}>
          <h2 ref={socialListRef} className={styles.socials_title}>Connect with Us</h2>
          <SocialMediaList
            data={SOCIALLIST}
            containerClass={styles.socials_container}
            itemClass={styles.socials_item}
          />
        </div>
      </section>
    </>
  );
};
