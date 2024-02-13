const git = fetch('https://api.github.com/users/dvidcr');

function name() {
    console.log(git.catch("login"))
}