import { Img } from 'react-image'
import Spinner from './shared/Spinner'
import '../styles/ProductDetailsPage.css'

const PDPCardRibbon = ({ data, t, language }) => {
	return (
		<div className='card-ribbon'>
			{data && (
				<>
					<Img
						className='card-ribbon-logo'
						src={data.developer.logo_path}
						alt='logo'
						loader={<Spinner />}
					/>
					<div className='ribbon-desc'>
						<div className='ribbon-title'>{`${data.name} ${t('app_in')} ${data.area.name} ${t('app_by')} ${data.developer.name}`}</div>
						<div className='ribbon-address'>{`${data.area.name}, ${t('app_eg')}`}</div>
					</div>
				</>
			)}
		</div>
	)
}

export default PDPCardRibbon
