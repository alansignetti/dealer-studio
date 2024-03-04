import "./Header.scss";
import headerImg from "../../images/header-bg.jpg";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to G Automotive</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          qui, sequi corrupti, voluptatum eos modi cum totam expedita cupiditate
          voluptatibus non neque? Voluptates, explicabo! Dolorum, voluptate
          veniam! Repudiandae at ducimus, quaerat possimus id voluptatem enim
          quos in repellendus quod facilis, molestiae commodi. In repudiandae
          corporis blanditiis sapiente ipsam repellendus optio excepturi nulla
          rerum fugiat amet. Odio iusto voluptas harum vitae ?
        </p>
        <button className="header-button">Contact Us</button>
      </div>
      <img src={headerImg} alt="Header" className="header-image" />
    </header>
  );
};

export default Header;
