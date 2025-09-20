function Footer() {
  return (
    <>
      <footer style={{backgroundColor:"#ECE4F6"}} class="py-5">
        {" "}
        <div class="row">
          {" "}
          <div class="col-6 col-md-2 mb-3">
            {" "}
            <h5>Services</h5>{" "}
            <ul class="nav flex-column">
              {" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Loan Comparison
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Interest Analysis
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Eligibility Checker
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                Assistance
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="col-6 col-md-2 mb-3">
            {" "}
            <h5>Resources</h5>{" "}
            <ul class="nav flex-column">
              {" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                Loan Guides
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Financial Tips
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Planning
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Success Stories
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="col-6 col-md-2 mb-3">
            {" "}
            <h5>Support</h5>{" "}
            <ul class="nav flex-column">
              {" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Help Center
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>{" "}
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Terms of Service
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="col-md-5 offset-md-1 mb-3">
            {" "}
            <form>
              {" "}
              <h5>Subscribe to our newsletter</h5>{" "}
              <p>Monthly digest of what's new and exciting from us.</p>{" "}
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                {" "}
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>{" "}
                <input
                  id="newsletter1"
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                />{" "}
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Project, Loan Buddy.</p>{" "}
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="#" aria-label="Instagram">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>{" "}
            <li class="ms-3">
              <a class="link-body-emphasis" href="#" aria-label="Facebook">
                <svg class="bi" width="24" height="24" aria-hidden="true">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer;
