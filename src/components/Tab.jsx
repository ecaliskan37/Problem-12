import Hesabım from './Hesabım'
import Faturalama from './Faturalama'

const Tab = ({ tab }) => {
  return (
    <div>
      {tab === 'Hesabım' ? (
        <Hesabım />
      ) : tab === 'Faturalama' ? (
        <Faturalama />
      ) : (
        <p>Sizin için yenileniyoruz :)...</p>
      )}
    </div>
  )
}
export default Tab
