import React from 'react'

export default function HomePage({ foods, wastes }) {

    const totalQuantityWasted = (wastesArray) => {
        let wastesObj = {quantity: 0}
        wastesArray.map(waste => {
            if(waste.quantity_unit === 'oz') {
                return wastesObj.quantity += +waste.quantity / 16
            } else {
                return wastesObj.quantity += +waste.quantity
            }
        })
        return wastesObj
    }

    const aboutToExpire = (foodsArray) => {
        let foodsObj = {'low': 0, 'medium': 0, 'high': 0}
        foodsArray.map(food => {
            if(dateDifference(food.expiration_date) < 4) {
                return foodsObj['low'] += 1
            } else if (dateDifference(food.expiration_date) > 3 && dateDifference(food.expiration_date) < 7) {
                return foodsObj['medium'] += 1
            } else {
                return foodsObj['high'] += 1
            }
        }
    )
    return foodsObj
}

    const dateDifference = (expirationDate) => {
    }

    return (
        <div>
            <div className='home-page-container'>
                <div className='home-page-food-count-container'>
                    <h3 className='home-page-food-count-message'>Items in Fridge</h3>
                    <img className='home-page-food-count-img' src='https://media.npr.org/assets/img/2012/05/04/samsung-smart-fridge_custom-5f6d2d159e369d4a6dd9f052bc3c6ddbe2fd4b0c-s800-c85.jpg' alt='fridge' />
                    <h4 className='home-page-food-count'>{foods.length}</h4>
                </div>
                <div className='food-page-expiration-count-container'>
                    <h3 className='home-page-food-count-message'>Food about to Expire</h3>

                    <div>
                        <h3 className='expiration-number high'>{aboutToExpire(foods).high}</h3>
                        <h3 className='expiration-message'>in 7 days</h3>
                    </div>

                    <div>
                        <h3 className='expiration-number medium'>{aboutToExpire(foods).medium}</h3>
                        <h3 className='expiration-message'>between 4 to 7 days</h3>
                    </div>
                   
                    <div>
                        <h3 className='expiration-number low'>{aboutToExpire(foods).low}</h3>
                        <h3 className='expiration-message'> under 3 days</h3>
                    </div>

                </div>
            </div>
            <div className='home-page-waste-cost-quantity-container'>
                <div className='home-page-wasted'>
                    <h4 className='home-page-food-count-message-bottom'>{totalQuantityWasted(wastes).quantity.toFixed(2)} kgs.</h4>
                    <h3 className='home-page-food-count-message-bottom'>Total Food Wasted</h3>
                </div>
            </div>
        </div>
    )
}
