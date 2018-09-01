const _ = require('underscore')

// const indexById = (arr, _id) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]['_id'] === _id) return i;
//   }
//   return
// }

const getUpdatedCartProductsIdArray = (userCartProducts, appCartProducts) => {
  const updatedArray = []
  userCartProducts.forEach(product => {
    const index = _.findIndex(appCartProducts, element => product._id === element._id )
    if (index !== -1) {
      updatedArray.push(appCartProducts[index])
    } else {
      updatedArray.push(product)
    }
  })

  return updatedArray

}


console.log(getUpdatedCartProductsIdArray([
  {
    _id: 1,
    qty: 3
  },
  {
    _id: 2,
    qty: 3
  },
  {
    _id: 3,
    qty: 3
  },
], [
  {
    _id: 1,
    qty: 4
  },
  {
    _id:2,
    qty: 4
  },
]))

