import Hesabım from './Hesabım'
import Faturalama from './Faturalama'

const Tab = ({ tab }) => {
  return <div>{tab === 'Hesabım' ? <Hesabım /> : <Faturalama />}</div>
}
export default Tab
