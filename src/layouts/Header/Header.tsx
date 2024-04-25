import './Header.scss';

interface HeaderProps {
    title:string;
}

const Header = ({title}: HeaderProps) => {
    return (
      <div className="header">
        <h2 className="header-title">{title}</h2>
      </div>
    )
  }

export default Header