import Sale from "../models/sale.js"

//Sales
export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find()
        res.send(sales)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createSale = async (req, res) => {
    try {
        const {products, prices, value, date} = req.body
        const newSale = new Sale({products, prices, value, date})
        await newSale.save()
        return res.json(newSale)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteSale = async (req, res) => {
    try {
        const saleRemoved = await Sale.findByIdAndDelete(req.params.id)
        if(!saleRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}