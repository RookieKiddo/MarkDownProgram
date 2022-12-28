/*
TODO:
1. Fork this project by clicking "Fork" in the top left or by saving this file
2. Create a markdown function using regular expressions to convert the strings to formatted html
3. Send the forked project url (i.e. https://stackblitz.com/edit/typescript-xxxxxx) to kokeefe@multistate.us

To learn more about markdown and regular expressions, refer to:
https://guides.github.com/features/mastering-markdown/
https://www.w3schools.com/js/js_regexp.asp
*/
var strings = [
    'This is **bold** text.',
    'This is __underlined__ text.',
    'This is ~~strikethrough~~ text.',
    'This is *italic* text.',
    'This is a hyperlink: https://www.google.com/',
    'This is an email: leeroy.jenkins@gmail.com',
    '> blockquote'
];
/**
 * Converts markdown strings to formatted html using regular expressions.
 * @param string - String in markdown format
 * @returns String converted to formatted html
 */
var markdown = function (string) {
    // TODO: Implement your markdown function here
    var htmlText = string
        .replace(/^### (.*$)/gim, '<h3>$1</h3>') // For Heading 3 
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // For Heading 2 
        .replace(/^# (.*$)/gim, '<h1>$1</h1>') // For Heading 1 
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>') // For blockquote 
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // For bold 
        .replace(/\*(.*)\*/gim, '<i>$1</i>') // For Italic 
        .replace(/\n$/gim, '<br />') // For Line Break 
        .replace(/\~\~(.*)\~\~/gim, '<s>$1</s>') // For Strikethrough 
        .replace(/\_\_(.*)\_\_/gim, '<u>$1</u>') // For Underline
        .replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gim, "<a href='$1'>$1</a>") // For Link
        .replace(/(\w+(\.|_)*\w+)@(\w+)(.\w{2,3})/gim, "<a href='mailto:$1'>$1</a>"); // For Email
    return htmlText.trim();
};
// Log the formatted html strings to the console
var div = document.createElement("div");
var body = document.querySelector("body");
body.appendChild(div);
strings.forEach(function (string) {
    console.log(markdown(string));
    var div2 = document.createElement("div");
    div2.innerHTML = markdown(string);
    div.append(div2);
});
/*
BONUS:
Render the formatted html strings to index.html
*/
