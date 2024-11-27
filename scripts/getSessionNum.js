function getSessionNum (tp) {
    console.log("HI");
    let seshNotesPath = tp.file.folder(true);
    console.log(seshNotesPath);


    let numSesh = app.plugins.plugins.dataview.api
        .pages(`"${seshNotesPath}"`)
        .where(page => {
            if (page.type === "session notes"){
                return true;
            }
        }).length;
    numSesh = JSON.stringify(numSesh);
    
    console.log("Session Number " + numSesh);
    
    return numSesh;
}

module.exports = getSessionNum;