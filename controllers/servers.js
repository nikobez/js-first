export const getAll = (req, res) => {
    res.status(200)
    res.json({id: 1,text: 'file'})
}

export const postFile = (req,res) => {
    res.status(200)
    res.json({ok: 1})
}