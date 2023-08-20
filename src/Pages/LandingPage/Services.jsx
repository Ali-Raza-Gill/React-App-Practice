import paris from '../../Assets/images/paris.jpg'
import tokyo from '../../Assets/images/tokyo.jpg'
import newyork from '../../Assets/images/new york.jpg'
export default function Services() {

    return (<>

        <div className="container mt-5 mb-4 pb-5 ">
            <div className="row ">
                <div className="col ">
                    <h3 className='text-center'>Our Services</h3>
                    <hr />
                  <div className="row mt-5">
                    <div className="col ml-5">
                    <div class="card" >
                            <img src={paris} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">paris</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card" >
                            <img src={tokyo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tokyo</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card" >
                            <img src={newyork} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">New York</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div className="row mt-4">
                    <div className="col">
                    <div class="card" >
                            <img src={newyork} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card" >
                            <img src={tokyo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card" >
                            <img src={newyork} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                  </div>
                        </div>
                    </div>
                </div>

            </>)

}