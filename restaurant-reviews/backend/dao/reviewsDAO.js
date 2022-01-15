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
                restaurant_id: ObjectId(restaurantId)
            }
            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e}
        }
    }

    static async updateReview(reviewId, userId, text, date) {
        try {
            const updateResponce = await reviews.updateOne(
                { user_id: userId, _id: ObjectId(reviewId) },
                { $set: { text: text}, date: date }
            )

            return updateResponce
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return { error: e}
        }
    }

    static async deleteReview(reviewId, userId) {
        try {
            const deleteResponce = await reviews.deleteOne(
                { user_id: userId, _id: ObjectId(reviewId) }
            )
            
            return deleteResponce
        } catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return { error: e}
        }
    }
}
