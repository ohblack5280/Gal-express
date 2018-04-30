const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 9000

let cohorts = [{
    id: 1,
    cohortName: "g100",
    cohortCode: "17-01-WD-DP",
    numberOfStudents:28
}, {
    id:2,
    cohortName: "g105",
    cohortCode: "17-01-DS-GT",
    numberOfStudents: 24
}, {
    id: 3,
    cohortName: "g109",
    cohortCode: "17-02-WD-PX",
    numberOfStudents: 30
}, {
    id: 4,
    cohortName: "g110",
    cohortCode: "17-03-WD-BD",
    numberOfStudents: "29"
}]

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

const app = express();
app.use(cors());

app.get("/", function (request, response) {
    response.json({data: cohorts});
});

app.get("/:id", function (request, response) {
    var record = findById(cohorts, request.params.id);
    if (!record){
        response.status(404).json({
            error: {
                message: "No record found!"
            }
        });
    } else {
        response.json({data: record});
    }
});

app.listen(PORT);