import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://cherenkor.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Sergey Kucherenko
      </a>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a:hover {
          color: #0070f3;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
