function spellScaling (tp) {
    if (tp.frontmatter["scaling"] === "Spell Slot") {
        return tp.file.include("[[Spell Slot Scaling]]");
    } else if (tp.frontmatter["scaling"] === "Sorcerer Level") {
        return tp.file.include("[[Sorc Level Scaling]]");
    } else {
        return '';
    }
}

module.exports = spellScaling;

