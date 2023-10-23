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
    total?: string 
    description?: string 
}



const DashBoardCard = ({ title, list, secondary, terciary, total, description }: DashBoardCardProps) => {
    return (
      <div className={`container-card ${secondary ? "secondary" : ""} ${terciary ? "terciary" : ""}`}>
          <p className='title-card'>{title}</p>
          <div className='line' />
          {terciary ? (
            <div className='total-products'>
              <p className='total-products-value'>{total}</p>
              <p className='total-products-description'>{description}</p>
            </div>
          ) : (
            <ul>
              {list && list.map((item, index) => (
                <li className='list-card' key={index}>
                  <p className={`${secondary ? "primary-name" : ""}`}>{item.name}:</p> 
                  <p className={`${secondary ? "primary-value" : ""}`}>{`${secondary ? item.price : item.quantity}`}</p>
                </li>
              ))}
            </ul>
          )}
      </div>
    )
  }
  

export default DashBoardCard