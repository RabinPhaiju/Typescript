// enum Crops {
//     Barley,
//     Corn,
//     Wheat,
// }

// console.log(Crops);


// // enum starts with 1
// enum Crops1 {
//     Barley =1 ,
//     Corn,
//     Wheat,
// }

// console.log(Crops1);


// enum emplified
// cannot use expression
enum GitRepo {
    NotCommited = "Not Commited",
    Committed = "Committed",
    "All Done" = "All Done",
}

function isRepoComitted(repo:GitRepo): boolean {
    return repo === GitRepo.Committed;
}

let gitCommit = isRepoComitted(GitRepo.Committed);
console.log(gitCommit);

// checking using enum
function getCoursePrice(repo:GitRepo): number {
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