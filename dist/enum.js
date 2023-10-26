"use strict";
var GitRepo;
(function (GitRepo) {
    GitRepo["NotCommited"] = "Not Commited";
    GitRepo["Committed"] = "Committed";
    GitRepo["All Done"] = "All Done";
})(GitRepo || (GitRepo = {}));
function isRepoComitted(repo) {
    return repo === GitRepo.Committed;
}
let gitCommit = isRepoComitted(GitRepo.Committed);
console.log(gitCommit);
function getCoursePrice(repo) {
    switch (repo) {
        case GitRepo.Committed:
            return 12;
        case GitRepo["All Done"]:
            return 10;
        case GitRepo.NotCommited:
            return 0;
        default:
            return 0;
    }
}
console.log(getCoursePrice(GitRepo.Committed));
console.log(getCoursePrice(GitRepo["All Done"]));
