import froiImage from "../assets/images/Froi.jpeg";

const Info = () => {
  return (
    <header>
      <img src={froiImage} className="info-image" alt="profile-pic" />
      <div className="info-text">
        <h1>Froilan Buendia</h1>
        <h2>Frontend Developer</h2>
        <p>froilangbuendia@gmail.com</p>
        <div className="info-btns">
          <a
            href="mailto:froilangbuendia@gmail.com"
            className="email"
            target="_blank"
          >
            <i class="fa-solid fa-envelope"></i>
            Email
          </a>
          <a
            href="https://www.linkedin.com/"
            className="linkedin"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Info;
