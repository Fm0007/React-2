import spinner from './spinner.gif'

const Loadimg = () => {
  return (
    <div className='loadingimg'>
      <img src={spinner} alt="Loading"/>
      <h1>Récupération des données</h1>
    </div>
  )
}

export default Loadimg
