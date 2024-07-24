import { InfinitySpin } from 'react-loader-spinner'
import style from './Loader.module.css'
const Loader = () => {
  return (
    <div className={style.loader_container}>
        <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
        />
    </div>
  )
}

export default Loader