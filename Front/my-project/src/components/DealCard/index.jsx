import { Card } from 'antd'
import image from '../../assets/images/deal-discount-image1.svg'
import star from '../../assets/icons/star.svg'
import location from '../../assets/icons/location.svg'
import './styles.sass'

const DealCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 250,
      }}
      cover={<img alt='' src={image} />}
    >
      <div className="card-body">
        <div className="flex justify-between">
            <h5 className="deals-discount__gallery-container--title">Madrid</h5>
            <div className="rank flex items-center gap-3">
                <img className="rank__image" src={star} alt="star icon" />
                <span className="rank__span">4.8</span>
            </div>
        </div>
        <div className="location-prices flex justify-between">
            <div className="location flex items-center">
                <img src={location} alt="location icon" />
                <span className="ps-4">Spain</span>
            </div>
            <div className="prices flex">
                <span className="prices__old">$950</span>
                <span className="prices__current">$850</span>
            </div>
        </div>
      </div>
    </Card>
  )
}

export default DealCard
