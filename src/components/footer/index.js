import * as Styled from "./styles";
import Facebook from "../../assets/icons/socials/facebook";
import Linkedin from "../../assets/icons/socials/linkedin";
import Instagram from "../../assets/icons/socials/instagram";
import Youtube from "../../assets/icons/socials/youtube";
import Mastercard from "../../assets/icons/cards/mastercard";
import Visa from "../../assets/icons/cards/visa";
import MaeztraLogo from "../../assets/icons/credits/maeztraLogo";
import VtexLogo from "../../assets/icons/credits/vtexLogo";

export default function Footer() {
  return (
    <>
      <Styled.Footer>
        <div className="container">
          <div className="socials">
            <a href="https://www.facebook.com/maeztraconsultoria">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/company/maeztraconsultoria">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/maeztraconsultoria/">
              <Instagram />
            </a>
            <a href="https://www.youtube.com/channel/UCldfYzd4AiaowDJk7Uk_EGA">
              <Youtube />
            </a>
          </div>
          <div className="cards">
            <Visa />
            <Mastercard />
            <Visa />
            <Mastercard />
          </div>
          <div className="credits">
            <div className="left">
              <p>Powered by</p>
              <VtexLogo />
            </div>
            <div className="right">
              <p>Developed by</p>
              <MaeztraLogo />
            </div>
          </div>
        </div>
      </Styled.Footer>
    </>
  );
}
