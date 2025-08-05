import { MercadoPagoConfig, Preference } from 'mercadopago'


const MP_ACCESS_TOKEN='APP_USR-1213563575706940-041714-f44c15cc6c7cf0a8a755150305750475-2393129299'
 
export const createOrder = async (req, res) => {
const client = new MercadoPagoConfig({accessToken: MP_ACCESS_TOKEN})

const preference = new Preference(client)

try {
   const response = await preference.create({
        body: {
           ...req.body,
            redirect_urls: {
                success: 'https://www.mercadopago.com.ar/mp-assets/img/success.png',
                failure: 'https://www.mercadopago.com.ar/mp-assets/img/failure.png',
                pending: 'https://www.mercadopago.com.ar/mp-assets/img/pending.png'
            },
        }
    })
    res.json(response)
    console.log(response)
}
catch (error) {
    console.log(error)
}}