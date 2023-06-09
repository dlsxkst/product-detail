//import fs module
const fs = require('fs')




//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function (done) {
  fs.readFile('src/products.json', (err, fileContent) => {
    if (err) {
      return done(err)
    }
    let productData = JSON.parse(fileContent);
    return done(undefined, productData);
  })

  //parse the filecontent and save it in another varible say productdata
  //return the callback with first parameter as undefined and second parameter as productdata
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function (id, done) {
  //write all the logical steps
  fs.readFile('src/products.json', (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting product details")
    }
    let productData = JSON.parse(fileContent)
    const fetchedProduct = productData.find(prd => prd.id == id)
    if (fetchedProduct === undefined) {
      return done("No product found for requested id")
    }
    return done(undefined, fetchedProduct)
  })
  //return the callback with first parameter as undefined and second parameter as productDetails

}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
// const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  // fs.readFile("src/products.json", (err, fileContent) => {
  //   if (err) {
  //     return done("Encountered error while getting users details..")
  //   }
  //   let productData = JSON.parse(fileContent)
  //   productData.push(ProductDetails)

  //   fs.writeFile('src/products.json', JSON.stringify(productData), (err, saveContent) => {
  //     if (err) {
  //       return done("Encountered error while saving product details..")
  //     }
  //     return done(undefined, "Successfully save product details..")
  //   })

  // })

  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData

  //Write the productData into the file 
  const saveProductDetails = function (productDetails, done) {
    fs.readFile("src/products.json", (err, fileContent) => {
      if (err) {
        return done('Encountered error while getting users details.')
      }
  
      let data = JSON.parse(fileContent)
      data.push(productDetails);
  
      fs.writeFile('src/products.json', (JSON.stringify(data)), (err) => {
        if (err) {
          return done("Ecountered error while save users details..")
        }
        return done(undefined, "Successfully save user details")
      })
    })
  }

  //return the callback with undefined and ProductDetails
// }

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

// const deleteProductById = function (productId, done) {
//   //Write all the logical steps
//   fs.readFile('src/products.json', (err, fileContent) => {
//     if(err){
//       return done('Encountered error while getting product details')
//     }
//     let productData = JSON.parse(fileContent)
//     let index = productData.findIndex(prd => prd.productId == productId)

//     if(index == -1){
//       return done('No product for requested productId')
//     }
//     fs.writeFile('src/products.json', JSON.stringify(productData), (err) => {
//       if(err) {
//         return done("Encountered error while deleting product details")
//       }
//       return done(undefined, "Successfully deleted product details..")
//     })
//   })
//   //return the callback with first parameter as undefined and second parameter as productDetails
// }
const deleteProductById = function (productId, done) {
  //Write all the logical steps
  fs.readFile('src/products.json', (err, fileContent) => {
    if (err) {
      return done('Encountered error while getting product details')
    }
    let productData = JSON.parse(fileContent)
    let index = productData.findIndex(prd => prd.id == productId)

    if (index == -1) {
      return done('No product for requested productId')
    }

    let newData = productData.filter((data) => {
      return data.id != productId
    });

    fs.writeFile('src/products.json', JSON.stringify(newData), (err) => {
      if (err) {
        return done("Encountered error while deleting product details")
      }
      return done(undefined, "Successfully deleted product details..")
    })
  })
  //return the callback with first parameter as undefined and second parameter as productDetails
}


module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById

}