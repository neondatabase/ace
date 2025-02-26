var oop = require("../lib/oop");
var TextMode = require("../mode/text").Mode;
var PgsqlHighlightRules = require("./pgsql14_highlight_rules").Pgsql14HighlightRules;

var Mode = function() {
    this.HighlightRules = PgsqlHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "--";
    this.blockComment = {start: "/*", end: "*/"};

    this.getNextLineIndent = function(state, line, tab) { 
        if (state == "start" || state == "keyword.statementEnd") {
            return "";
        } else {
            return this.$getIndent(line); // Keep whatever indent the previous line has
        }
    };

    this.$id = "ace/mode/pgsql14";
}).call(Mode.prototype);

exports.Mode = Mode;
