exports.reswithimg = (req,res) => {
    let image = req.params.image;
    res.render(image);
}