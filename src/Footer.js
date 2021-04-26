const Footer = (props) => {
  return (
    <footer>
      <p>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>{props.name}</span>
      </p>
    </footer>
  );
};

export default Footer;
