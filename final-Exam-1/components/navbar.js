export const navbar = () =>{
    return  `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://iconape.com/wp-content/files/iw/241462/png/241462.png" width="30px" alt="" class="img-fluid"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/final-Exam-1/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/final-Exam-1/pages/cart.html">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/final-Exam-1/pages/signup.html">Sign-Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/final-Exam-1/pages/login.html">Log-In</a>
          </li>
          </li>
          
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
}