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

    static async addReview(restaurantId, user, review, date) {
        try {
            const reviewDoc = { name: user.name,
                user_id: user._id,
                date: date,
                text: review,
                restaurantId: ObjectId(restaurantId)
            }
            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e}
        }
    }
}
