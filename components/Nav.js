import Link from "next/link";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>

      <style jsx>{`
        .nav {
          display: flex;
          justify-content: center;
          padding: 0;
        }

        .nav li {
          display: flex;
          text-align: left;
          color: inherit;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          list-style: none;
        }

        .nav li a {
          padding: 1.5rem;
          width: 100%;
        }

        .nav li:hover,
        .nav li:focus,
        .nav li:active {
          color: #0070f3;
          border-color: #0070f3;
        }
      `}</style>
    </ul>
  );
};

export default Nav;
