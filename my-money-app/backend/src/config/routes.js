const express = require('express')

module.exports = function(server){
    
    //Definir url base para todas as nossas rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas do ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}