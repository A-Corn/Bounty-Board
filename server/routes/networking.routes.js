const NetworkingController = require("../controllers/networking.controller");

module.exports = app => {
    app.get('/api/network_contacts', NetworkingController.findAllContacts);
    app.get('/api/network_contacts/:id', NetworkingController.findOneContact);
    app.post('/api/network_contacts', NetworkingController.addNetworkContact);
    app.put('/api/network_contacts/edit/:id', NetworkingController.updateContact);
    app.delete('/api/network_contacts/:id', NetworkingController.deleteContact);
}