import { priceConvertedToReal } from '../../utils/priceReal'
import './DashBoardCard.scss'

type Products = {
    name: string
    category: string
    price?: string
    quantity: string
}

interface DashBoardCardProps {
    title: string
    list?: Products[] 
    secondary?: boolean
    terciary?: boolean
    total?: number 
    description?: string
}



const DashBoardCard = ({ title, list, secondary, terciary, total, description }: DashBoardCardProps) => {
    return (
      <div className={`container-card ${secondary ? "secondary" : ""} ${terciary ? "terciary" : ""}`}>
          <p className='title-card'>{title}</p>
          <div className='line' />
          {terciary ? (
            <div data-testid='total-products' className='total-products'>
              <p className='total-products-value'>{total}</p>
              <p className='total-products-description'>{description}</p>
            </div>
          ) : (
            <ul>
              {list && list.map((item, index) => (
                <li className='list-card' key={index}>
                  <p className={`${secondary ? "primary-name" : ""}`}>{item.name}:</p> 
                  <p className={`${secondary ? "primary-value" : ""}`}>{`${secondary ? priceConvertedToReal(parseFloat(item.price || '0')) : item.quantity}`}</p>
                </li>
              ))}
            </ul>
          )}
      </div>
    )
  }
  

export default DashBoardCard