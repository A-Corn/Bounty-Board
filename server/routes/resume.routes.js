const SubmissionController = require('../controllers/resume.controller');

module.exports = (app) => {
    app.get('/api/submissions', SubmissionController.findAll);
    app.get('/api/submissions/:id', SubmissionController.findOne);
    app.post('/api/submissions', SubmissionController.createSubmission);
    app.put('/api/submissions/edit/:id', SubmissionController.updateSubmission);
    app.delete('/api/submissions/:id', SubmissionController.deleteSubmission);
}