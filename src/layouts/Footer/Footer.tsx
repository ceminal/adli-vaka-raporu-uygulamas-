import './Footer.scss';

interface FooterProps {
    info:string;
}

const Footer = ({info}: FooterProps) => {
    return (
      <div className="footer">
        <p className="footer-title">{info}</p>
      </div>
    )
  }

export default Footer