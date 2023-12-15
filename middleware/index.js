module.exports = (req, res, next) => {
    return res.status(200).json({ code: 200, message: "Bienvenidos a la evaluación de administrativos UAQ" })
}