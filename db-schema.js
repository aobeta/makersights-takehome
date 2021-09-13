/**
 * Database Model For Products and Brands
 *
 * Database Engine : MySQL
 *
 * Models using JSON Schema:
 *  Brand
 *      - id : int (auto generated and auto incremented)
 *      - name : string
 *      - createdAt : Date
 *      - updatedAt : Date
 *
 *  Product
 *      - id : long (auto-generated and auto incremented)
 *      - name : string
 *      - productImageUrl: string
 *      - price : number
 *      - createdAt: Date
 *      - updateAt: Date
 *      - parentId: int (foreign-key reference to Product Table)
 *      - brandId: int (foreign-key reference to a Brand Table)
 *
 */
