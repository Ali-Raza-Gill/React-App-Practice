import paris from "../../Assets/images/paris.jpg";
import ocean from "../../Assets/images/ocean with boat.jpg";
import ocean1 from "../../Assets/images/ocean1.jpg"
import mountains from "../../Assets/images/mountains.jpg"
import houseinforest from "../../Assets/images/house-in-forest.jpg"
import forest from "../../Assets/images/forest.jpg"
export default function LandingPage() {
    return (<>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src={mountains} class="d-block imgincarousel w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src={houseinforest} class="d-block imgincarousel w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={forest} class="d-block imgincarousel w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}