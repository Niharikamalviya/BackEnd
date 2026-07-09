const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        const comment = new Comment({
            post, user, bpdy
        });

        const savedComment = await comment.save();


    }
    catch (err) {

    }

}