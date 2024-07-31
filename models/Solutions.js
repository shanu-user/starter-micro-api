import mongoose from 'mongoose'

const SolutionsSchema = mongoose.Schema({
    answerBody: {type: String, required: "Answer must have a body"},
    userAnswered: {type: String, required: "Answer must have an author"},
    userId: {type: String, required: "Answer must have an author ID"},
    answeredOn: {type: Date, default: Date.now},
    questionId: {type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true},
})

export default mongoose.model("Solutions", SolutionsSchema)
