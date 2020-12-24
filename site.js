function getSitePath (version) {
    let sitePath = '';
    if (version != '') {
        sitePath = `/version/${version}/`;
    }
    else {
        sitePath = '/';
    }return sitePath;
}
    
// calculate the path to the docs subdir, taking version into account
function getDocsPath (version) {
    let sitePath = getSitePath(version);
    return `${sitePath}`;
}

export {
    getSitePath,
    getDocsPath
}
