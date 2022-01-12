import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")
        } catch (e) {
            console.error( `Unable to establish a collection handle in userDAO: ${e}` )
        }
    }

    static async addReview(restaurantId, userInfo, review, date) {
        try {
            const reviewDoc = { name: user.name,
                
            }
        }
    }
}
