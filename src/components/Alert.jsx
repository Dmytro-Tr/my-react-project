import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNAme = ["alert", variant];

  if (outlined) {
    classNAme.push("is-outlined");
  }

  if (elevated) {
    classNAme.push("is-elevated");
  }

  return <p className={classNAme.join(" ")}>{children}</p>;
};

export default Alert;
