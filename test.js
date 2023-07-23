const { exec } = require("child_process");

setInterval(() => {
    console.log('ss')
}, 5000)

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