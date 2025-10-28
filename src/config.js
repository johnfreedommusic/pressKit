// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import ImmigratoInAmericaArt from "./images/IMMIGRATO IN AMERICA.png";
import NavLogoDark from "./images/Logo Longer White.png";
import NavLogoLight from "./images/Logo Longer.png";
import Art28 from "./images/28.png";
import CopertinaNuovaVammazzo from "./images/Copertina Nuova V'ammazzo.png";
import CopCriminaleJohnCopia from "./images/COP CRIMINALE JOHN - Copia.jpg";

// Local Audio Files (add your audio files to the src/audio directory)
import ImmigratoInAmericaAudio from "./audio/immigrato-in-america.mp3";
import StoriaDiUnBravuomoAudio from "./audio/storia-di-un-bravuomo.mp3";
import VammazzoAudio from "./audio/vammazzo.mp3";
import MenteCriminaleAudio from "./audio/mente-criminale.mp3";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "johnfreedommusic";

// Navbar Logo images
export const navLogo = NavLogoLight; // use colored/logo longer for default
export const navLogoDark = NavLogoDark;
export const navLogoLight = NavLogoLight;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "John Freedom è un giovane immigrato italiano vissuto in America a cavallo degli anni ruggenti. D'un tratto si è risvegliato nella società contemporanea e da quel momento si è dato un solo obiettivo: riportare in vita le ballroom dei suoi tempi.\nNei suoi testi non fa a meno di denunciare il nuovo mondo che gli sta attorno, spesso confrontandolo con le sue origini. Tutto questo si riversa nel suo sound che unisce il vecchio e il nuovo, fondendo lo swing e l’elettronica, con sfumature jazz e blues.";
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  // Removed GitHub skill icon
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Music
 **************************************************************
  Add your songs below. For each song provide:
  - name: string (song title)
  - artwork: an imported image (optional, falls back to Logo)
  - previewUrl: local audio file path (mp3/m4a/ogg). Leave null to hide player
  - links: per-platform URLs. Leave any null to hide that platform icon
*/
export const musicData = [
  {
    id: 1,
    name: "Immigrato in America",
    artwork: ImmigratoInAmericaArt,
    previewUrl: ImmigratoInAmericaAudio,
    links: {
      spotify: "https://open.spotify.com/track/1X8EdHqO1GPqAjKjfol6Hb?si=vUkx9psZQvmDpUkSKSkCnw&context=spotify%3Aalbum%3A7aOq7l2AMRvh6fv44qpbM1",
      appleMusic: "https://music.apple.com/us/album/immigrato-in-america-single/1784125290",
      amazonMusic: "https://music.amazon.it/albums/B0DPPKPKKV?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_HCqhhEvIqiC2h5i6Oz3iuwAZ3",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/john-freedom-immigrato-in?si=2eb5dc9ee05a4cfe8e8c1640ec669e6e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  },
  {
    id: 2,
    name: "Storia di un brav'uomo",
    artwork: Art28,
    previewUrl: StoriaDiUnBravuomoAudio,
    links: {
      spotify: "https://open.spotify.com/album/2nYSiCOQdQbVoVd6s136ky?si=MnMWaEa3SWe9WD9DcMkt8w",
      appleMusic: "https://music.apple.com/us/album/storia-di-un-bravuomo-single/1812226232",
      amazonMusic: "https://music.amazon.it/albums/B0F7CP46Q5?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_LT3rBTHkRNTMEt3MMGbX2xrjV",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/storia-di-un-bravuomo",
    },
  },
  {
    id: 3,
    name: "V'ammazzo",
    artwork: CopertinaNuovaVammazzo,
    previewUrl: VammazzoAudio,
    links: {
      spotify: "https://open.spotify.com/album/6MOPDcHWH88BoD8Npg359T?si=hiJXwe6MTDGp4mLUKzqghA",
      appleMusic: "https://music.apple.com/us/album/vammazzo-single/1796632035",
      amazonMusic: "https://music.amazon.it/albums/B0DWLYJMJ6?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_2pQmWCY9ZdQPHDUmkGhsUVkH9",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/master-vammazzo-2",
    },
  },
  {
    id: 4,
    name: "Mente Criminale",
    artwork: CopCriminaleJohnCopia,
    previewUrl: MenteCriminaleAudio,
    links: {
      spotify: "https://open.spotify.com/track/5DNnQxLinbzS4tTqlPeDA5?si=8a6704702eed47cd",
      appleMusic: "https://music.apple.com/us/album/mente-criminale-single/1826246899",
      amazonMusic: "https://music.amazon.it/albums/B0FHBBSPMT?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_NABwc81EJWWEI5Dropw5bVeNI",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/mente-criminale-4_master_1",
    },
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xnnzkbqp";

/* Custom Social Links
 **************************************************************
  Add your social links below to show icons in the footer. Leave as null to hide.
  Example: "https://instagram.com/your_username"
*/
export const socialLinks = {
  instagram: "https://www.instagram.com/_johnfreedom/",
  tiktok: "https://www.tiktok.com/@john.freedom60",
  youtube: null,
  spotify: "https://open.spotify.com/artist/1Rf0wOiVqQNTdkODZj6JNX?si=5uugTnmDRBugpd_oXuuFkw",
  soundcloud: "https://soundcloud.com/john-freedom-832358450",
};

// Footer icons theme (light or dark)
export const footerTheme = "dark";
