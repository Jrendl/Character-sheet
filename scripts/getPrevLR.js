async function getPrevLR (tp, prevSesh) {
    console.log(`"seeing if ended session ${prevSesh} with LR"`)

    let fileDir = tp.file.folder(true);
    let prevSeshFile = "";
    app.plugins.plugins.dataview.api
        .pages(`"${fileDir}"`)
        .where(page => {
            if (page.file.name === "Session " + `${prevSesh}`){
                prevSeshFile = page.file.name
            }
        });

    console.log(prevSeshFile)
    prevSeshFile = `${fileDir}` + "/" + `${prevSeshFile}` + ".md";
    console.log(prevSeshFile + ": " + typeof(prevSeshFile));
    const file = tp.file.find_tfile(prevSeshFile)

    const fileContent = await app.vault.read(file);
    console.log(typeof(fileContent))
    let lines = fileContent.split("\n");
    let lastLine = ""
    let i = 1
    while (lastLine === ""){
        lastLine = lines[lines.length - i];
        i++;
    }

    console.log(lastLine);

    if (lastLine.includes("LR")) {
        return 1;
    } else {
        return 0;
    }


}

module.exports = getPrevLR;