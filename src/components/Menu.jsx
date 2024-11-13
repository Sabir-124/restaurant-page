import '../styles/menu.css';
import Coffee from './Coffee';
import IceCreams from './IceCreams';
import Juice from './Juice';
import Kebabs from './Kebabs';
import MenuHeader from './MenuHeader';
import MenuHome from './MenuHome';
import RiceSelection from './RiceSelection';
import ScrollTop from './ScrollTop';
import Tea from './Tea';

const Menu = () => {
  return (
    <div className="menu-section">
      <ScrollTop />
      <MenuHeader />
      <MenuHome />
      <RiceSelection />
      <Kebabs />
      <IceCreams />
      <Tea />
      <Coffee />
      <Juice />
    </div>
  )
}

export default Menu;