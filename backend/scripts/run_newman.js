const newman = require('newman');
const dotenv = require('dotenv');
dotenv.config();

newman.run({
    collection: './backend/collections/tasks.json', 
    reporters: ['htmlextra'],
    iterationCount: 1,
    environment: {
        "id": "bd65ffff-6443-41b1-832f-bd33940330ec",
        "name": "integration",
        "values": [
            {
                "key": "token",
                "value": `${process.env.API_KEY}`,
                "enabled": true
            },
            {
                "key": "api",
                "value": `${process.env.URL}`,
                "enabled": true
            },
            {
                "key": "projectId",
                "value": "2260972332",
                "enabled": true
            }
        ],
        "_postman_variable_scope": "environment",
        "_postman_exported_at": "2021-03-20T00:56:11.533Z",
        "_postman_exported_using": "Postman/8.0.7"
    },
    reporter: {
        htmlextra: {
            export: './backend/reports/report.html',
            logs: true,
            browserTitle: "NEWMAN REPORT",
            title: "WORKSHOP WIZELINE",
            titleSize: 4
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney"
        }
    }
}).on('start', function (err, args) { // on start of run, log to console
    console.log('######  Running a collection...   #######', '\n');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('   ','######### Collection run encountered an error. #######');
    }
    else {
        console.log('  ','#### Collection run completed. ');
    }
});