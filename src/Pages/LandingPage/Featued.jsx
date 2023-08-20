import ocean2 from "../../Assets/images/ocean2.jpg"
import climbing from "../../Assets/images/climbing featured-activitiy.jpg"
import palm from "../../Assets/images/palm featured-activites.jpg"
export default function Featured() {
    return (<>
        {/* <!-- Featured Activity  --> */}

        <div className="container mt-5 mb-5 pt-5 ">
            <div className="row ">
                <div className="col">
                    <h2 className="mb-4 pb-3 text-center">Featured Activities</h2>
                    <hr />
                </div>
            </div>
            <div className="row featured-row mt-5">
                <div className="col">
                    <img src={palm} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Palm Tree</h3>
                    <p>Indulge in luxury at The Waldorf Astoria, a historic landmark hotel renowred for its elegance and sophistication.</p>
                </div>
                <div className="col">
                    <img src={climbing} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Climbing</h3>
                    <p>Relax in style at The Four Seasons, featuring breathtaking views, an award-winnig spa, and gourmet dining options.</p>
                </div>
                <div className="col">
                    <img src={ocean2} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Swimming</h3>
                    <p>Experience luxury accommodations and impeccable service at the Ritz Carlton, located in the heart of the city.</p>
                </div>
            </div>
            <div className="row featured-row mt-5">
                <div className="col">
                    <img src={climbing} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Climbing</h3>
                    <p>Relax in style at The Four Seasons, featuring breathtaking views, an award-winnig spa, and gourmet dining options.</p>
                </div>
                <div className="col">
                    <img src={palm} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Palm Tree</h3>
                    <p>Indulge in luxury at The Waldorf Astoria, a historic landmark hotel renowred for its elegance and sophistication.</p>
                </div>
                <div className="col">
                    <img src={ocean2} className="feautred-img" alt="" />
                    <h3 className="mt-4"> Swimming</h3>
                    <p>Experience luxury accommodations and impeccable service at the Ritz Carlton, located in the heart of the city.</p>
                </div>
            </div>
        </div>




    </>)
}