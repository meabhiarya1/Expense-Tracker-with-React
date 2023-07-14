import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
    
    return (
        
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.LocationOfExpenditure}</div>
                <div className='expense-item__price'>Rs.{props.amount}</div>
            </div>
    
    )
}

export default ExpenseDetails;