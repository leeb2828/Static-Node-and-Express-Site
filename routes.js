const express = require('express');
const router = express.Router();
const data = require('./data.json');

function render_project(the_project, res) {
    if (the_project) {
        res.render('project');
    } else {
        const err = new Error('The Project you are looking for does not exist');
        err.status = 500;
        res.locals.error = err;
        res.render('error');
    }
}

router.get('/', function(req, res) {
    res.locals.projects = data.projects;
    res.render('index');
})

router.get('/about', function(req, res) {
    res.render('about');
})

router.get('/project/:id', (req, res) => {
    res.locals.project = data.projects[req.params.id];
    render_project(data.projects[req.params.id], res);
});

router.get('/projects/:id', (req, res) => {
    res.locals.project = data.projects[req.params.id];
    render_project(data.projects[req.params.id], res);
});

router.get('/proj/:id', (req, res, next) => {
    res.locals.project = data.projects[req.params.id];
    render_project(data.projects[req.params.id], res);
});

module.exports = router;