import * as Styled from "./styles";
import BannerCollection from "../../assets/images/banner-colecao.png";
import BannerCollectionMobile from "../../assets/images/banner-colecao-mobile.png";

export default function NewCollectionSection() {
  return (
    <Styled.Container>
      <div className="left">
        <h3 className="title">Lorem ipsum</h3>
        <p className="text-desktop">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
        <p className="text-mobile">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque .
        </p>
      </div>

      <div className="right">
        <img
          className="banner-desktop"
          src={BannerCollection}
          alt="Banner da Coleção"
        />
        <img
          className="banner-mobile"
          src={BannerCollectionMobile}
          alt="Banner da Coleção"
        />
      </div>
    </Styled.Container>
  );
}
