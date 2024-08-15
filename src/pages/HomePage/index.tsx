import { BannerCarousel } from "./BannerCarousel";
import Main from "./Main";

function HomePage() {
  return (
    <div>
      <div className="w-pc mx-auto">
        <BannerCarousel children={undefined} />
        <Main />
      </div>
    </div>
  );
}

export default HomePage;
