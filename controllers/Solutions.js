import Questions from './models/Questions.js';
import Solutions from '../models/Solutions.js';

const getAnswersFromBot = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('answers');
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
