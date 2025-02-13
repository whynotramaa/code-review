import aiService from '../services/ai.service.js';

//we are making controller here 
const getReview = async (req, res) => {
    const code = req.body.code;
    console.log('Code received for review:', code);

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);
    res.send(response);
};

export default getReview;
