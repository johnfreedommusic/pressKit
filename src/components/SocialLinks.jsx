import React from "react";
// Styles
import styled from "styled-components";
// State
import { useGetSocialsQuery } from "../app/apiSlice";
// Icons
import { Icon } from "@iconify/react";
// Config
import { Blog, socialLinks } from "../config";

// #region styled-components
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;
// #endregion

// #region component
const SocialLinks = () => {
  const { isSuccess, error, data: socialsData } = useGetSocialsQuery();

  React.useEffect(() => {
    if (error) {
      console.log(
        `${error.status} - check getSocials query in src/app/apiSlice.js`
      );
    }
  }, [error, socialsData]);

  return (
    <StyledSocialLinks>
      {socialLinks.instagram && (
        <a href={socialLinks.instagram} aria-label="Instagram" className="link-icons">
          <Icon icon="fa-brands:instagram" />
        </a>
      )}
      {socialLinks.tiktok && (
        <a href={socialLinks.tiktok} aria-label="TikTok" className="link-icons">
          <Icon icon="fa-brands:tiktok" />
        </a>
      )}
      {socialLinks.youtube && (
        <a href={socialLinks.youtube} aria-label="YouTube" className="link-icons">
          <Icon icon="fa-brands:youtube" />
        </a>
      )}
      {socialLinks.spotify && (
        <a href={socialLinks.spotify} aria-label="Spotify" className="link-icons">
          <Icon icon="fa6-brands:spotify" />
        </a>
      )}
      {socialLinks.soundcloud && (
        <a href={socialLinks.soundcloud} aria-label="SoundCloud" className="link-icons">
          <Icon icon="fa6-brands:soundcloud" />
        </a>
      )}
      {isSuccess &&
        socialsData.map((element, index) => {
          let icon;
          switch (element.provider) {
            case "linkedin":
              icon = <Icon icon="fa-brands:linkedin" />;
              break;
            case "twitter":
              icon = <Icon icon="fa6-brands:square-x-twitter" />;
              break;
            case "facebook":
              icon = <Icon icon="fa-brands:facebook-square" />;
              break;
            case "instagram":
              icon = <Icon icon="fa-brands:instagram-square" />;
              break;
            case "tiktok":
              icon = <Icon icon="fa-brands:tiktok" />;
              break;

            default:
              icon = <Icon icon="ph:link-bold" />;
              break;
          }
          return (
            <a
              key={index}
              href={element.url}
              aria-label="External link"
              className="link-icons"
            >
              {icon}
            </a>
          );
        })}
      {/* Blog link intentionally removed */}
    </StyledSocialLinks>
  );
};
// #endregion

export default SocialLinks;
