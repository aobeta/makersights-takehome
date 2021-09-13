
/**
 *  Tests for the REST API
 */

describe('Product Endpoints', () => {
    describe('POST /products/:brandId - adding products', () => {

        it('successfully adds product when a valid brandId is used in the request params', () => {

        });

        it('successfully adds product when request body uses acceptable JSON schema', () => {

        });

        it('fails to add product when request body does not use acceptable JSON schema', () => {

        });

        it('fails to add product when an invalid brandId is used in the request params', () => {

        });

        it('fails to add product when an invalid request is not authenticated', () => {

        });

        it('fails to add product when an invalid request client is not authorized to add product', () => {

        });

    });

    describe('PATCH /products/:brandId/product/:productId - updating products', () => {

        it('successfully updates product when a valid brandId is used in the request params', () => {

        });

        it('successfully updates product when request body specifies the correct updates to product fields', () => {

        });

        it('fails to update product when request body does not specify the correct updates to product fields', () => {

        });

        it('fails to update product when an invalid brandId is used in the request params', () => {

        });

        it('fails to update product when an invalid request is not authenticated', () => {

        });

        it('fails to update product when an invalid request client is not authorized to update product', () => {

        });

    });

    describe('DELETE /products/:brandId/product/:productId - deleting products', () => {

        it('successfully deletes a product when a valid brandId and productId is used in the request params', () => {

        });

        it('fails to delete a product when an invalid brandId or productId is used in the request params', () => {

        });

        it('fails to delete a product when an invalid request is not authenticated', () => {

        });

        it('fails to delete a product when an invalid request client is not authorized to update product', () => {

        });

    });

    describe('GET /products/ - searching products', () => {

        it('returns the correct products when searching for products by brandId', () => {

        });

        it('returns the correct products when searching for products who are parents only', () => {

        });

        it('returns the correct products when searching for products who are children only', () => {

        });

        it('returns the correct products when using the parentId query parameter to search for products who are children of a specific parent product', () => {

        });

        it('correctly sorts search results when the sortField and sortBy query parameters are supplied in the request', () => {

        });

        it('does not sort search results if sortField is not supplied with the sortBy query parameters', () => {

        });

        it('limits the search results by the pageSize parameter', () => {

        });

        it('returns the correct page of search results when used in accordance with the pageSize queryParameter', () => {

        });
    });
});
