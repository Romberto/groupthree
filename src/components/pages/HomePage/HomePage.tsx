import styles from "./HomePage.module.css";
import { Button } from "@/components/UI/Button/Button";
import introVideo from "@/assets/intro-video.mp4";
import introPoster from "@/assets/intro_poster.jpg"
import { SocialMediaList } from "@/components/UI/SocialMediaList/SocialMediaList";
import { SOCIALLIST } from "@/utils/constants";

export const HomePage = () => {
  return (
    <>
      <section className={styles.lead}>
        <h1 className={styles.title}>Discover Art Effortlessly</h1>
        <p className={styles.subtitle}>
          Find and explore artworks from around the world
        </p>
        <div className={styles.lead_buttons}>
          <Button className={styles.lead_button} mode="btn-violet">
            Join us now
          </Button>
          <Button className={styles.lead_button} mode="btn-white">
            Request demo
          </Button>
        </div>
      </section>
      <section className={styles.intro}>
        <div className={styles.intro_video_container}>
          <video className={styles.intro_video} poster={introPoster} autoPlay loop muted >
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
        <div className={styles.socials}>
          <h2 className={styles.socials_title}>Connect with Us</h2>
          <SocialMediaList data={SOCIALLIST}/>
        </div>
      </section>
    </>
  );
};
