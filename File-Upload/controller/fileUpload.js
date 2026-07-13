const File = require("../models/File");


//localfileupload -> handler function


exports.localFileUpload = async (req, res) => {
    try {
        //fetch file
        const file = req.files.file;
        console.log("File fetched", file);

        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->", path)

        //add path to the move function
        file.mv(path, (err) => {
            console.log(err);
        });

        //create a successfull response
        res.json({
            success: true,
            message: "Local file uploaded successfully",


        });

    }
    catch (error) {
        console.log(error);

    }

}
