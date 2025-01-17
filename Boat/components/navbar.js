

const Navbar = () => {
    return `<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img
                src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
                class="img-fluid" height="60px" width="60px" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Boat/index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Boat/pages/BoAtPersonalisation.html">BoAt Personalisation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Boat/pages/GiftWithBoAt.html">Gift With BoAt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Boat/pages/CorporateOrders.html">Corporate Orders</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        More
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item more" href="#">Daily Deals</a></li>
                        <li><a class="dropdown-item more" href="#">Blogs</a></li>
                        <li><a class="dropdown-item more" href="#">Refer & Earn</a></li>
                        <li><a class="dropdown-item more" href="#">Careers</a></li>
                        <li><a class="dropdown-item more" href="#">Social Responsbility</a></li>
                        <li><a class="dropdown-item more" href="#">Store Locator</a></li>
                        <li><a class="dropdown-item more" href="#">BoAt Community</a></li>
                    </ul>
                </li>
                
                    <li class="nav-item">
          <a class="nav-link btn btn-primary border border-2" href="/Boat/pages/signUP.html" >Sign-UP</a> </a>
        </li>
                    <li class="nav-item">
          <a class="nav-link btn btn-primary border border-2" href="/Boat/pages/logIn.html" >Log-in</a> </a>
        </li>
            </ul>
            <form class="d-flex align-items-center gap-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <i class="fa-regular fa-user"></i>
                <i class="fa-solid fa-bag-shopping" id="cart"></i>
            </form>
        </div>
    </div>
</nav>`
}

export default Navbar;