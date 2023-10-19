const { exec } = require("child_process");
let i = 1;
function commit() {
    console.log('====================');
    console.log('Iteration ' + i++)
    console.log('====================');
    exec("./commit.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}
commit();
setInterval(() => {
    commit();
}, 5000)


let callAmount = 0;
process.on('SIGINT', function () {
    if (callAmount < 1) {
        exec("./push.sh", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        setTimeout(() => process.exit(0), 1000);
    }

    callAmount++;
});
