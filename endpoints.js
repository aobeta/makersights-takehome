/**
 * REST API ENDPOINTS
 *
 *  POST /products/:brandId
 *      - endpoint for adding a new product that belongs to a brand.
 *
 *      - params:
 *          - brandId: the Id of the brand that the product will belong to.
 *      - request:
 *          - Content-Type: application/json
 *          - Body: the product that we want to add.
 *      - response:
 *          Success:
 *              - status code: 200 OK
 *              - Content-Type: application/json
 *              - Body: the product that was successfully added.
 *          Error:
 *              - status codes:
 *                  400 Bad Request - Malformed request body
 *                  401 UnAuthorized - Client not authenticated
 *                  403 Forbidden - Client authenticated but not authorized to perform product addition
 *              - Content-Type: application/json
 *              - Body: an error message explaining the error.
 *
 *
 *
 *  PATCH /products/:brandId/product/:productId
 *      - endpoint for updating a product that belongs to a brand
 *
 *      - params:
 *          - brandId: the Id of the brand that the product belongs to.
 *          - productId: the Id of the product that we want to update.
 *      - request:
 *          - Content-Type: application/json
 *          - Body: the updates that we want to make to the product. This may contain only a subset of the fields that we would like to update on the product
 *      - response:
 *          Success:
 *              - status code: 202 Accepted
 *              - Content-Type: application/json
 *              - Body: the product that was successfully updated.
 *          Error:
 *              - status codes:
 *                  400 Bad Request - Malformed request body
 *                  404 Not Found - Product the client is trying to update does not exist
 *                  401 UnAuthorized - Client not authenticated
 *                  403 Forbidden - Client authenticated but not authorized to perform product update
 *              - Content-Type: application/json
 *              - Body: an error message explaining the error.
 *
 *
 *
 *  DELETE /products/:brandId/product/:productId
 *      - endpoint for deleting a product that belongs to a brand
 *
 *      - params:
 *          - brandId: the Id of the brand that the product belongs to.
 *          - productId: the Id of the product that we want to delete.
 *      - response:
 *          Success:
 *              - status code: 202 Accepted
 *              - Body: no content
 *          Error:
 *              - status codes:
 *                  404 Not Found - Product that the client is trying to delete does not exist
 *                  401 UnAuthorized - Client not authenticated
 *                  403 Forbidden - Client authenticated but not authorized to perform product deletion
 *              - Content-Type: application/json
 *              - Body: an error message explaining the error.
 *
 *
 *  GET /products/
 *      - endpoint for searching for products
 *
 *      - query parameters:
 *          - brandId: (number)  Can be a list of Id's or just a single Id. only return products whose brandId's match this parameter
 *          - parentsOnly: (boolean) only return products that are parents of some other products.
 *          - childrenOnly: (boolean) only return products that are children of some other products.
 *          - parentId: (number) only return all the products that are children of the product whose Id matches this parameter
 *          - sortField: (string) the field to sort products by.
 *          - SortBy: (string) can be "ascending", "asc", "descending", "desc". Only works if sortField parameter is specified.
 *          - pageSize: (number) the maximum number of products returned in this request. by default a maximum of 10 products are returned
 *          - page: (number) which page of products we are returning. Works together with pageSize. For example if we have 15 products that match search criteria
 *                  and a pageSize of 10 and a page of 2, then we will skip the first 10 products and return at most the next 10 products.
 *      - response:
 *          Success:
 *              - Status code: 200 OK
 *              - Content-Type: application/json
 *              - Body: A JSON object with two properties: a "count" property that lists how many results were returned, and a data property whose value is a JSON Array
 *          Error:
 *              - Status Codes:
 *                  401 UnAuthorized - Client is not authenticated.
 *              - Content-Type: application/json
 *              - Body: an error message explaining the error.
 */



/** Sample Implementation of  POST /products/:brandId */

const app = new Express();

const isAuthenticated = () => (request, response, next) => {
    if (request.session != null) {
        return next();
    }

    return response.status(401).json({ errorMessage: 'Client not authenticated' });

    // or alternatively allow Express error handler to handle error in middleware
    // return next(new Error('Client not authenticated'))
}

const isAuthorized = () => (request, response, next) => {
    // perform some check to see if client is authorized

    const isAuthorized = checkIfClientAuthorized(request);

    if (isAuthorized) {
        next();
    }

    return response.status(401).json({ errorMessage: 'Client not authorized' });

    // or alternatively allow Express error handler to handle error in middleware
    // return next(new Error('Client not authorized'))
}


app.post(
    '/products/:brandId',
    isAuthenticated(),
    isAuthorized(),
    async (request, response) => {
        const { brandId } = request.params;

        const brand = brandRepository.findById(brandId);

        if (brand == null) {
            return response.status(404).json({ errorMessage: 'Brand not found'});
        }

        return response.status(200).json({
            "id": 1,
            "createdAt": "2021-09-13",
            "updatedAt": "2021-09-13",
            "price": 18.00,
            "name": "Dope Socks",
            "parentId" : 5021,
            "brandId": 2057
        });
    }
);
