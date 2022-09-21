const InterviewController = require('../controllers/interview.controller');

module.exports = app => {
    app.get('/api/interviews', InterviewController.findAllInterviews);
    app.get('/api/interviews/:id', InterviewController.findOneInterview);
    app.post('/api/interviews', InterviewController.addInterview);
    app.put('/api/interviews/edit/:id', InterviewController.updateInterview);
    app.delete('/api/interviews/:id', InterviewController.deleteInterview);
}