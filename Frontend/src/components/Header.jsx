function Header() {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 header border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">LoanBuddy</span>{" "}
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" className="nav-link">
              Compare Loans
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Calculator
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Resources
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Get Started
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
